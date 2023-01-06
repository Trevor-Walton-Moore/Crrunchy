from flask import Blueprint, redirect, render_template, url_for, session, request, jsonify
from flask_login import login_required, current_user
import json

from flask_sqlalchemy import SQLAlchemy

from app.models import db, Order, Product, User, OrdersProducts
from app.forms import OrderForm, OrdersProductsForm
import sys

order_routes = Blueprint("cart", __name__)

# Get one Order
@order_routes.route("/<int:user_id>")
@login_required
def order_index(user_id):
    order = Order.query.filter(Order.user_id == user_id).one()
    print('UUUUUUUUUUUUUUUUUUUUUUUUUUUU ORDER', order.to_dict())
    order_products = OrdersProducts.query.filter(OrdersProducts.order_id == order.to_dict()['id']).all()
    order_products_to_dict = [order_product.to_dict() for order_product in order_products]
    # print('UUUUUUUUUUUUUUUUUUUUUUUUUUUU ORDER_PRODUCTSSSS', order_products_to_dict)
    return {"order": order.to_dict(), "orderProducts": order_products_to_dict}, 200

# Create Order
@order_routes.route("", methods=["POST"])
@login_required
def create_order():
    order_form = OrderForm()
    user = current_user.to_dict()
    # print('CUUUUUUUUUUUUUUUUUUUUUUUUUUUUR USER', user)
    order_form['csrf_token'].data = request.cookies['csrf_token']
    print('FORM DATA----------', order_form.data, '-------)()(()(')

    if order_form.validate_on_submit():
        # print('CREATED ORDER VALIDATED')

        product = Product.query.get(order_form.data['productId'])



        created_order = Order(
            user_id=user['id'],
            # product_id=form.data['productId']
        )
        # print('THENEWORDERRRR', created_order.to_dict())
        db.session.add(created_order)
        db.session.commit()

        new_order = Order.query.filter(Order.user_id==user['id']).order_by(Order.id.desc()).first()

        new_orders_product = OrdersProducts(
            order_id = new_order.id,
            product_id = order_form.data['productId'],
            quantity = 1,
        )

        db.session.add(new_orders_product)
        db.session.commit()

        order_products = OrdersProducts.query.filter(OrdersProducts.order_id == new_order.id).all()

        order_products_to_dict = [order_product.to_dict() for order_product in order_products]

        return {"order": new_order.to_dict(), "orderProducts": order_products_to_dict}, 201

    return {"errors": "VALIDATION: Could not complete Your request"}


# Update Order
@order_routes.route("", methods=['PUT'])
@login_required
def update_order():

    user = current_user.to_dict()
    form = OrdersProductsForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print("-00-0-00-0-0-0--0--0 FORM", form.data)

    if form.validate_on_submit():

        print('did the cart updated validate???!')

        print('######################## product Id from form', form.data['productId'])

        filters = [OrdersProducts.order_id == form.data['orderId'], OrdersProducts.product_id == form.data['productId']]


        # updated_order_product = OrdersProducts.query.filter(OrdersProducts.order_id == form.data['orderId'] and OrdersProducts.product_id == form.data['productId']).one()
        updated_order_product = OrdersProducts.query.filter(*filters).first()

        # print('~~~~~~~~~~~~~~~~~updated_order_prodiuct', updated_order_product.to_dict())
        if not updated_order_product:

            print('___--------_____------_____--wow is the record not exist?')
            new_orders_product = OrdersProducts(
                order_id = form.data['orderId'],
                product_id = form.data['productId'],
                quantity = 1,
            )
            db.session.add(new_orders_product)
            db.session.commit()

        elif form.data['quantity'] == 0:
            db.session.delete(updated_order_product)
            db.session.commit()

        else:
            # print('*************************** the order in da backend bEfOre updating', updated_order_product.to_dict())
            setattr(updated_order_product, 'order_id', form.data['orderId'])
            setattr(updated_order_product, 'product_id', form.data['productId'])
            setattr(updated_order_product, 'quantity', form.data['quantity'])
            # print('*************************** the order in da backend AfTeR updating', updated_order_product.to_dict())

            db.session.add(updated_order_product)
            db.session.commit()

        order_products = OrdersProducts.query.filter(OrdersProducts.order_id == form.data['orderId']).all()

        order_products_to_dict = [order_product.to_dict() for order_product in order_products]

        print('__________________WHADDAP ORDEER PRODUCTS', order_products_to_dict)

        order = Order.query.filter(Order.user_id==user['id']).order_by(Order.id.desc()).first()

        return {'order': order.to_dict(), 'orderProducts': order_products_to_dict}, 201

    return {"errors": ["UNAUTHORIZED: Can't Edit this cart!"]}, 400

# Delete Order
@order_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def destroy_order(id):
    user = current_user.to_dict()

    order = Order.query.filter(Order.id == id).order_by(Order.id.desc()).first()

    # print('=============+++++=====+++++=====+++++=========== order', order)

    order_products = OrdersProducts.query.filter(OrdersProducts.order_id == id).all()

    # ooo = OrdersProducts.query.filter(OrdersProducts.order_id == id).first()

    # print('=============+++++=====+++++=====+++++=========== ooooo', ooo)

    # print('=============+++++=====+++++=====+++++=========== order_products by user_id', order_products)

    if order_products:
        # print('*********************************************yep theres order products', order_products)
        for order_product in order_products:
            # ('********************************************* ONE product', order_product.to_dict())
            db.session.delete(order_product)

    # db.session.delete(order)

    db.session.commit()
    return {"message": "Successfully Deleted", "order": order.to_dict()}, 200
