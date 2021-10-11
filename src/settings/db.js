const express = require("express");
const mysql = require("mysql");

//MYSQL
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node20_mysql",
});

module.exports = connection;
