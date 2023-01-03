from flask_wtf import FlaskForm
from wtforms.fields import StringField, IntegerField, SelectField, DateField, FileField
from wtforms.validators import DataRequired, Length, NumberRange

class OrderForm(FlaskForm):
    # userId = IntegerField("User Id", validators=[DataRequired()])
    productId = IntegerField("Product Id", validators=[DataRequired()])

# class OrderProductsForm(FlaskForm):
#     orderId = IntegerField("User Id", validators=[DataRequired()])
#     productId = IntegerField("Product Id", validators=[DataRequired()])
#     quantity = IntegerField("Quantity", validators=[DataRequired()])
