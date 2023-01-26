from .db import db, environment, SCHEMA, add_prefix_for_prod, user_product
from datetime import datetime
import enum
from .user import User
from .orders_products import OrdersProducts

class Product(db.Model):
    __tablename__ = 'products'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Numeric(precision=10, scale=2), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('categories.id')), nullable=False)
    description = db.Column(db.String(2000), nullable=False)
    product_image = db.Column(db.String(), nullable=False)

    # users_favorited =  db.relationship('User', secondary=user_product, backref='favorites')

    # product_orders = db.relationship(
    #     'Order',
    #     secondary=OrdersProducts,
    #     back_populates='order_products'
    # )

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': float(self.price),
            'categoryId': self.category_id,
            'description': self.description,
            'productImage': self.product_image,
        }
