const connection = require("../settings/db");

let getReviews = (req, res) => {
  const sql = "SELECT * FROM review";

  connection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.json([]);
    }
  });
};
let postReviews = (req, res) => {
  const sql = "INSERT INTO review set ?";
  const reviewModel = {
    idReview: req.body.idReview,
    name: req.body.name,
    description: req.body.description,
  };
  connection.query(sql, reviewModel, (error) => {
    if (error) throw error;
    res.send("review was created correctly!");
  });
};
let validateTrue = (req, res) => {
  const { idReview } = req.params;
  const sql = `UPDATE review SET state = '${1}' WHERE idReview = ${idReview}`;
  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Review validada");
  });
};
let deleteReview = (req, res) => {
    const { idReview } = req.params;
    const sql = `DELETE FROM review WHERE idReview = ${idReview}`;
    connection.query(sql, (error) => {
      if (error) throw error;
      res.send("review deleted!");
    });
  } 
module.exports = { getReviews, postReviews, validateTrue, deleteReview };
