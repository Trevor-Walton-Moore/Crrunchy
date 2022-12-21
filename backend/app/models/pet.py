from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
import enum
from .user import User

class DogBreeds(enum.Enum):
    affenpinscher = "Affenpinscher"
    afghan = "Afghan"
    afghan_hound = "Afghan Hound"
    african_boerboel = "African Boerboel"
    akbash_dog = "Akbash Dog"
    akita = "Akita"
    alapaha_blue_blood_bulldog = "Alapaha Blue Blood Bulldog"
    alaskan_klee_kai = "Alaskan Klee Kai"
    alaskan_malamute = "Alaskan Malamute"
    american_bulldog = "American Bulldog"
    american_bully = "American Bully"
    american_cocker_spaniel = "American Cocker Spaniel"
    american_english_coonhound = "American English Coonhound"
    american_eskimo = "American Eskimo"
    american_foxhound = "American Foxhound"
    american_hairless_terrier = "American Hairless Terrier"
    merican_leopard_hound = "American Leopard Hound"
    american_pit_bull_terrier = "American Pit Bull Terrier"
    american_staffordshire_terrier = "American Staffordshire Terrier"
    american_water_spaniel = "American Water Spaniel"
    anatolian_shepherd = "Anatolian Shepherd"
    appenzeller_sennenhound = "Appenzeller Sennenhound"
    australian_cattle_dog = "Australian Cattle Dog"
    australian_kelpie = "Australian Kelpie"
    australian_shepherd = "Australian Shepherd"
    austrailian_stumpy_tail_cattle_dog = "Austrailian Stumpy Tail Cattle Dog"
    australian_terrier = "Australian Terrier"
    azawakh = "Azawakh"
    barbet = "Barbet"
    basenji = "Basenji"
    basset_fauvre_de_bretagne = "Basset Fauvre de Bretagne"
    basset_hound = "Basset Hound"
    bavarian_mountain_scent_hound = "Bavarian Mountain Scent Hound"
    beagle = "Beagle"
    bearded_collie = "Bearded Collie"
    beauceron = "Beauceron"
    bedlington_terrier = "Bedlington Terrier"
    belgian_laekenois = "Belgian Laekenois"
    belgian_malinois = "Belgian Malinois"
    belgian_sheepdog = "Belgian Sheepdog"
    belgian_tervuren = "Belgian Tervuren"
    bergamasco = "Bergamasco"
    berger_picard = "Berger Picard"
    bernese_mountain_dog = "Bernese Mountain Dog"
    bichon_frise = "Bichon Frise"
    biewer_terrier = "Biewer Terrier"
    black_and_tan_coonhound = "Black and Tan Coonhound"
    black_and_tan_english_toy_terrier = "Black and Tan English Toy Terrier"
    blackmouth_cur = "Blackmouth Cur"
    black_russian_terrier = "Black Russian Terrier"
    blenheim_spaniel = "Blenheim Spaniel"
    bloodhound = "Bloodhound"
    blue_heeler = "Blue Heeler"
    bluetick_coonhound = "Bluetick Coonhound"
    boerboel = "Boerboel"
    bolognese = "Bolognese"
    border_collie = "Border Collie"
    border_terrier = "Border Terrier"
    borzoi = "Borzoi"
    boston_terrier = "Boston Terrier"
    bouvier_des_flandres = "Bouvier des Flandres"
    boxer = "Boxer"
    boykin_spaniel = "Boykin Spaniel"
    bracco_italiano = "Bracco Italiano"
    braque_du_bourbonnais = "Braque du Bourbonnais"
    braques_francais_pyrenean = "Braques Francais Pyrenean"
    brazilian_terrier = "Brazilian Terrier"
    briard = "Briard"
    brittany = "Brittany"
    broholmer = "Broholmer"
    brussels_griffon = "Brussels Griffon"
    bulldog = "Bulldog"
    bullmastiff = "Bullmastiff"
    bull_terrier = "Bull Terrier"
    cairn_terrier = "Cairn Terrier"
    canaan_dog = "Canaan Dog"
    cane_corso = "Cane Corso"
    catahoula = "Catahoula"
    cavalier_king_charles_spaniel = "Cavalier King Charles Spaniel"
    cesky_terrier = "Cesky Terrier"
    chesapeake_bay_retriever = "Chesapeake Bay Retriever"
    dalmatian = "Dalmatian"
    dandie_dinmont_terrier = "Dandie Dinmont Terrier"
    doberman_pinscher = "Doberman Pinscher"
    dogo_argentino = "Dogo Argentino"

class CatBreeds(enum.Enum):
    snowshoe = "Snowshoe"

class Types(enum.Enum):
    dog = "Dog"
    cat = "Cat"


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
