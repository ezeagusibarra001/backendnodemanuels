const express = require("express");
const {homeClases, getClases, getClasesById, postClases, deleteClases} = require("../controllers/clases");

const app = express.Router();

app.get("/", homeClases);
app.get("/lessons", getClases);
app.get("/lessons/:idLesson", getClasesById);
app.post("/lessons", postClases );
app.delete("/lessons/:idLesson", deleteClases);
module.exports = app;
