const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const morgan = require("morgan");

const PORT = process.env.PORT || 3050;

const app = express();

const connection = require("./src/settings/db");

app.use(express.static("dbimages"));
app.use(express.static("dbpayments"));

app.use(bodyParser.json());
//cors
app.use(cors());
app.use(morgan("dev"));
//routes
app.use("/api", require("./src/routes/route"));
//check connect
connection.connect((error) => {
  console.log("Database server running!");
  if (error) throw error;
  if (!error) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }
});
