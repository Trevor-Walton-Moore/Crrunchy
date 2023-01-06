from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func
from .user import User
from .orders_products import OrdersProducts

class Order(db.Model):
    __tablename__ = 'orders'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    created_at = db.Column(db.DateTime(), nullable=False, server_default=func.now())

    orders_products = db.relationship("OrdersProducts", back_populates='order', cascade="all, delete")

    # order_products = db.relationship(
    #     'Product',
        # secondary=OrdersProducts,
    #     back_populates='product_orders'
    # )

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'createdAt': self.created_at,
        }
