from app.models import db, environment, SCHEMA, User, Product

def seed_user_product():
    demo = User.query.get(1)

    product_1 = Product.query.get(1)
    product_2 = Product.query.get(2)

    demo.favorites.append(product_1)
    demo.favorites.append(product_2)

    db.session.commit()

def undo_user_product():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.user_product RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM user_product")

    db.session.commit()
