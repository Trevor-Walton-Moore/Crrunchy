from flask_wtf import FlaskForm
from wtforms.fields import FileField
from wtforms.validators import FileAllowed

class ProfileIconForm(FlaskForm):
    profile_icon = FileField("Profile Icon", validators=[FileAllowed(['jpg','jpeg','png'])])
