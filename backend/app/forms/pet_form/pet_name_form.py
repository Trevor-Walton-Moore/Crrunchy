from flask_wtf import FlaskForm
from wtforms.fields import StringField
from wtforms.validators import DataRequired, Length

class PetNameForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired(), Length(min=3, max=30)])
