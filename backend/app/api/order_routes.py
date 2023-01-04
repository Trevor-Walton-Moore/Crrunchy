from flask import Blueprint, redirect, render_template, url_for, session, request, jsonify
from flask_login import login_required, current_user
import json

from flask_sqlalchemy import SQLAlchemy

from app.models import db, Order, Product, User, OrdersProducts
from app.forms import OrderForm, OrdersProductsForm
import sys

order_routes = Blueprint("cart", __name__)

# Get one Order
@order_routes.route("/<int:id>")
@login_required
def order_index(id):
    order = Order.query.order_by(Order.id.desc()).first()
    # print('UUUUUUUUUUUUUUUUUUUUUUUUUUUU ORDER', order.to_dict())
    order_products = OrdersProducts.query.filter(OrdersProducts.order_id == order.id).all()
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
    # print('FORM DATA----------', order_form.data, '-------)()(()(')

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

        # new_order.order_products.append(new_orders_product)

        db.session.add(new_orders_product)
        db.session.commit()
        # return_order = Order.query.filter(Order.user_id==user.id).order_by(Order.id.desc()).first()
        # return_order.order_products.append()

        return {"order": new_order.to_dict(), "order_products": new_orders_product.to_dict()}, 201

    return {"errors": "VALIDATION: Could not complete Your request"}


# Update Order
@order_routes.route("", methods=['PUT'])
@login_required
def update_order():
    form = OrdersProductsForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    print("-00-0-00-0-0-0--0--0 FORM", form.data)

    if form.validate_on_submit():

        print('did the cart updated validate???!')

        updated_order = Order.query.order_by(Order.id.desc()).first()

        setattr(updated_order, 'product_id', form.productId.data)

        db.session.add(updated_order)
        db.session.commit()

        return {'order': updated_order.to_dict()}, 201

    return {"errors": ["UNAUTHORIZED: Can't Edit a Pet You Don't Own!"]}, 400

# Delete Order
@order_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def destroy_order(id):
    user = current_user.to_dict()

    order = Order.query.order_by(Order.id.desc()).first()
    if user['id'] == order.user_id:
        db.session.delete(order)
        db.session.commit()
        return {"message": "Successfully Deleted", "order": order.to_dict()}, 200
    return 'BAD REQUEST', 404
