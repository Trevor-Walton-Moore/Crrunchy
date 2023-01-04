from flask_wtf import FlaskForm
from wtforms.fields import StringField, IntegerField, SelectField, DateField, FileField
from wtforms.validators import DataRequired, Length, NumberRange

class OrderForm(FlaskForm):
    # userId = IntegerField("User Id", validators=[DataRequired()])
    productId = IntegerField("Product Id", validators=[DataRequired()])

class OrdersProductsForm(FlaskForm):
    orderId = IntegerField("Order Id", validators=[DataRequired()])
    productId = IntegerField("Product Id", validators=[DataRequired()])
    quantity = IntegerField("Quantity")
