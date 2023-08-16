const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);

const Perfil = require('../models/Perfil');
const Movie = require('../models/Movie');

Movie.init(connection);

module.exports = connection;