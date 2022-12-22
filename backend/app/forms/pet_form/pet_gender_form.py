from flask_wtf import FlaskForm
from wtforms.fields import SelectField
from wtforms.validators import DataRequired, Length

genders = ["Female", "Male"]

class GenderForm(FlaskForm):
    gender = SelectField("Gender", choices=genders)
