const express = require("express");
const mysql = require("mysql");

//MYSQL
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "heroku_9c4b36e44ec458e",
});

module.exports = connection;

//mysql://b0d9e007154f51:263d3df8@us-cdbr-east-04.cleardb.com/heroku_9c4b36e44ec458e?reconnect=true

/*
var connection = mysql.createConnection({
  host: "us-cdbr-east-04.cleardb.com",
  user: "b0d9e007154f51",
  password: "263d3df8",
  database: "heroku_9c4b36e44ec458e",
});
*/