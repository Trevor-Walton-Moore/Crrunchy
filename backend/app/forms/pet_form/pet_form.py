from flask_wtf import FlaskForm
from wtforms.fields import StringField, IntegerField, SelectField, DateField, FileField
from wtforms.validators import DataRequired, Length, NumberRange
from flask_wtf.file import FileAllowed
from app.models.pet import DogBreeds

pet_types = ["Dog", "Cat"]
genders = ["Female", "Male"]
celebration_types = ["Birthday", "Adoption Day"]

class PetForm(FlaskForm):
    type = SelectField("Type", choices=pet_types)
    name = StringField("Name", validators=[DataRequired(), Length(min=3, max=30)])
    breed = SelectField("Breed", choices=DogBreeds)
    weight = IntegerField("Weight", validators=[DataRequired(), NumberRange(min=1, max=300)])
    gender = SelectField("Gender", choices=genders)
    celebrationDay = SelectField("Celebration Day", choices=celebration_types)
    # birthday = DateField("Birthay")
    # adoptionDay = DateField("Adoption Day")
    profile_icon = FileField("Profile Icon", validators=[FileAllowed(['jpg','jpeg','png'], message="File must be jpg, jpeg, or png!")])
    cover_photo = FileField("Cover Photo", validators=[FileAllowed(['jpg','jpeg','png'], message="File must be jpg, jpeg, or png!")])
