module.exports = function(sequelize, Sequelize) {
  var Location = sequelize.define("location", {
    name: {
      type: Sequelize.STRING
    },
    lat:{
      type: Sequelize.FLOAT(10,6)
    },
    lng:{
      type: Sequelize.FLOAT(10,6)
    },
    genderfriend: {
      type: Sequelize.STRING
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
      type: Sequelize.INTEGER
    },
    clean2star: {
      type: Sequelize.INTEGER
    },
    clean3star: {
      type: Sequelize.INTEGER
    },
    clean4star: {
      type: Sequelize.INTEGER
    },
    clean5star: {
      type: Sequelize.INTEGER
    },
    priv1star: {
      type: Sequelize.INTEGER
    },
    priv2star: {
      type: Sequelize.INTEGER
    },
    priv3star: {
      type: Sequelize.INTEGER
    },
    priv4star: {
      type: Sequelize.INTEGER
    },
    priv5star: {
      type: Sequelize.INTEGER
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

  return Location;
};