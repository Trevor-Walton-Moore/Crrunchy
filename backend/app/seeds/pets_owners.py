from app.models import db, environment, SCHEMA, User, Pet

def seed_pets_owners():
    demo = User.query.get(1)
    marnie = User.query.get(2)

    matilda = Pet.query.get(1)
    nova = Pet.query.get(2)

    demo.pet.append(matilda)
    marnie.pet.append(nova)

    db.session.commit()

def undo_pets_owners():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.pets_owners RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM pets_owners")

    db.session.commit()
