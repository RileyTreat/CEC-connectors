from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_user(id):
    """
    Update an existing user by their ID
    """
    user = User.query.get_or_404(id)

    # Ensure the current user is updating their own data
    if user.id != current_user.id:
        return {'error': 'You can only update your own account.'}, 403

    # Get the data from the request
    data = request.get_json()

    # Update fields (you can update what is needed)
    user.first_name = data.get('first_name', user.first_name)
    user.last_name = data.get('last_name', user.last_name)
    user.email = data.get('email', user.email)

    # You may want to hash the password if it's being updated
    if 'password' in data:
        user.hashed_password = data['password']  # Hashing should be done here before saving to db

    # Commit changes to the database
    db.session.commit()

    return user.to_dict(), 200


@user_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_user(id):
    """
    Delete a user by their ID
    """
    user = User.query.get_or_404(id)

    # Ensure the current user is deleting their own data
    if user.id != current_user.id:
        return {'error': 'You can only delete your own account.'}, 403

    # Delete the user and commit changes
    db.session.delete(user)
    db.session.commit()

    return {'message': 'User successfully deleted'}, 204
