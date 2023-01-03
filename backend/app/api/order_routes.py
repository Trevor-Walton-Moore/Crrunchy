from flask import Blueprint, redirect, render_template, url_for, session, request, jsonify
from flask_login import login_required, current_user
import json

from flask_sqlalchemy import SQLAlchemy

from app.models import db, Order, Product, User
from app.forms import OrderForm
import sys

order_routes = Blueprint("cart", __name__)

# Get one Order
@order_routes.route("/<int:id>")
@login_required
def order_index(id):
    order = Order.query.order_by(Order.user_id.desc()).first()
    return order.to_dict(), 200

# Create Order
@order_routes.route("", methods=["POST"])
@login_required
def create_order():
    form = OrderForm()
    user = current_user.to_dict()
    # print('CUUUUUUUUUUUUUUUUUUUUUUUUUUUUR USER', user)
    form['csrf_token'].data = request.cookies['csrf_token']
    print('FORM DATA----------', form.data, '-------)()(()(')

    if form.validate_on_submit():
        print('CREATED ORDER VALIDATED')

        product = Product.query.get(form.data['productId'])

        new_order = Order(
            user_id=user['id'],
            # product_id=form.data['productId']
        )
        print('THENEWORDERRRR', new_order.to_dict())
        db.session.add(new_order)
        db.session.commit()

        appended_order = Order.query.filter(Order.user_id==user['id']).order_by(Order.id.desc()).first()

        appended_order.order_products.append(product)

        db.session.commit()
        # return_order = Order.query.filter(Order.user_id==user.id).order_by(Order.id.desc()).first()
        # return_order.order_products.append()

        return {"order": appended_order.to_dict()}, 201

    return {"errors": "VALIDATION: Could not complete Your request"}


# Update Order
@order_routes.route("/<int:id>", methods=['PUT'])
@login_required
def update_order(id):
    form = OrderForm()

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
