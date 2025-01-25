from app.models import db, DesiredRole, environment, SCHEMA
from sqlalchemy.sql import text

def seed_desired_roles():
    desired_roles = [
        {"user_id": 1, "form_id": 1, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": False, "advisory_support": False},
        {"user_id": 2, "form_id": 2, "admin_lead": True, "admin_support": True, "regional_partner_lead": False, "regional_partner_support": False, "advisory_support": True},
        {"user_id": 3, "form_id": 3, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": False, "advisory_support": False},
        {"user_id": 4, "form_id": 4, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": False},
        {"user_id": 5, "form_id": 5, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": False},
        {"user_id": 6, "form_id": 6, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": False},
        {"user_id": 7, "form_id": 7, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": False},
        {"user_id": 8, "form_id": 8, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": False},
        {"user_id": 9, "form_id": 9, "admin_lead": False, "admin_support": False, "regional_partner_lead": False, "regional_partner_support": True, "advisory_support": False},
        {"user_id": 10, "form_id": 10, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": False, "advisory_support": False},
        {"user_id": 11, "form_id": 11, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": False},
        {"user_id": 12, "form_id": 12, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": False, "advisory_support": True},
        {"user_id": 13, "form_id": 13, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": False, "advisory_support": True},
        {"user_id": 14, "form_id": 14, "admin_lead": False, "admin_support": True, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 15, "form_id": 15, "admin_lead": False, "admin_support": True, "regional_partner_lead": False, "regional_partner_support": True, "advisory_support": False},
        {"user_id": 16, "form_id": 16, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": False},
        {"user_id": 17, "form_id": 17, "admin_lead": False, "admin_support": False, "regional_partner_lead": False, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 18, "form_id": 18, "admin_lead": True, "admin_support": True, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 19, "form_id": 19, "admin_lead": False, "admin_support": True, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 20, "form_id": 20, "admin_lead": False, "admin_support": False, "regional_partner_lead": False, "regional_partner_support": True, "advisory_support": False},
        {"user_id": 21, "form_id": 21, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 22, "form_id": 22, "admin_lead": False, "admin_support": False, "regional_partner_lead": False, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 23, "form_id": 23, "admin_lead": True, "admin_support": False, "regional_partner_lead": False, "regional_partner_support": False, "advisory_support": False},
        {"user_id": 24, "form_id": 24, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 25, "form_id": 25, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": False, "advisory_support": False},
        {"user_id": 26, "form_id": 26, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": False, "advisory_support": False},
        {"user_id": 27, "form_id": 27, "admin_lead": True, "admin_support": True, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 28, "form_id": 28, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": False},
        {"user_id": 29, "form_id": 29, "admin_lead": False, "admin_support": True, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 30, "form_id": 30, "admin_lead": False, "admin_support": True, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": False},
        {"user_id": 31, "form_id": 31, "admin_lead": True, "admin_support": True, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 32, "form_id": 32, "admin_lead": True, "admin_support": False, "regional_partner_lead": False, "regional_partner_support": False, "advisory_support": True},
        {"user_id": 33, "form_id": 33, "admin_lead": False, "admin_support": True, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 34, "form_id": 34, "admin_lead": False, "admin_support": True, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 35, "form_id": 35, "admin_lead": False, "admin_support": True, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 36, "form_id": 36, "admin_lead": False, "admin_support": True, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": False},
        {"user_id": 37, "form_id": 37, "admin_lead": True, "admin_support": True, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 38, "form_id": 38, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": False, "advisory_support": False},
        {"user_id": 39, "form_id": 39, "admin_lead": False, "admin_support": False, "regional_partner_lead": False, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 40, "form_id": 40, "admin_lead": True, "admin_support": False, "regional_partner_lead": False, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 41, "form_id": 41, "admin_lead": False, "admin_support": False, "regional_partner_lead": False, "regional_partner_support": False, "advisory_support": True},
        {"user_id": 42, "form_id": 42, "admin_lead": False, "admin_support": True, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 43, "form_id": 43, "admin_lead": False, "admin_support": False, "regional_partner_lead": False, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 44, "form_id": 44, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 45, "form_id": 45, "admin_lead": False, "admin_support": True, "regional_partner_lead": False, "regional_partner_support": True, "advisory_support": False},
        {"user_id": 46, "form_id": 46, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 47, "form_id": 47, "admin_lead": True, "admin_support": True, "regional_partner_lead": False, "regional_partner_support": False, "advisory_support": True},
        {"user_id": 48, "form_id": 48, "admin_lead": False, "admin_support": True, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 49, "form_id": 49, "admin_lead": True, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 50, "form_id": 50, "admin_lead": False, "admin_support": True, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": False},
        {"user_id": 51, "form_id": 51, "admin_lead": False, "admin_support": True, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": False},
        {"user_id": 52, "form_id": 52, "admin_lead": True, "admin_support": True, "regional_partner_lead": True, "regional_partner_support": False, "advisory_support": True},
        {"user_id": 53, "form_id": 53, "admin_lead": False, "admin_support": True, "regional_partner_lead": True, "regional_partner_support": False, "advisory_support": False},
        {"user_id": 54, "form_id": 54, "admin_lead": False, "admin_support": False, "regional_partner_lead": True, "regional_partner_support": True, "advisory_support": True},
        {"user_id": 55, "form_id": 55, "admin_lead": False, "admin_support": False, "regional_partner_lead": False, "regional_partner_support": True, "advisory_support": True}
    ]

    for role in desired_roles:
        db.session.add(DesiredRole(**role))

    db.session.commit()

def undo_desired_roles():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.desired_role_23 RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM desired_role_23"))
    db.session.commit()
