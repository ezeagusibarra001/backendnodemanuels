const express = require("express");
const cors = require("cors");
const {
  homeClases,
  getClases,
  getClasesById,
  postClases,
  deleteClases,
} = require("../controllers/clases");
const { login } = require("../controllers/login");
const {
  getBlog,
  postBlog,
  deleteBlog,
  fileUpload,
} = require("../controllers/blog");
const {
  getReviews,
  postReviews,
  validateTrue,
  deleteReview,
} = require("../controllers/review");
const {
  getPayments,
  postPayments,
  deletePayments,
  fileUploadPayment,
  putPayment,
} = require("../controllers/payments");
const {
  putDiscounts,
  postDiscounts,
  getDiscounts,
  deleteDiscounts,
} = require("../controllers/discounts");

const app = express.Router();
var whitelist = ["http://localhost:3000", "http://manuels.com.ar"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//CLASES
app.get("/", homeClases);
app.get("/lessons", getClases);
app.get("/lessons/:idLesson", getClasesById);
app.post("/lessons", cors(corsOptionsDelegate), postClases);
app.delete("/lessons/:idLesson", deleteClases);
//LOGIN
app.post("/login", login);
//PUBLICATIONS
app.get("/publications", getBlog);
app.post("/publications", cors(corsOptionsDelegate), fileUpload, postBlog);
app.delete("/publications/:idPublications", deleteBlog);
//REVIEWS
app.get("/reviews", getReviews);
app.post("/reviews", cors(corsOptionsDelegate), postReviews);
app.put("/reviews/accept/:idReview", validateTrue);
app.delete("/reviews/:idReview", deleteReview);
//CHECKOUT
app.get("/payments", getPayments);
app.post(
  "/payments",
  cors(corsOptionsDelegate),
  fileUploadPayment,
  postPayments
);
app.delete("/payments/:idPayment", deletePayments);
app.put("/payments/:idPayment", putPayment);
//DISCOUNTS
app.put("/discounts", putDiscounts);
app.post("/discounts", cors(corsOptionsDelegate), postDiscounts);
app.get("/discounts", getDiscounts);
app.delete("/discounts/:idDiscounts", deleteDiscounts);
module.exports = app;
