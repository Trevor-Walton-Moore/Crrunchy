from flask_wtf import FlaskForm
from wtforms.fields import StringField, IntegerField, SelectField, DateField, FileField
from wtforms.validators import DataRequired, Length, NumberRange

class OrderForm(FlaskForm):
    # userId = StringField("User Id", validators=[DataRequired()])
    productId = StringField("Product Id", validators=[DataRequired()])
