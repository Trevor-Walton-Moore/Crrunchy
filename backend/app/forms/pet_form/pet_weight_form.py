from flask_wtf import FlaskForm
from wtforms.fields import IntegerField
from wtforms.validators import DataRequired, NumberRange

class PetWeightForm(FlaskForm):
    weight = IntegerField("Weight", validators=[DataRequired(), NumberRange(min=1, max=300)])
