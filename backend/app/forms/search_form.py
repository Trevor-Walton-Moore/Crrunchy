from flask_wtf import FlaskForm
from wtforms.fields import StringField
from wtforms.validators import DataRequired, Length


class SearchForm(FlaskForm):
    search = StringField("Product", validators=[DataRequired(), Length(min=1, max=300)])
