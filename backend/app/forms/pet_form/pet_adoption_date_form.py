from flask_wtf import FlaskForm
from wtforms.fields import DateField
from wtforms.validators import DataRequired, Length


class AdoptionDateForm(FlaskForm):
    Adoption_day = DateField("Adoption Day")
