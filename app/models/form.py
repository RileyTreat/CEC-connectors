from .db import db, environment, SCHEMA, add_prefix_for_prod


class Form(db.Model):
    __tablename__ = add_prefix_for_prod('forms') if environment == "production" else 'forms'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    user_workPhone_3 = db.Column(db.String, nullable=True)
    organization_name_4 = db.Column(db.String, nullable=False)
    user_email_5 = db.Column(db.String, nullable=False)
    organization_website_6 = db.Column(db.String, nullable=True)
    user_jobTitle_7 = db.Column(db.String, nullable=True)
    user_mobilePhone_8 = db.Column(db.String, nullable=True)
    EECBGExperience_11 = db.Column(db.Text, nullable=True)
    publicTaExperience_12 = db.Column(db.Text, nullable=True)
    inPersonExperience_13 = db.Column(db.Text, nullable=True)
    virtualExperience_14 = db.Column(db.Text, nullable=True)
    underservedExperience_15 = db.Column(db.Text, nullable=True)
    underservedPlan_16 = db.Column(db.Text, nullable=True)
    federalGrantExperience_17 = db.Column(db.Text, nullable=True)
    collaborationExperience_18 = db.Column(db.Text, nullable=True)
    uniqueResorces_19 = db.Column(db.Text, nullable=True)
    workplanDeliverables_20 = db.Column(db.Text, nullable=True)
    milestoneTimelines_21 = db.Column(db.Text, nullable=True)
    keyMetrics_22 = db.Column(db.Text, nullable=True)
    shortTermCommitment_24 = db.Column(db.Enum('Yes', 'No', name='short_term_commitment_enum'), nullable=False, default='No')
    longTermCommitment_25 = db.Column(db.Enum('Yes', 'No', name='long_term_commitment_enum'), nullable=False, default='No')
    callRequest_26 = db.Column(db.Enum('Yes', 'No', name='call_request_enum'), nullable=False, default='No')
    termsAndConditions_27 = db.Column(db.Boolean, nullable=False, default=False)
    user_timezone_30 = db.Column(db.String, nullable=True)
    createdAt = db.Column(db.DateTime, server_default=db.func.now())
    updatedAt = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

    # Relationships
    user = db.relationship('User', back_populates='forms')
    service_areas = db.relationship('ServiceArea', back_populates='form', cascade='all, delete-orphan')
    eecbg_activities = db.relationship('EECBGActivity', back_populates='form', cascade='all, delete-orphan')
    desired_roles = db.relationship('DesiredRole', back_populates='form', cascade='all, delete-orphan')

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "user_workPhone_3": self.user_workPhone_3,
            "organization_name_4": self.organization_name_4,
            "user_email_5": self.user_email_5,
            "organization_website_6": self.organization_website_6,
            "user_jobTitle_7": self.user_jobTitle_7,
            "user_mobilePhone_8": self.user_mobilePhone_8,
            "EECBGExperience_11": self.EECBGExperience_11,
            "publicTaExperience_12": self.publicTaExperience_12,
            "inPersonExperience_13": self.inPersonExperience_13,
            "virtualExperience_14": self.virtualExperience_14,
            "underservedExperience_15": self.underservedExperience_15,
            "underservedPlan_16": self.underservedPlan_16,
            "federalGrantExperience_17": self.federalGrantExperience_17,
            "collaborationExperience_18": self.collaborationExperience_18,
            "uniqueResorces_19": self.uniqueResorces_19,
            "workplanDeliverables_20": self.workplanDeliverables_20,
            "milestoneTimelines_21": self.milestoneTimelines_21,
            "keyMetrics_22": self.keyMetrics_22,
            "shortTermCommitment_24": self.shortTermCommitment_24,
            "longTermCommitment_25": self.longTermCommitment_25,
            "callRequest_26": self.callRequest_26,
            "termsAndConditions_27": self.termsAndConditions_27,
            "user_timezone_30": self.user_timezone_30,
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt
        }
