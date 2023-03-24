var Sequelize = require("sequelize");

var sequelize = new Sequelize(
  "database",
  process.env.USER,
  process.env.PASSWORD,
  {
    host: "0.0.0.0",
    dialect: "sqlite",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    storage: "src/db/database.sqlite"
  }
);

module.exports = sequelize;