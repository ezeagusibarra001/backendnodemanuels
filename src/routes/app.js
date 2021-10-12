const express = require("express");
const {
  homeClases,
  getClases,
  getClasesById,
  postClases,
  deleteClases,
} = require("../controllers/clases");
const { login } = require("../controllers/login");
const { getBlog, postBlog, deleteBlog } = require("../controllers/blog");
const { getReviews, postReviews, validateTrue, deleteReview } = require("../controllers/review");
const app = express.Router();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//CLASES
app.get("/", homeClases);
app.get("/lessons", getClases);
app.get("/lessons/:idLesson", getClasesById);
app.post("/lessons", postClases);
app.delete("/lessons/:idLesson", deleteClases);
//LOGIN
app.post("/login", login);
//PUBLICATIONS
app.get("/publications", getBlog);
app.post("/publications", postBlog);
app.delete("/publications/:idPublications", deleteBlog);
//REVIEWS
app.get("/reviews", getReviews);
app.post("/reviews", postReviews);
app.put("/reviews/accept/:idReview", validateTrue)
app.delete("/reviews/:idReview", deleteReview)
module.exports = app;
