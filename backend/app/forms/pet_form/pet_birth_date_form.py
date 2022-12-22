from flask_wtf import FlaskForm
from wtforms.fields import DateField
from wtforms.validators import DataRequired, Length


class BirthDateForm(FlaskForm):
    birthday = DateField("Birthay")
