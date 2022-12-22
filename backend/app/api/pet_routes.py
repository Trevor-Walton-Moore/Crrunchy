from flask import Blueprint, redirect, render_template, url_for, session, request, jsonify
from flask_login import login_required, current_user
import json

from flask_sqlalchemy import SQLAlchemy

from app.models import db, Pet, User
# from app.forms import ServerForm, ChannelForm
import sys

pet_routes = Blueprint("pet", __name__)

@pet_routes.route("/<int:id>")
@login_required
def pet_index(id):
    pet = Pet.query.get(id)
    return pet.to_dict(), 200
