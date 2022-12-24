from flask_wtf import FlaskForm
from wtforms.fields import SelectField
from wtforms.validators import DataRequired, Length
from .breeds import dog_breeds

class DogBreedForm(FlaskForm):
    breed = SelectField("Breed", choices=dog_breeds)
