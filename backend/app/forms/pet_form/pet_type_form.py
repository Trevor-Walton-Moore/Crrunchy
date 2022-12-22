from flask_wtf import FlaskForm
from wtforms.fields import SelectField
from wtforms.validators import DataRequired

animal_types = ["Dog, Cat"]

class PetTypeForm(FlaskForm):
    type = SelectField("Type", choices=animal_types, validators=[DataRequired()])
