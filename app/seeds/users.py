from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text
from werkzeug.security import generate_password_hash


# Adds a demo user, you can add other users here if you want
# Seed file for Users
def seed_users():
    users = [
        {"first_name": "Carol", "last_name": "Cohen", "email": "ccohen@rcac.org", "hashed_password": "password"},
        {"first_name": "Olga", "last_name": "Morales Pate", "email": "omorales-pate@rcap.org", "hashed_password": "password"},
        {"first_name": "Jackie", "last_name": "Dixon", "email": "jdixon@intertribalcouncil.org", "hashed_password": "password"},
        {"first_name": "Dorothy", "last_name": "Barnett", "email": "barnett@climateandenergy.org", "hashed_password": "password"},
        {"first_name": "Debra", "last_name": "Martin", "email": "dcmartin@glcap.org", "hashed_password": "password"},
        {"first_name": "Anthony", "last_name": "Roberts", "email": "aroberts@phase3training.org", "hashed_password": "password"},
        {"first_name": "Val", "last_name": "Stori", "email": "vstori@gpisd.net", "hashed_password": "password"},
        {"first_name": "Jenna", "last_name": "Day", "email": "jday@rcapsolutions.org", "hashed_password": "password"},
        {"first_name": "LeAnn", "last_name": "Kerzman", "email": "lkerzman@map-inc.org", "hashed_password": "password"},
        {"first_name": "Amaury", "last_name": "Malave", "email": "ajmalave@uagm.edu", "hashed_password": "password"},
        {"first_name": "Amber", "last_name": "Greaney", "email": "agreaney@keramida.com", "hashed_password": "password"},
        {"first_name": "Willie", "last_name": "Morgan", "email": "wmorgan@sercap.org", "hashed_password": "password"},
        {"first_name": "Peter", "last_name": "Ciulla", "email": "peter@grandsummit.co", "hashed_password": "password"},
        {"first_name": "Nandini", "last_name": "Mouli", "email": "Nandini@eSai.technology", "hashed_password": "password"},
        {"first_name": "Sara", "last_name": "Mitran", "email": "sara.mitran@nathemc.com", "hashed_password": "password"},
        {"first_name": "Heather", "last_name": "Rhoads", "email": "heather@eformativeoptions.com", "hashed_password": "password"},
        {"first_name": "Catelyn", "last_name": "McGovern", "email": "catelyn@aeecenter.org", "hashed_password": "password"},
        {"first_name": "Qingqing", "last_name": "Liu", "email": "qliu@me.msstate.edu", "hashed_password": "password"},
        {"first_name": "Deborah", "last_name": "Gailmba", "email": "debgalimba@XUTILITY.com", "hashed_password": "password"},
        {"first_name": "Scott", "last_name": "Simkus", "email": "scottsimkus@mac.com", "hashed_password": "password"},
        {"first_name": "Pamela", "last_name": "Fann", "email": "discoverintegratedsolutions@gmail.com", "hashed_password": "password"},
        {"first_name": "Travis", "last_name": "Smith", "email": "tsmith@drgsolutions.com", "hashed_password": "password"},
        {"first_name": "Keith", "last_name": "Kinch", "email": "KLKinch@gmail.com", "hashed_password": "password"},
        {"first_name": "Abdel", "last_name": "Bachri", "email": "agbachri@saumag.edu", "hashed_password": "password"},
        {"first_name": "Sergio", "last_name": "Perez", "email": "spp0040@gmail.com", "hashed_password": "password"},
        {"first_name": "Alexander", "last_name": "Domijan", "email": "alexander.domijan@utrgv.edu", "hashed_password": "password"},
        {"first_name": "Colleen", "last_name": "Plis", "email": "cplis@ocosink.com", "hashed_password": "password"},
        {"first_name": "Adam", "last_name": "Flint", "email": "adam@nynest.org", "hashed_password": "password"},
        {"first_name": "Jessica", "last_name": "Fritz", "email": "jessf@ruralaction.org", "hashed_password": "password"},
        {"first_name": "Holly", "last_name": "Alsop", "email": "Holly@1clickconsultants.com", "hashed_password": "password"},
        {"first_name": "Andrew", "last_name": "Peters", "email": "ANDY@RIVERCONNECTIVITYSYSTEMS.COM", "hashed_password": "password"},
        {"first_name": "Nana Freduah", "last_name": "Prempeh", "email": "freduah@raceagainsttimeinc.org", "hashed_password": "password"},
        {"first_name": "Jenni", "last_name": "Schlosberg", "email": "jenni@amerindnation.com", "hashed_password": "password"},
        {"first_name": "Robert", "last_name": "Stone", "email": "Robert@terraazultech.com", "hashed_password": "password"},
        {"first_name": "Veronica", "last_name": "Rocha", "email": "veronica.rocha@essentialleap.com", "hashed_password": "password"},
        {"first_name": "Nova", "last_name": "Hall", "email": "nova@flyingovertime.org", "hashed_password": "password"},
        {"first_name": "Brandon", "last_name": "Dinsmore", "email": "brandon.dinsmore@okstate.edu", "hashed_password": "password"},
        {"first_name": "Grace", "last_name": "Birdwell", "email": "bimasinetworks@xecu.net", "hashed_password": "password"},
        {"first_name": "Debra", "last_name": "Williams", "email": "debra.williams@communtiesu.org", "hashed_password": "password"},
        {"first_name": "Sarah", "last_name": "Brock", "email": "sarah@cleanenergynh.org", "hashed_password": "password"},
        {"first_name": "Leslie", "last_name": "Graham", "email": "leslieg@irecusa.org", "hashed_password": "password"},
        {"first_name": "Eli", "last_name": "Yewdall", "email": "eli.yewdall@iclei.org", "hashed_password": "password"},
        {"first_name": "David", "last_name": "Holtzclaw", "email": "dholtzclaw@transductiontechnologies.com", "hashed_password": "password"},
        {"first_name": "Jimmy", "last_name": "Nyanwapolu", "email": "jnyanwapolu@direct-energy.org", "hashed_password": "password"},
        {"first_name": "Shannon", "last_name": "Anastosopolos", "email": "shannon@grantedco.com", "hashed_password": "password"},
        {"first_name": "Erin", "last_name": "Kempster", "email": "ekempster@opiniondynamics.com", "hashed_password": "password"},
        {"first_name": "Andy", "last_name": "Holzhauser", "email": "aholzhauser@donovanenergy.com", "hashed_password": "password"},
        {"first_name": "Veronica", "last_name": "Wells", "email": "wellsveronica1967@gmail.com", "hashed_password": "password"},
        {"first_name": "Elizabeth", "last_name": "Ngo", "email": "liz@heycharge.com", "hashed_password": "password"},
        {"first_name": "Bryan", "last_name": "Crowley", "email": "sirbonks@gmail.com", "hashed_password": "password"},
        {"first_name": "Ramin", "last_name": "Moghaddass", "email": "ramin@miami.edu", "hashed_password": "password"},
        {"first_name": "Lydia", "last_name": "Vollmann", "email": "Lydia@grantourcommunity.org", "hashed_password": "password"},
        {"first_name": "Angel", "last_name": "Wileman", "email": "angel.wileman@swri.org", "hashed_password": "password"},
        {"first_name": "Eugene", "last_name": "Francis", "email": "Eugene@TechnologyIdeationLLC.com", "hashed_password": "password"},
        {"first_name": "Pash", "last_name": "Lal", "email": "pl@plga.co.uk", "hashed_password": "password"},
    ]

    for user_data in users:
        user = User(
            first_name=user_data["first_name"],
            last_name=user_data["last_name"],
            email=user_data["email"],
            hashed_password=user_data["hashed_password"]
        )
        db.session.add(user)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        
    db.session.commit()
