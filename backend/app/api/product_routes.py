from flask import Blueprint, redirect, render_template, url_for, session, request, jsonify
from flask_login import current_user
import json

from flask_sqlalchemy import SQLAlchemy

from app.models import db, Product
from app.forms import SearchForm
import sys

product_routes = Blueprint("products", __name__)

# Get all products
@product_routes.route("")
def all_products():
    products = Product.query.all()
    serialized_products = [product.to_dict() for product in products]
    return {'products': serialized_products}, 200

# Add product to favorites
@product_routes.route("/favorite/<int:id>")
def add_to_favorites(id):
    product = Product.query.get(id)
    user = current_user
    user.favorites.append(product)
    user_to_dict = user.to_dict()
    favorites_to_dict = [f.to_dict() for f in user.favorites]
    user_to_dict['favorites'] = favorites_to_dict
    db.session.commit()
    return {'user': user_to_dict}, 200

# Remove product from favorites
@product_routes.route("/remove_favorite/<int:id>")
def remove_from_favorites(id):
    product = Product.query.get(id)
    user = current_user
    user.favorites.remove(product)
    user_to_dict = user.to_dict()
    favorites_to_dict = [f.to_dict() for f in user.favorites]
    user_to_dict['favorites'] = favorites_to_dict
    db.session.commit()
    return {'user': user_to_dict}, 200

# Search products results
@product_routes.route("/search", methods=['POST', 'GET'])
def search_products():
    form = SearchForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    search = form.search.data
    search = f"%{search}%"

    products = Product.query.filter(
        Product.name.ilike(f"%{search}%")
    ).all()

    products_to_dict = [p.to_dict() for p in products]

    return {"products": products_to_dict}
