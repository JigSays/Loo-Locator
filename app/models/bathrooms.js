// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Location" model that matches up with DB
var Location = sequelize.define("location", {
  name: {
    type: Sequelize.STRING
  },
  long: {
    type: Sequelize.FLOAT(10, 6)
  },
  lat: {
    type: Sequelize.FLOAT(10, 6)
  },
  address: {
    type: Sequelize.STRING
  },
  handicap: {
    type: Sequelize.BOOLEAN
  },
  keyreq: {
    type: Sequelize.BOOLEAN
  },
  fee: {
    type: Sequelize.BOOLEAN
  },
  clean1star: {
    type: Sequelize.BOOLEAN
  },
  clean2star: {
    type: Sequelize.BOOLEAN
  },
  clean3star: {
    type: Sequelize.BOOLEAN
  },
  clean4star: {
    type: Sequelize.BOOLEAN
  },
  clean5star: {
    type: Sequelize.BOOLEAN
  },
  priv1star: {
    type: Sequelize.BOOLEAN
  },
  priv2star: {
    type: Sequelize.BOOLEAN
  },
  priv3star: {
    type: Sequelize.BOOLEAN
  },
  priv4star: {
    type: Sequelize.BOOLEAN
  },
  priv5star: {
    type: Sequelize.BOOLEAN
  },
  directions: {
    type: Sequelize.STRING
  },
  closed: {
    type: Sequelize.BOOLEAN
  },
}, {
  timestamps: false
});

// Syncs with DB
Location.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Location;