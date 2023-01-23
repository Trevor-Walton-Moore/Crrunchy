from flask_wtf import FlaskForm
from wtforms.fields import StringField, IntegerField, SelectField, DateField, FileField
from wtforms.validators import DataRequired, Length, NumberRange, ValidationError, Optional
from flask_wtf.file import FileAllowed
from app.models.breeds import all_breeds
from datetime import datetime

pet_types = ["Dog", "Cat"]
genders = ["Female", "Male"]
celebration_types = ["Birthday", "Adoption Day"]

def adoption_date_check_format(form, field):
    if form.data['celebrationDay'] == 'Birthday': return
    date = field.data
    if not date: return

    try:
        datetime.strptime(date, '%m-%d-%Y')
    except:
        pass
        # raise ValidationError('Must be formated: MM/DD/YY')

def adoption_date_check_future(form, field):
    if form.data['celebrationDay'] == 'Birthday': return
    date = field.data
    if not date: return
    dateObj = datetime.strptime(date, '%m/%d/%Y').date()
    # print(")))))))))))))))))))))))) incoming date: ", dateObj, 'vs now: ', datetime.now().date())
    # print('################################## dateobj > now? ', dateObj > datetime.now().date())
    if dateObj > datetime.now().date():
        # print('##################################')
        raise ValidationError('Date cannot be in the future.')

def birthday_date_check_future(form, field):
    if form.data['celebrationDay'] == 'Adoption Day': return
    date = field.data
    if not date: return
    dateObj = datetime.strptime(date, '%m/%d/%Y').date()
    if dateObj > datetime.now().date():
        raise ValidationError('Date cannot be in the future.')


# def adoption_date_check_null(form, field):
#     if form.data['celebrationDay'] == 'Birthday': return
#     date = field.data
#     if not date:
#         raise ValidationError('Please enter a date.')

# def birthday_date_check_null(form, field):
#     if form.data['celebrationDay'] == 'Adoption Day': return
#     date = field.data
#     if not date:
#         raise ValidationError('Please enter a date.')


class PetForm(FlaskForm):
    type = SelectField("Type", choices=pet_types)
    name = StringField("Name", validators=[DataRequired(), Length(min=3, max=30)])
    breed = SelectField("Breed", choices=all_breeds)
    profileIcon = StringField("Profile Icon", validators=[DataRequired()])
    weight = IntegerField("Weight", validators=[DataRequired(), NumberRange(min=1, max=300)])
    gender = SelectField("Gender", choices=genders)
    celebrationDay = SelectField("Celebration Day", choices=celebration_types)
    birthday = StringField("Birthday", validators=[birthday_date_check_future])
    adoptionDay = StringField("Adoption Day", validators=[adoption_date_check_format, adoption_date_check_future])
    coverImage = StringField("Cover Image")
