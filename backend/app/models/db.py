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

# pets_owners = db.Table(
#     "pets_owners",
#     db.Model.metadata,
#     db.Column(
#         "pet_id", db.Integer, db.ForeignKey(add_prefix_for_prod("pet.id")), primary_key=True
#     ),
#     db.Column(
#         "owner_id", db.Integer, db.ForeignKey(add_prefix_for_prod("owner.id")), primary_key=True
#     )
# )

# if environment == "production":
#     pets_owners.schema = SCHEMA
