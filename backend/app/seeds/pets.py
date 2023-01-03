from app.models import db, Pet, environment, SCHEMA
import datetime


def seed_pets():
    # matilda = Pet(
    #     owner_id=1,
    #     name='Matilda',
    #     type='Dog',
    #     celebration_day='Birthday',
    #     birthday=datetime.datetime(2021, 4, 2),
    #     weight=8,
    #     breed='Australian Terrier',
    #     gender="Female",
    #     )
    nova = Pet(
        owner_id=2,
        name='Nova',
        type='Cat',
        celebration_day='Adoption Day',
        birthday=datetime.datetime(2019, 8, 16),
        weight=11,
        breed='Snowshoe',
        gender="Male",
        profile_icon='https://res.cloudinary.com/dfrj03hsi/image/upload/v1671846109/Crunchy%20images/cat_avatars/avatar_cat_04_ibojqn.png',
        cover_image='https://res.cloudinary.com/dfrj03hsi/image/upload/v1672688691/Crunchy%20images/cover-photo-default_ztxb2f.png'
        )
    # db.session.add(matilda)
    db.session.add(nova)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_pets():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.pets RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM pets")

    db.session.commit()
