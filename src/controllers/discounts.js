const connection = require("../settings/db");

let putDiscounts = (req, res) => {
  var code = req.body.code;
  const sql = "SELECT * FROM discounts";

  connection.query(sql, (error, result) => {
    if (error) throw error;

    var array = result;
    var respuesta = array.filter(
      (a) => a.code.toLowerCase() === code.toLowerCase()
    );
    if (respuesta.length > 0) {
      res.json({ res: "existe" });
    } else {
      res.json({ res: "no" });
    }
  });
};

let postDiscounts = (req, res) => {
  const sql = "INSERT INTO discounts set ?";
  const disountsModel = {
    idDiscounts: req.body.idDiscounts,
    code: req.body.code,
  };
  connection.query(sql, disountsModel, (error) => {
    if (error) throw error;
    res.send("discount was created correctly!");
  });
};

let getDiscounts = (req, res) => {
  const sql = "SELECT * FROM discounts";

  connection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.json([]);
    }
  });
};

let deleteDiscounts = (req, res) => {
  const { idDiscounts } = req.params;
  const sql = `DELETE FROM discounts WHERE idDiscounts = ${idDiscounts}`;
  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("discount deleted!");
  });
};
module.exports = { putDiscounts, postDiscounts, getDiscounts, deleteDiscounts };
