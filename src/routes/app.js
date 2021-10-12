const express = require("express");
const {
  homeClases,
  getClases,
  getClasesById,
  postClases,
  deleteClases,
} = require("../controllers/clases");
const { login } = require("../controllers/login");
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
module.exports = app;
