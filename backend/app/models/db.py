from flask_sqlalchemy import SQLAlchemy

import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")


db = SQLAlchemy()

# helper function for adding prefix to foreign key column references in production
def add_prefix_for_prod(attr):
    if environment == "production":
        return f"{SCHEMA}.{attr}"
    else:
        return attr

user_product = db.Table(
    "users_products",
    db.Model.metadata,
    db.Column(
        "user_id", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), primary_key=True
    ),
    db.Column(
        "product_id", db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")), primary_key=True
    )
)

if environment == "production":
    user_product.schema = SCHEMA
