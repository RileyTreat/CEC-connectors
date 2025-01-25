from .db import db, environment, SCHEMA, add_prefix_for_prod

class DesiredRole(db.Model):
    __tablename__ = 'desired_role_23'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    form_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('forms.id')), nullable=False)

    admin_lead = db.Column(db.Boolean, default=False)
    admin_support = db.Column(db.Boolean, default=False)
    regional_partner_lead = db.Column(db.Boolean, default=False)
    regional_partner_support = db.Column(db.Boolean, default=False)
    advisory_support = db.Column(db.Boolean, default=False)

    # Relationships
    user = db.relationship('User', back_populates='desired_roles')
    form = db.relationship('Form', back_populates='desired_roles')

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "form_id": self.form_id,
            "admin_lead": self.admin_lead,
            "admin_support": self.admin_support,
            "regional_partner_lead": self.regional_partner_lead,
            "regional_partner_support": self.regional_partner_support,
            "advisory_support": self.advisory_support,
        }
