from flask_wtf import FlaskForm
from wtforms.fields import SelectField
from wtforms.validators import DataRequired, Length

celebration_types = ["Birthday", "Adoption Day"]

class CelebrationDayForm(FlaskForm):
    celebration_day = SelectField("Celebration Day", choices=celebration_types)
