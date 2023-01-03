from .db import db, environment, SCHEMA, add_prefix_for_prod


class OrdersProducts(db.Model):
    __tablename__ = 'orders_products'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    order_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("orders.id")), primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")), primary_key=True)
    quantity = db.Column(db.Integer)

    def to_dict(self):
        return {
            'order_id': self.order_id,
            'product_id': self.product_id,
            'quantity': self.quantity,
        }
