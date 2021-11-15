const connection = require("../settings/db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const diskstorage = multer.diskStorage({
  destination: path.join(__dirname, "../../payments"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const fileUploadPayment = multer({
  storage: diskstorage,
}).single("image");

let getPayments = (req, res) => {
  const sql = "SELECT * FROM payments";

  connection.query(sql, (error, result) => {
    if (error) throw error;
    result.map((r) => {
      fs.writeFileSync(
        path.join(
          __dirname,
          "../../dbpayments/" + r.idPayment + "-" + r.name
        ),
        r.data
      );
    });

    //const imagesDir = fs.readdirSync(path.join(__dirname, "../../dbpayments/"));

    if (result.length > 0) {
      res.json(result);
    } else {
      res.json([]);
    }
  });
};

let postPayments = (req, res) => {
  const sql = "INSERT INTO payments set ?";
  const type = req.file.mimetype;
  const name = req.file.originalname;
  const data = fs.readFileSync(
    path.join(__dirname, "../../payments/" + req.file.filename)
  );
  const paymentModel = {
    idPayment: req.body.idPayment,
    clientname: req.body.clientname,
    clientlastname: req.body.clientlastname,
    email: req.body.email,
    lesson: req.body.lesson,
    dateSelected: req.body.dateSelected,
    phone: req.body.phone,
    type: type,
    name: name,
    data: data,
  };
  connection.query(sql, paymentModel, (error) => {
    if (error) throw error;
    res.send("payment was created correctly!");
    //fs.unlinkSync("./payments/" + req.file.filename);
  });
};

let deletePayments = (req, res) => {
  const { idPayment } = req.params;
  const help = `SELECT * FROM payments WHERE idPayment = ${idPayment}`;
  connection.query(help, (error, result) => {
    if (error) {
      throw error;
    } else {
      //res.json(result[0].name);
      const name = result[0].name;
      const directory = idPayment + "-" + name;
      const sql = `DELETE FROM payments WHERE idPayment = ${idPayment}`;
      connection.query(sql, (error) => {
        if (error) throw error;
        res.send("payment deleted!");
        //fs.unlinkSync("./dbpayments/" + directory);
      });
    }
  });
};

module.exports = { getPayments, postPayments, fileUploadPayment, deletePayments };
