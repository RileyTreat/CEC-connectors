from flask.cli import AppGroup
from .users import seed_users, undo_users
from .form import seed_forms, undo_forms
from .service_area import seed_service_areas, undo_service_areas
from .eecbg_activity import seed_eecbg_activities, undo_eecbg_activities
from .desiredRole import seed_desired_roles, undo_desired_roles

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo 
        # command, which will  truncate all tables prefixed with 
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_users()
        undo_forms()
        undo_service_areas()
        undo_eecbg_activities()
        undo_desired_roles()
    seed_users()
    seed_forms()
    seed_service_areas()
    seed_eecbg_activities()
    seed_desired_roles()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_forms()
    undo_service_areas()
    undo_eecbg_activities()
    undo_desired_roles()
    # Add other undo functions here
