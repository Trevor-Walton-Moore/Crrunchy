from flask_wtf import FlaskForm
from wtforms.fields import FileField
from wtforms.validators import FileAllowed

class CoverPhotoForm(FlaskForm):
    cover_photo = FileField("Cover Photo", validators=[FileAllowed(['jpg','jpeg','png'])])
