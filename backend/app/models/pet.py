from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
import enum
from .user import User

DogBreeds = [
    "Affenpinscher",
    "Afghan",
    "Afghan Hound",
    "African Boerboel",
    "Akbash Dog",
    "Akita",
    "Alapaha Blue Blood Bulldog",
    "Alaskan Klee Kai",
    "Alaskan Malamute",
    "American Bulldog",
    "American Bully",
    "American Cocker Spaniel",
    "American English Coonhound",
    "American Eskimo",
    "American Foxhound",
    "American Hairless Terrier",
    "American Leopard Hound",
    "American Pit Bull Terrier",
    "American Staffordshire Terrier",
    "American Water Spaniel",
    "Anatolian Shepherd",
    "Appenzeller Sennenhound",
    "Australian Cattle Dog",
    "Australian Kelpie",
    "Australian Shepherd",
    "Austrailian Stumpy Tail Cattle Dog",
    "Australian Terrier",
    "Azawakh",
    "Barbet",
    "Basenji",
    "Basset Fauvre de Bretagne",
    "Basset Hound",
    "Bavarian Mountain Scent Hound",
    "Beagle",
    "Bearded Collie",
    "Beauceron",
    "Bedlington Terrier",
    "Belgian Laekenois",
    "Belgian Malinois",
    "Belgian Sheepdog",
    "Belgian Tervuren",
    "Bergamasco",
    "Berger Picard",
    "Bernese Mountain Dog",
    "Bichon Frise",
    "Biewer Terrier",
    "Black and Tan Coonhound",
    "Black and Tan English Toy Terrier",
    "Blackmouth Cur",
    "Black Russian Terrier",
    "Blenheim Spaniel",
    "Bloodhound",
    "Blue Heeler",
    "Bluetick Coonhound",
    "Boerboel",
    "Bolognese",
    "Border Collie",
    "Border Terrier",
    "Borzoi",
    "Boston Terrier",
    "Bouvier des Flandres",
    "Boxer",
    "Boykin Spaniel",
    "Bracco Italiano",
    "Braque du Bourbonnais",
    "Braques Francais Pyrenean",
    "Brazilian Terrier",
    "Briard",
    "Brittany",
    "Broholmer",
    "Brussels Griffon",
    "Bulldog",
    "Bullmastiff",
    "Bull Terrier",
    "Cairn Terrier",
    "Canaan Dog",
    "Cane Corso",
    "Catahoula",
    "Cavalier King Charles Spaniel",
    "Cesky Terrier",
    "Chesapeake Bay Retriever",
    "Dalmatian",
    "Dandie Dinmont Terrier",
    "Doberman Pinscher",
    "Dogo Argentino"
]

CatBreeds = ["Snowshoe"]


class Pet(db.Model):
    __tablename__ = 'pets'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False, unique=True)
    name = db.Column(db.String(20), nullable=False)
    type = db.Column(db.String(20), nullable=False)
    celebration_day = db.Column(db.String, nullable=False)
    birthday = db.Column(db.DateTime(20))
    adoption_day = db.Column(db.DateTime(20))
    weight = db.Column(db.String(255), nullable=False)
    breed = db.Column(db.String(255), nullable=False)
    gender = db.Column(db.String(255), nullable=False)
    profile_icon = db.Column(db.String(255))
    cover_image = db.Column(db.String(255))

    owner = db.relationship("User", back_populates="pet")


    def to_dict(self):
        return {
            'id': self.id,
            'ownerId': self.owner_id,
            'name': self.name,
            'type': self.type,
            'celebrationDay': self.celebration_day,
            'birthday': self.birthday,
            'adoptionDay': self.adoption_day,
            'weight': self.weight,
            'breed': self.breed,
            'gender': self.gender,
            'profileIcon': self.profile_icon,
            'coverImage': self.cover_image
        }
