// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("sequelize_location", "jr7bvyhuxc7kzzvr", "d8cvefjx60aept0o", {
  host: "jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com1",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});



// Exports the connection for other files to use
module.exports = sequelize;
