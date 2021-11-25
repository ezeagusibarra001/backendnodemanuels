const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const morgan = require("morgan");

const PORT = process.env.PORT || 3050;

const app = express();

const connection = require("./src/settings/db");
//cors
app.use(cors());
app.use(express.static("dbimages"));
app.use(express.static("dbpayments"));

app.use(bodyParser.json());

/*var whiteList = ['http://localhost:3000']

var corsOption = {
  origin: function (origin, callback) {
    if(whiteList.indexOf(origin) !== -1){
      callback(null, true)
    }else{
      callback(new Error('Not allowed by CORS'))
    }
  }
}*/

app.use(morgan("dev"));
//routes
app.use("/api", require("./src/routes/route"));
//check connect
/*connection.connect((error) => {
  console.log("Database server running!");
  if (error) {
    console.error(error)

  }else{
    
  }
});*/
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Database server running!");
  console.log("Connected as id " + connection.threadId);
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});


setInterval(function () {
  const sql = "SELECT * FROM publications where id = '1'";
  connection.query(sql, (error, result) => {
  });
}, 5000);
