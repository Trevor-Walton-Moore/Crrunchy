from flask_wtf import FlaskForm
from wtforms.fields import SelectField
from wtforms.validators import DataRequired, Length
from .pet import DogBreeds

class DogBreedForm(FlaskForm):
    breed = SelectField("Breed", choices=DogBreeds)
