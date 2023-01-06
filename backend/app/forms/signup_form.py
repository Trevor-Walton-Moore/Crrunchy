from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

# def passwords_match(form, field):
#     password = field.data
#     repeatPassword = field.data
#     if password != repeatPassword:
#         raise ValidationError('Passwords must match.')

def email_required(form, field):
    # Checking if username is already in use
    email = field.data
    if not email:
        raise ValidationError('Email is required.')

def username_required(form, field):
    # Checking if username is already in use
    username = field.data
    if not username:
        raise ValidationError('Username is required.')

def first_name_required(form, field):
    # Checking if username is already in use
    first_name = field.data
    if not first_name:
        raise ValidationError('First name is required.')

def last_name_required(form, field):
    # Checking if username is already in use
    last_name = field.data
    if not last_name:
        raise ValidationError('Last name is required.')

def password_required(form, field):
    # Checking if username is already in use
    password = field.data
    if not password:
        raise ValidationError('Password is required.')



class SignUpForm(FlaskForm):
    email = StringField('email', validators=[email_required, user_exists])
    username = StringField(
        'username', validators=[username_exists, username_required])
    firstName = StringField('first_name', validators=[first_name_required])
    lastName = StringField('last_name', validators=[last_name_required])
    password = StringField('password', validators=[password_required])
    # repeatPassword = StringField('repeat password', validators=[DataRequired()])
