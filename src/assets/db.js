const mysql2 = require("mysql2"),
  database = require("../../config.json").database;

module.exports = mysql2.createPool(database).promise();
