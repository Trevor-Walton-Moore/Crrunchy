from flask_wtf import FlaskForm
from wtforms.fields import SelectField
from wtforms.validators import DataRequired, Length
from .breeds import cat_breeds

class CatBreedForm(FlaskForm):
    breed = SelectField("Breed", choices=cat_breeds)
