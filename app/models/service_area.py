from .db import db, environment, SCHEMA, add_prefix_for_prod


class ServiceArea(db.Model):
    __tablename__ = add_prefix_for_prod('service_areas') if environment == "production" else 'service_areas'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    form_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('forms.id')), nullable=False)
    global_area = db.Column(db.Boolean, default=False)
    national = db.Column(db.Boolean, default=False)
    alabama = db.Column(db.Boolean, default=False)
    alaska = db.Column(db.Boolean, default=False)
    arizona = db.Column(db.Boolean, default=False)
    arkansas = db.Column(db.Boolean, default=False)
    california = db.Column(db.Boolean, default=False)
    colorado = db.Column(db.Boolean, default=False)
    connecticut = db.Column(db.Boolean, default=False)
    delaware = db.Column(db.Boolean, default=False)
    district_of_columbia = db.Column(db.Boolean, default=False)
    florida = db.Column(db.Boolean, default=False)
    georgia = db.Column(db.Boolean, default=False)
    hawaii = db.Column(db.Boolean, default=False)
    idaho = db.Column(db.Boolean, default=False)
    illinois = db.Column(db.Boolean, default=False)
    indiana = db.Column(db.Boolean, default=False)
    iowa = db.Column(db.Boolean, default=False)
    kansas = db.Column(db.Boolean, default=False)
    kentucky = db.Column(db.Boolean, default=False)
    louisiana = db.Column(db.Boolean, default=False)
    maine = db.Column(db.Boolean, default=False)
    maryland = db.Column(db.Boolean, default=False)
    massachusetts = db.Column(db.Boolean, default=False)
    michigan = db.Column(db.Boolean, default=False)
    minnesota = db.Column(db.Boolean, default=False)
    mississippi = db.Column(db.Boolean, default=False)
    missouri = db.Column(db.Boolean, default=False)
    montana = db.Column(db.Boolean, default=False)
    nebraska = db.Column(db.Boolean, default=False)
    nevada = db.Column(db.Boolean, default=False)
    new_hampshire = db.Column(db.Boolean, default=False)
    new_jersey = db.Column(db.Boolean, default=False)
    new_mexico = db.Column(db.Boolean, default=False)
    new_york = db.Column(db.Boolean, default=False)
    north_carolina = db.Column(db.Boolean, default=False)
    north_dakota = db.Column(db.Boolean, default=False)
    ohio = db.Column(db.Boolean, default=False)
    oklahoma = db.Column(db.Boolean, default=False)
    oregon = db.Column(db.Boolean, default=False)
    pennsylvania = db.Column(db.Boolean, default=False)
    rhode_island = db.Column(db.Boolean, default=False)
    south_carolina = db.Column(db.Boolean, default=False)
    south_dakota = db.Column(db.Boolean, default=False)
    tennessee = db.Column(db.Boolean, default=False)
    texas = db.Column(db.Boolean, default=False)
    utah = db.Column(db.Boolean, default=False)
    vermont = db.Column(db.Boolean, default=False)
    virginia = db.Column(db.Boolean, default=False)
    washington = db.Column(db.Boolean, default=False)
    west_virginia = db.Column(db.Boolean, default=False)
    wisconsin = db.Column(db.Boolean, default=False)
    wyoming = db.Column(db.Boolean, default=False)
    american_samoa = db.Column(db.Boolean, default=False)
    guam = db.Column(db.Boolean, default=False)
    northern_mariana_islands = db.Column(db.Boolean, default=False)
    puerto_rico = db.Column(db.Boolean, default=False)
    us_virgin_islands = db.Column(db.Boolean, default=False)
    federally_recognized_tribes = db.Column(db.Boolean, default=False)
    alaska_native_villages = db.Column(db.Boolean, default=False)
    energy_communities = db.Column(db.Boolean, default=False)
    disadvantaged_communities = db.Column(db.Boolean, default=False)

    # Relationships
    user = db.relationship('User', back_populates='service_areas')
    form = db.relationship('Form', back_populates='service_areas')

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "form_id": self.form_id,
            "global_area": self.global_area,
            "national": self.national,
            "alabama": self.alabama,
            "alaska": self.alaska,
            "arizona": self.arizona,
            "arkansas": self.arkansas,
            "california": self.california,
            "colorado": self.colorado,
            "connecticut": self.connecticut,
            "delaware": self.delaware,
            "district_of_columbia": self.district_of_columbia,
            "florida": self.florida,
            "georgia": self.georgia,
            "hawaii": self.hawaii,
            "idaho": self.idaho,
            "illinois": self.illinois,
            "indiana": self.indiana,
            "iowa": self.iowa,
            "kansas": self.kansas,
            "kentucky": self.kentucky,
            "louisiana": self.louisiana,
            "maine": self.maine,
            "maryland": self.maryland,
            "massachusetts": self.massachusetts,
            "michigan": self.michigan,
            "minnesota": self.minnesota,
            "mississippi": self.mississippi,
            "missouri": self.missouri,
            "montana": self.montana,
            "nebraska": self.nebraska,
            "nevada": self.nevada,
            "new_hampshire": self.new_hampshire,
            "new_jersey": self.new_jersey,
            "new_mexico": self.new_mexico,
            "new_york": self.new_york,
            "north_carolina": self.north_carolina,
            "north_dakota": self.north_dakota,
            "ohio": self.ohio,
            "oklahoma": self.oklahoma,
            "oregon": self.oregon,
            "pennsylvania": self.pennsylvania,
            "rhode_island": self.rhode_island,
            "south_carolina": self.south_carolina,
            "south_dakota": self.south_dakota,
            "tennessee": self.tennessee,
            "texas": self.texas,
            "utah": self.utah,
            "vermont": self.vermont,
            "virginia": self.virginia,
            "washington": self.washington,
            "west_virginia": self.west_virginia,
            "wisconsin": self.wisconsin,
            "wyoming": self.wyoming,
            "american_samoa": self.american_samoa,
            "guam": self.guam,
            "northern_mariana_islands": self.northern_mariana_islands,
            "puerto_rico": self.puerto_rico,
            "us_virgin_islands": self.us_virgin_islands,
            "federally_recognized_tribes": self.federally_recognized_tribes,
            "alaska_native_villages": self.alaska_native_villages,
            "energy_communities": self.energy_communities,
            "disadvantaged_communities": self.disadvantaged_communities,
        }
