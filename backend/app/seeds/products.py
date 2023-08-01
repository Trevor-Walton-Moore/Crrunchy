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

    product7 = Product(
        name='Frisco Fetch Squeaking Colorful Tennis Ball Dog Toy, 3 count',
        price=4.14,
        category_id=2,
        description="Whether you’re playing singles or doubles, \
        these squeaking tennis balls are sure to turn up the fun. \
        They provide the bouncing action and loud squeaking dogs \
        love—in fun color combinations! Unlike regular tennis balls \
        though, these are covered with non-abrasive felt that’s \
        gentle on dogs’ teeth and gums when they catch them. \
        Get your pup chasing after them for daily play and exercise.",
        product_image='https://image.chewy.com/is/image/catalog/152846_Main._AC_SL1200_V1549655070_.jpg',
        )

    product8 = Product(
        name='Simparica Trio Chewable Tablet for Dogs, 44.1-88 lbs, (Green Box)',
        price=180.99,
        category_id=2,
        description="Help your furry friend fight off pests with Simparica \
        Trio Chewable Tablets for Dogs! Every purchase comes with 6 treatments \
        that are specially formulated for canine companions 8 weeks of age and \
        older, weighing between 44.1 and 88 pounds. Simparica Trio is the first \
        and only product that combines sarolaner, moxidectin and pyrantel in each \
        treatment to help prevent heartworm disease, kill fleas before they can \
        lay eggs, kill 5 types of ticks, treat and prevent flea infestations and \
        treat and control roundworms and hookworms. And each monthly chewable \
        tablet has a palatable liver flavor and can be taken with or without food!",
        product_image='https://image.chewy.com/is/image/catalog/224823_MAIN._AC_SL1200_V1583503097_.jpg',
        )

    product9 = Product(
        name='Simparica Trio Chewable Tablet for Dogs, 11.1-22.0 lbs, (Caramel Box)',
        price=161.99,
        category_id=2,
        description="Help your furry friend fight off pests with Simparica \
        Trio Chewable Tablets for Dogs! Every purchase comes with 6 treatments \
        that are specially formulated for canine companions 8 weeks of age and \
        older, weighing between 11.1 and 22 pounds. Simparica Trio is the first \
        and only product that combines sarolaner, moxidectin and pyrantel in each \
        treatment to help prevent heartworm disease, kill fleas before they can \
        lay eggs, kill 5 types of ticks, treat and prevent flea infestations and \
        treat and control roundworms and hookworms. And each monthly chewable \
        tablet has a palatable liver flavor and can be taken with or without food!",
        product_image='https://image.chewy.com/is/image/catalog/224819_MAIN._AC_SL1200_V1583503095_.jpg',
        )

    product10 = Product(
        name='Simparica Trio Chewable Tablet for Dogs, 22.1-44.0 lbs, (Teal Box)',
        price=175.99,
        category_id=2,
        description="Help your furry friend fight off pests with Simparica \
        Trio Chewable Tablets for Dogs! Every purchase comes with 6 treatments \
        that are specially formulated for canine companions 8 weeks of age and \
        older, weighing between 22.1 and 44 pounds. Simparica Trio is the first \
        and only product that combines sarolaner, moxidectin and pyrantel in each \
        treatment to help prevent heartworm disease, kill fleas before they can \
        lay eggs, kill 5 types of ticks, treat and prevent flea infestations and \
        treat and control roundworms and hookworms. And each monthly chewable \
        tablet has a palatable liver flavor and can be taken with or without food!",
        product_image='https://image.chewy.com/is/image/catalog/224821_MAIN._AC_SL1200_V1583503082_.jpg',
        )

    product11 = Product(
        name='Simparica Trio Chewable Tablet for Dogs, 5.6-11.0 lbs, (Purple Box)',
        price=159.99,
        category_id=2,
        description="Help your furry friend fight off pests with Simparica \
        Trio Chewable Tablets for Dogs! Every purchase comes with 6 treatments \
        that are specially formulated for canine companions 8 weeks of age and \
        older, weighing between 5.6 and 11 pounds. Simparica Trio is the first \
        and only product that combines sarolaner, moxidectin and pyrantel in each \
        treatment to help prevent heartworm disease, kill fleas before they can \
        lay eggs, kill 5 types of ticks, treat and prevent flea infestations and \
        treat and control roundworms and hookworms. And each monthly chewable \
        tablet has a palatable liver flavor and can be taken with or without food!",
        product_image='https://image.chewy.com/is/image/catalog/224817_MAIN._AC_SL1200_V1583503079_.jpg',
        )

    product12 = Product(
        name='Simparica Trio Chewable Tablet for Dogs, 2.8-5.5 lbs, (Gold Box)',
        price=2.70,
        category_id=2,
        description="Help your furry friend fight off pests with Simparica \
        Trio Chewable Tablets for Dogs! Every purchase comes with 6 treatments \
        that are specially formulated for canine companions 8 weeks of age and \
        older, weighing between 2.8 and 5.5 pounds. Simparica Trio is the first \
        and only product that combines sarolaner, moxidectin and pyrantel in each \
        treatment to help prevent heartworm disease, kill fleas before they can \
        lay eggs, kill 5 types of ticks, treat and prevent flea infestations and \
        treat and control roundworms and hookworms. And each monthly chewable \
        tablet has a palatable liver flavor and can be taken with or without food!",
        product_image='https://image.chewy.com/is/image/catalog/224815_MAIN._AC_SL1200_V1583503093_.jpg',
        )

    product13 = Product(
        name='Simparica Trio Chewable Tablet for Dogs, 88.1-132.0 lbs, (Brown Box)',
        price=182.67,
        category_id=2,
        description="Help your furry friend fight off pests with Simparica \
        Trio Chewable Tablets for Dogs! Every purchase comes with 6 treatments \
        that are specially formulated for canine companions 8 weeks of age and \
        older, weighing between 88.1 and 132 pounds. Simparica Trio is the first \
        and only product that combines sarolaner, moxidectin and pyrantel in each \
        treatment to help prevent heartworm disease, kill fleas before they can \
        lay eggs, kill 5 types of ticks, treat and prevent flea infestations and \
        treat and control roundworms and hookworms. And each monthly chewable \
        tablet has a palatable liver flavor and can be taken with or without food!",
        product_image='https://image.chewy.com/is/image/catalog/224909_MAIN._AC_SL1200_V1583503077_.jpg',
        )

    product14 = Product(
        name='Revolution Plus Topical Solution for Cats, 5.6-11 lbs, (Orange Box)',
        price=138.99,
        category_id=1,
        description="Help protect your four-legged friend from pesky critters \
        with this 6-in-1 broad spectrum monthly Topical Solution for Cats by \
        Revolution Plus. Simply apply the quick-drying, small-volume prescription \
        to help: kill fleas before they lay eggs, kill ticks for a full month, \
        prevent heartworm disease and treat and control roundworms, hookworms and \
        ear mites. This topical medication is suitable for cats and kittens eight \
        weeks of age or older, weighing between 5.6 and 11 pounds.",
        product_image='https://image.chewy.com/is/image/catalog/158995_MAIN._AC_SL1200_V1549053720_.jpg',
        )

    product15 = Product(
        name='Revolution Plus Topical Solution for Cats, 11.1-22 lbs, (Green Box)',
        price=142.99,
        category_id=1,
        description="Help protect your four-legged friend from pesky critters \
        with this 6-in-1 broad spectrum monthly Topical Solution for Cats by \
        Revolution Plus. Simply apply the quick-drying, small-volume prescription \
        to help: kill fleas before they lay eggs, kill ticks for a full month, \
        prevent heartworm disease and treat and control roundworms, hookworms and \
        ear mites. This topical medication is suitable for cats and kittens eight \
        weeks of age or older, weighing between 11.1 and 22 pounds.",
        product_image='https://image.chewy.com/is/image/catalog/158998_MAIN._AC_SL1200_V1549053721_.jpg',
        )

    product16 = Product(
        name='Sheba Perfect Portions Grain-Free Gourmet Salmon, 2.6-oz, case of 24 twin-packs',
        price=25.98,
        category_id=1,
        description="Your best friend will know you’re fishing for compliments \
        when you bring home this variety pack of Sheba Perfect Portions Gourmet \
        Salmon, Signature Tuna and Delicate White Fish & Tuna Cuts in Gravy Entrées. \
        Each pack includes 12 Gourmet Salmon, 6 Signature Tuna and 6 Delicate White \
        Fish & Tuna Cuts in Gravy Twin Pack Entrees and delivers enough sea-licious \
        flavor to satisfy even the ficklest felines. All the entrees feature tender \
        fish morsels in tasty gravy and are fortified with the essential vitamins and \
        minerals your cat needs to thrive. No kitty can resist the fabulously fishy \
        flavors of these feasts!",
        product_image='https://image.chewy.com/is/image/catalog/124887_MAIN._AC_SL1200_V1657655407_.jpg',
        )

    product17 = Product(
        name='Sheba Perfect Portions Grain-Free Roasted Chicken, 1.3-oz, case of 24 twin-packs',
        price=25.98,
        category_id=1,
        description="Keep your kitty’s meal routine lively with this multipack of Sheba \
        Perfect Portions Roasted Chicken, Gourmet Salmon and Tender Turkey Cuts in Gravy \
        Entrées. This variety pack includes 12 Roasted Chicken, 6 Gourmet Salmon and 6 \
        Tender Turkey Cuts in Gravy Twin Pack Entrees and delivers enough meal excitement \
        to satisfy even the finickiest felines. All entrees feature tender meaty morsels in \
        tasty gravy and contain all the essential vitamins and minerals your cat needs to \
        feel her best. Your best friend will love getting a new flavor every day and \
        you’ll love the mess-free convenience!",
        product_image='https://image.chewy.com/is/image/catalog/124882_MAIN._AC_SL1200_V1657655406_.jpg',
        )

    product18 = Product(
        name='Sheba Perfect Portions Grain-Free Savory Chicken, 2.6-oz, case of 24 twin-packs',
        price=25.98,
        category_id=1,
        description="Make mealtime even more delicious with the Sheba Perfect Portions \
        Grain-Free Multipack Savory Chicken, Roasted Turkey & Tender Beef Pate Cat Food \
        Trays. This variety pack combines three irresistible grain-free recipes that cats \
        just love, each made with real ingredients like chicken, turkey and beef pate in \
        natural juices. Plus, it has added vitamins, minerals, fish oil and taurine so \
        it’s a complete and balanced diet for adult cats, nursing moms or kittens. \
        Simply feed to your pal according to his weight, either on its own or with dry \
        kibble, with the easy-to-open tear packages that make for the perfect portion size every time.",
        product_image='https://image.chewy.com/is/image/catalog/124885_MAIN._AC_SL1200_V1626817573_.jpg',
        )

    product19 = Product(
        name='Tidy Cats Breeze Cat Litter Box System',
        price=42.98,
        category_id=1,
        description="Rethink how you clean your kitty's litter box with the Purina \
        Tidy Cats Breeze Litter System Starter Kit. This easy-to-maintain system takes \
        the guesswork out of changing litter. Tidy Cats Breeze cat litter pellets \
        capture solid waste on top, letting liquids pass through to the super-absorbent \
        pads below. Best of all, this Breeze kitty litter system also helps you keep \
        your floors neat floors and your home smelling fresh. Plus, the mess-minimizing \
        litter pellets help keep your furry friends from tracking litter, and the \
        system packs a powerful punch of litter odor control. This cat litter box \
        system starter kit comes with everything you need to get your furry family \
        started on this easy-to-use system.",
        product_image='https://image.chewy.com/is/image/catalog/62129_MAIN._AC_SL1200_V1653401229_.jpg',
        )

    product20 = Product(
        name='Tidy Cats Breeze Cat Litter Pellets Refill',
        price=14.99,
        category_id=1,
        description="Shave time off your to-do list with a Purina Tidy Cats Breeze Cat \
        Litter Pellets Refill. The unscented cat litter pellets let urine pass through, \
        leaving solid waste on top. This makes scooping your Breeze cat litter system a \
        snap. Plus, the 99.9 percent dust free cat litter pellets pour cleanly into your \
        cat litter box and are low-tracking, helping to keep down the mess around her \
        box. Breeze pellets make life better for your furry friends, too. The innovative \
        pellets wow with out-of-this world odor control and are great for households with \
        multiple cats, helping keep your feline family happy and comfy. Check litter box \
        chores off your list with this anti-tracking pellet cat litter, made to work with \
        the Tidy Cats Breeze litter system (sold separately).",
        product_image='https://image.chewy.com/is/image/catalog/78108_MAIN._AC_SL1200_V1647916407_.jpg',
        )

    product21 = Product(
        name='Tidy Cats Breeze Spring Clean Scented Cat Pads',
        price=15.89,
        category_id=1,
        description="Keep your kitty happy and your home smelling fresh with the \
        odor-controlling technology of the Tidy Cats Breeze Spring Clean Cat Pads. \
        Specially designed to work with the separately sold Tidy Cats Breeze \
        Litter Box System, these ultra-absorbent cat pads are packed with the \
        fresh scent of a clean spring breeze that will leave your house smelling \
        fresh, while helping to keep your favorite feline out of wet messes. \
        Installation is completely hassle-free and the disposable pads fight odors \
        in your home for up to a week and can simply be tossed out when it’s time \
        to freshen up the litter box. Now you can spend more time cuddling with \
        your fur baby and less time cleaning her litter box!",
        product_image='https://image.chewy.com/is/image/catalog/78108_MAIN._AC_SL1200_V1647916407_.jpg',
        )

    product22 = Product(
        name='Frisco Colorful Springs Cat Toy, 10 count',
        price=5.62,
        category_id=1,
        description="Spring into playtime with a classic kitty playtime favorite! \
        Some cats are all about the simple things, like a colorful, bouncy spring \
        to chase and bat around the house. These springs have an erratic bounce to \
        turn up the playtime excitement and come in vibrant colors to keep cats \
        engaged in play. They’re perfect to give your kitty the daily mental \
        stimulation and exercise they need, without a whole lot of fuss. Just \
        break them out and let the games begin!",
        product_image='https://image.chewy.com/is/image/catalog/161807_MAIN._AC_SL1200_V1565795955_.jpg',
        )

    product23 = Product(
        name='Frisco Bird with Feathers Teaser Wand Cat Toy with Catnip',
        price=5.94,
        category_id=1,
        description="This is no angry bird, but rather the perfect play buddy \
        for your kitty from Frisco by Chewy. Wave it around and let the colorful \
        feathers, dangly string, crinkly sound and catnip entice bored felines \
        to jump into play. Leap, actually! By stimulating their natural hunting \
        instincts, it’s the perfect way to provide cats with the daily exercise \
        they need. Playing together also helps strengthen the bond between you \
        and your cat, on the daily.",
        product_image='https://image.chewy.com/is/image/catalog/161199_MAIN._AC_SL1200_V1568240233_.jpg',
        )

    product24 = Product(
        name='Frisco Butterfly Cat Tracks Cat Toy',
        price=10.23,
        category_id=1,
        description="If there was an amusement park for kitties, this toy would \
        be the main attraction. That’s because this interactive triple-decker \
        tower from Frisco by Chewy has everything cats love—a ball to bat and \
        chase around the tracks, the excitement of hearing the sound of the \
        balls roll along the tracks, and even a fluttery butterfly on top! There \
        are three levels for even more play, each with its own rolling ball, so \
        more than one kitty can get in on the fun. Go ahead, let them go wild. \
        The nonskid pads keep the track from sliding around when playtime goes into overtime.",
        product_image='https://image.chewy.com/is/image/catalog/161805_MAIN._AC_SL1200_V1565736429_.jpg',
        )

    product25 = Product(
        name='SmartyKat Hot Pursuit Electronic Concealed Motion Cat Toy, Blue',
        price=17.58,
        category_id=1,
        description="SmartyKat keeps your cat entertained with the fascinating \
        prey-like movements of their Hot Pursuit Electronic Concealed Motion Cat Toy. \
        The concealed wand spins around the base unpredictably as your cat waits \
        for a chance to pounce. You can customize the experience with two exciting \
        speeds and one interchangeable wand attachment.",
        product_image='https://image.chewy.com/is/image/catalog/132636_MAIN._AC_SL1200_V1535648593_.jpg',
        )

    product26 = Product(
        name='Catit Play Massager Circuit Ball Cat Toy',
        price=12.99,
        category_id=1,
        description="Help your kitty namaste relaxed with this Catit Play Massager \
        Circuit Ball Cat Toy. It’s like a soothing spa treatment for your fur-ever \
        friend. Outfitted with a ball-and-track area, nubby massage board and a \
        bouncing, spring-mounted bee, this 3-in-1 toy provides a variety of activities \
        that will hold your fur baby’s attention. Watch as she gleefully pounces from \
        each play area—add some of the included catnip to further boost your kitty’s \
        playtime. This circuit ball toy is purr-fect for playtime or soothing.",
        product_image='https://image.chewy.com/is/image/catalog/191548_MAIN._AC_SL1200_V1628191501_.jpg',
        )

    product26 = Product(
        name='Frisco Self Warming Bolster Round Kitten Bed',
        price=12.28,
        category_id=1,
        description="There are cozy beds, and then there are self-warming beds. \
        Level up the coziness factor with a bed that radiates your kitten’s own \
        body heat to keep them warm naturally. With no plugs or wires, you can \
        keep your kitty nice and warm so they can nap and lounge comfy. This soft \
        and cozy round shaped cat bed comes in neutral colors that complement any \
        home décor. Plus, they’re machine-washable so you can keep them clean easily.",
        product_image='https://image.chewy.com/is/image/catalog/191548_MAIN._AC_SL1200_V1628191501_.jpg',
        )

    product27 = Product(
        name='Frisco Self Warming Bolster Round Kitten Bed',
        price=17.95,
        category_id=1,
        description="Keep your cat cozy all year long with the Igloo Style Cat \
        Tent from Pet Adobe! This comfortable cuddle cavern features a triangular \
        entrance and igloo-like shape that’s perfect for the cat, kitten or small \
        dog in your life. With a textured bottom that prevents sliding, this \
        kitty cave is constructed with practicality in mind. Plus, it comes \
        with an ultra-soft foam cushion that can be removed for easy cleaning. \
        Whether for cat naps or a night-long snooze, this igloo-style bed is \
        fit for your favorite feline.",
        product_image='https://image.chewy.com/is/image/catalog/315018_MAIN._AC_SL1200_V1626357676_.jpg',
        )

    product28 = Product(
        name='Frisco Flower Adjustable Cat Bolster Bed, Calico Cat',
        price=15.99,
        category_id=1,
        description="Spring is here and nothing beats sleeping on a bed of \
        flowers, which your cat will get to do with this bolster bed from \
        Frisco, by Chewy. Your kitty is going to be glued to this bed once \
        they lay their whiskers on it. Perfect for chillin’ out, cat naps or \
        sleeping the night away, this adjustable bolster bed will keep them \
        purring with joy. A drawstring closure makes the bolsters easy to \
        adjust for the perfect fit. When you’re done, just tuck it away in \
        the concealed pocket. If their new hangout spot ever gets dirty, \
        don’t worry, it’s machine washable, making cleanup super easy \
        so they can get back to catching more Zs.",
        product_image='https://image.chewy.com/is/image/catalog/333860_MAIN._AC_SL1200_V1658718002_.jpg',
        )

    product29 = Product(
        name='Bundle: Frisco Poop Bags & Dispenser, 15 count + Refill Dog Poop Bags, 120 count',
        price=10.89,
        category_id=1,
        description="Stay stocked up for your sidekick. Each purchase \
        comes with a 120-count box of Frisco Refill Dog Poop Bags and \
        15 Frisco Dog Poop Bags in a Dispenser. When it’s time for your \
        pup to take care of some important business, the bags help get \
        the job done right. They measure 9 x 13-inches in size and are \
        both durable and leak-proof. The dispenser is great for quick \
        access during walks and is stocked with 15 bags to pick up after \
        any dog, big or small.",
        product_image='https://image.chewy.com/is/image/catalog/255599_MAIN._AC_SL1200_V1669924872_.jpg',
        )

    product30 = Product(
        name='Wee-Wee Outdoor Dog Spade Set',
        price=58.38,
        category_id=1,
        description="Four Paws Wee-Wee Outdoor Dog Spade Set is every \
        pet parent's greatest weapon when it comes to clearing deadly (smelling) \
        puppy poop mines from lawns. The spade and scoop base are incredibly \
        durable and the stainless steel base is guaranteed not to rust. Keep \
        your hands and nose away from the danger zone with a little help from Four Paws.",
        product_image='https://image.chewy.com/is/image/catalog/65309_MAIN._AC_SL1200_V1657661014_.jpg',
        )

    all_products=[
    product1, product2, product3, product4, product5, product6,
    product7, product8, product9, product10, product11, product12,
    product13, product14, product15, product16, product17, product18,
    product19, product20, product21, product22, product23, product24,
    product25, product26, product27, product28, product29, product30
    ]

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
