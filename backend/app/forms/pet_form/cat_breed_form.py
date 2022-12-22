from flask_wtf import FlaskForm
from wtforms.fields import SelectField
from wtforms.validators import DataRequired, Length
from .pet import CatBreeds

class CatBreedForm(FlaskForm):
    breed = SelectField("Breed", choices=CatBreeds)
