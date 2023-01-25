from flask import Blueprint, redirect, render_template, url_for, session, request, jsonify
import json

from flask_sqlalchemy import SQLAlchemy

from app.models import db, Product
from app.forms import SearchForm
import sys

product_routes = Blueprint("products", __name__)

# Get one Product
@product_routes.route("")
def all_products():
    products = Product.query.all()
    # print('%%%%%%%%%%%%%%%%%%%%products In the BAKCEDN%%%%%%%%%%%%%%%%%%%%%', products)
    serialized_products = [product.to_dict() for product in products]
    # print('%%%%%%%%%%%%%%%%%%%%SERIALIZED PRODUCTS%%%%%%%%%%%%%%%%%%%%%', serialized_products)
    return {'products': serialized_products}, 200

@product_routes.route("/search", methods=['POST', 'GET'])
def search_products():
    form = SearchForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    search = form.search.data
    search = f"%{search}%"

    # channel = Channel.query.get(id)
    # channel_messages = channel.messages
    products = Product.query.filter(
        Product.name.ilike(f"%{search}%")
    ).all()

    products_to_dict = [p.to_dict() for p in products]

    print('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ products', products_to_dict)

    return {"products": products_to_dict}
