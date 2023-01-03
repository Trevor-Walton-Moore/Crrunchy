from app.models import db, Product, environment, SCHEMA


def seed_products():
    product1 = Product(
        name='Bones & Chews Made in USA Roasted Marrow Bone 6" Dog Treat',
        price=5.57,
        category_id=2,
        description="Roasted Marrow Bone is full of flavors \
        sure to satisfy your dog's natural palate. These 100% \
        natural USA beef bones are slow-roasted to preserve the \
        tasty, natural meat flavor. These high density bones \
        are filled with natural marrow to ensure a long lasting \
        challenge for your active chewer. Never contains added \
        artificial colors, flavors or preservatives.",
        product_image='https://image.chewy.com/is/image/catalog/86899_MAIN._AC_SL1200_V1512484677_.jpg',
        )

    product2 = Product(
        name="Vet's Best Indoor Flea & Tick Home Spray for Dogs",
        price=9.97,
        category_id=2,
        description="Vet's Best Indoor Flea & Tick Home Spray \
        for Dogs is formulated with nature's most powerful plant \
        extracts and features a blend of certified natural peppermint \
        oil and eugenol from clove plants to kill fleas and ticks. \
        The 96-oz bottle makes the perfect refill for 3, 32-oz bottles.",
        product_image='https://image.chewy.com/is/image/catalog/60169_MAIN._AC_SL1200_V1662160062_.jpg',
        )
    product3 = Product(
        name='Blue Buffalo Life Protection Formula Adult Chicken & Brown Rice Recipe Dry Dog Food',
        price=60.98,
        category_id=2,
        description="Blue Buffalo Life Protection Formula was \
        created for the holistic health and well-being of adult \
        dogs. All formulas start with real meat, whole grains, \
        garden veggies and fruit, plus added LifeSource Bits, a \
        precise blend of nutrients that have been enhanced with \
        a Super 7 package of antioxidant-rich ingredients. This \
        Adult Chicken & Brown Rice Recipe features delicious, \
        protein-rich deboned chicken and other natural ingredients \
        for a healthy meal your dog will love.",
        product_image='https://image.chewy.com/is/image/catalog/46861_MAIN._AC_SL1200_V1636150598_.jpg',
        )

    product4 = Product(
        name='Frisco Steel-Framed Elevated Dog Bed',
        price=26.99,
        category_id=2,
        description="Give your dog the best rest they deserve \
        after a long walk, a day of play, or just quality time \
        with the family with this steel-framed elevated dog bed, \
        from Frisco by Chewy! It features a sturdy, powder-coated \
        steel frame and a durable, PVC-coated fabric sleeping \
        surface that`s made to last. The tight, breathable fabric \
        provides an added level of comfort and support that also \
        keeps your dog cool and won't sag after extended use. The \
        skid-resistant feet provide extra stability during movement, \
        making this ultra-comfortable bed ideal for use on various \
        surfaces, indoors or outside. It's easy to assemble and just \
        as easy to clean, with surfaces that don't cling to dirt and grime.",
        product_image='https://image.chewy.com/is/image/catalog/99230_MAIN._AC_SL1200_V1566323603_.jpg',
        )

    product5 = Product(
        name='Wyze Cam v3 Pet Camera',
        price=29.98,
        category_id=2,
        description="Keep an eye on your paw-tner anytime with the \
        clever Wyze Cam v3 Pet Camera. It lets you view and record \
        high-quality video right from the Wyze mobile app. The \
        camera's waterproof design means you can install it indoors \
        or out, while a special sensor enables low-light, full-color \
        performance so you can see your buddy at nighttime.",
        product_image='https://image.chewy.com/is/image/catalog/280275_MAIN._AC_SL1200_V1641264802_.jpg',
        )

    product6 = Product(
        name='ZippyPaws Skinny Peltz No Stuffing Squeaky Plush Dog Toys, 3-pack, Large',
        price=14.99,
        category_id=2,
        description="ZippyPaws Skinny Peltz No Stuffing Squeaky \
        Plush Dog Toys feature three cute woodland-creature \
        designs. This set includes a fox, a raccoon and a squirrel, \
        and each large plush toy is filled with two round squeakers \
        for hours of squeaking action. These fun toys are designed \
        for medium-sized dogs who love to squeak — with no stuffing \
        to ensure they last longer with less mess.",
        product_image='https://image.chewy.com/is/image/catalog/104294_MAIN._AC_SL1200_V1534452693_.jpg',
        )

    all_products=[product1, product2, product3, product4,
    product5, product6,]

    add_products=[db.session.add(product) for product in all_products]
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")

    db.session.commit()
