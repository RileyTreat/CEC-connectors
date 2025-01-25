from .db import db, environment, SCHEMA, add_prefix_for_prod

class EECBGActivity(db.Model):
    __tablename__ = 'eecbg_activities_10'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    form_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('forms.id')), nullable=False)
    category_1_strategy_development = db.Column(db.Boolean, default=False)  # Category (1) Strategy Development and Implementation
    category_2_retaining_consulting = db.Column(db.Boolean, default=False)  # Category (2) Retaining Technical Consulting Services
    category_3_residential_audits = db.Column(db.Boolean, default=False)  # Category (3) Residential and Commercial Building Audits
    category_4_financial_incentives = db.Column(db.Boolean, default=False)  # Category (4) Financial Incentives for Energy Efficiency
    category_5_retrofit_grants = db.Column(db.Boolean, default=False)  # Category (5) Energy Efficiency Retrofit Grants for Government Agencies and Nonprofit Organizations
    category_6_efficiency_programs = db.Column(db.Boolean, default=False)  # Category (6) Energy Efficiency and Conservation Programs for Buildings and Facilities
    category_7_transportation_energy = db.Column(db.Boolean, default=False)  # Category (7) Conservation of Transportation Energy
    category_8_building_codes = db.Column(db.Boolean, default=False)  # Category (8) Building Codes and Inspection Services
    category_9_energy_distribution = db.Column(db.Boolean, default=False)  # Category (9) Energy Distribution Technologies
    category_10_material_conservation = db.Column(db.Boolean, default=False)  # Category (10) Material Conservation Programs
    category_11_landfill_gas = db.Column(db.Boolean, default=False)  # Category (11) Reduction, Capture, and Use of Landfill Gases
    category_12_traffic_signals = db.Column(db.Boolean, default=False)  # Category (12) Replacement of Traffic Signals and Street Lighting
    category_13_renewable_energy = db.Column(db.Boolean, default=False)  # Category (13) On-site Renewable Energy On or In a Government Building
    category_14_private_sector_funding = db.Column(db.Boolean, default=False)  # Category (14) Programs for Financing, Purchasing, and Installing Energy Efficiency, Renewable Energy, and Zero-emission Transportation

    # Relationships
    user = db.relationship('User', back_populates='eecbg_activities')
    form = db.relationship('Form', back_populates='eecbg_activities')

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "form_id": self.form_id,
            "category_1_strategy_development": self.category_1_strategy_development,
            "category_2_retaining_consulting": self.category_2_retaining_consulting,
            "category_3_residential_audits": self.category_3_residential_audits,
            "category_4_financial_incentives": self.category_4_financial_incentives,
            "category_5_retrofit_grants": self.category_5_retrofit_grants,
            "category_6_efficiency_programs": self.category_6_efficiency_programs,
            "category_7_transportation_energy": self.category_7_transportation_energy,
            "category_8_building_codes": self.category_8_building_codes,
            "category_9_energy_distribution": self.category_9_energy_distribution,
            "category_10_material_conservation": self.category_10_material_conservation,
            "category_11_landfill_gas": self.category_11_landfill_gas,
            "category_12_traffic_signals": self.category_12_traffic_signals,
            "category_13_renewable_energy": self.category_13_renewable_energy,
            "category_14_private_sector_funding": self.category_14_private_sector_funding,
        }
