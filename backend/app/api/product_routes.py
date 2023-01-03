from flask import Blueprint, redirect, render_template, url_for, session, request, jsonify
import json

from flask_sqlalchemy import SQLAlchemy

from app.models import db, Product
import sys

product_routes = Blueprint("products", __name__)

# Get one Pet
@product_routes.route("")
def all_products():
    products = Product.query.all()
    # print('%%%%%%%%%%%%%%%%%%%%products In the BAKCEDN%%%%%%%%%%%%%%%%%%%%%', products)
    serialized_products = [product.to_dict() for product in products]
    # print('%%%%%%%%%%%%%%%%%%%%SERIALIZED PRODUCTS%%%%%%%%%%%%%%%%%%%%%', serialized_products)
    return {'products': serialized_products}, 200
