const Sequelize = require("sequelize");
const sequelize = new Sequelize("movies", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
