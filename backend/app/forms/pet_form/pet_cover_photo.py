from flask_wtf import FlaskForm
from wtforms.fields import StringField
# from wtforms.validators import FileAllowed

class CoverPhotoForm(FlaskForm):
    cover_photo = StringField("Cover Photo")
