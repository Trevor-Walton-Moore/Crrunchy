from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
import enum
from .user import User

class Breeds(enum.Enum):
    affenpinscher = "Affenpinscher"
    afghan = "Afghan"
    afghan_hound = "Afghan Hound"
    akita = "Akita"
    miniature_american_eskimo = "Miniature American Eskimo"
    standard_american_eskimo = "Standard American Eskimo"
    american_staffordshire_terrier = "American Staffordshire Terrier"
    anatolian_shepherd = "Anatolian Shepherd"
    australian_cattle_dog = "Australian Cattle Dog"
    australian_shepherd = "Australian Shepherd"
    australian_terrier = "Australian Terrier"

class Types(enum.Enum):
    dog = "Dog"
    cat = "Cat"


class Pet(db.Model):
    __tablename__ = 'pets'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    ownerId = db.Column(db.Integer, nullable=False, unique=True)
    name = db.Column(db.String(20), nullable=False)
    type = db.Column(db.String(20), nullable=False)
    celebrationDay = db.Column(db.String, nullable=False)
    birthday = db.Column(db.DateTime(20))
    adoptionDay = db.Column(db.DateTime(20))
    weight = db.Column(db.String(255), nullable=False)
    breed = db.Column(db.String(255), nullable=False)
    gender = db.Column(db.String(255), nullable=False)
    profileIcon = db.Column(db.String(255))
    coverIcon = db.Column(db.String(255))

    ownerId = db.relationship("User", back_populates="Users")

    def to_dict(self):
        return {
            'id': self.id,
            'ownerId': self.ownerId,
            'name': self.name,
            'type': self.type,
            'celebrationDay': self.celebrationDay,
            'birthday': self.birthday,
            'adoptionDay': self.adoptionDay,
            'weight': self.weight,
            'breed': self.breed,
            'gender': self.gender,
            'profileIcon': self.profileIcon,
            'profileIcon': self.profileIcon,
        }
