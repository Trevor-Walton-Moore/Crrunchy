from flask_wtf import FlaskForm
from wtforms.fields import StringField, IntegerField, SelectField, DateField, FileField
from wtforms.validators import DataRequired, Length, NumberRange
from flask_wtf.file import FileAllowed
from app.models.breeds import all_breeds

pet_types = ["Dog", "Cat"]
genders = ["Female", "Male"]
celebration_types = ["Birthday", "Adoption Day"]

class PetForm(FlaskForm):
    type = SelectField("Type", choices=pet_types)
    name = StringField("Name", validators=[DataRequired(), Length(min=3, max=30)])
    breed = SelectField("Breed", choices=all_breeds)
    profileIcon = StringField("Profile Icon", validators=[DataRequired()])
    weight = IntegerField("Weight", validators=[DataRequired(), NumberRange(min=1, max=300)])
    gender = SelectField("Gender", choices=genders)
    celebrationDay = SelectField("Celebration Day", choices=celebration_types)
    birthday = DateField("Birthday", format='%m-%d-%Y')
    adoptionDate = DateField("Adoption Day", format='%m-%d-%Y')
    coverPhoto = StringField("Cover Photo")
