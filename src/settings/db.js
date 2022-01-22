const express = require("express");
const mysql = require("mysql");

//MYSQL
var connection = mysql.createConnection({
  host: "us-cdbr-east-05.cleardb.net",
  user: "bb269a432fe874",
  password: "2c7cbf6b",
  database: "heroku_f33b3b4437eb313",
});

module.exports = connection;

//ESTAAA
//mysql://bb269a432fe874:2c7cbf6b@us-cdbr-east-05.cleardb.net/heroku_f33b3b4437eb313?reconnect=true
//mysql://bb269a432fe874:2c7cbf6b@us-cdbr-east-05.cleardb.net/heroku_f33b3b4437eb313?reconnect=true







//mysql://bbfae30e522cc3:2be15bb7@us-cdbr-east-04.cleardb.com/heroku_648485e37fb60ab?reconnect=true
//mysql://bbfae30e522cc3:2be15bb7@us-cdbr-east-04.cleardb.com/heroku_648485e37fb60ab?reconnect=true

//CLEARDB_CYAN_URL: mysql://bbfae30e522cc3:2be15bb7@us-cdbr-east-04.cleardb.com/heroku_648485e37fb60ab?reconnect=true
//mysql://b0d9e007154f51:263d3df8@us-cdbr-east-04.cleardb.com/heroku_9c4b36e44ec458e?reconnect=true
//https://script.google.com/macros/s/AKfycbwqbzn6u6vTMDWGndc397V9jzmx5N87aIK_2jIF1w/exec
/*
var connection = mysql.createConnection({
  host: "us-cdbr-east-04.cleardb.com",
  user: "b0d9e007154f51",
  password: "263d3df8",
  database: "heroku_9c4b36e44ec458e",
});

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "heroku_9c4b36e44ec458e",
});
var connection = mysql.createConnection({
  host: "us-cdbr-east-04.cleardb.com",
  user: "bbfae30e522cc3",
  password: "2be15bb7",
  database: "heroku_648485e37fb60ab"
});
*/