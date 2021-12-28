const connection = require("../settings/db");
let homeClases = (req, res) => {
  res.send("THIS IS THE API FOR MANUELS!");
};

let getClases = (req, res) => {
  const sql = "SELECT * FROM lesson";

  connection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.json([]);
    }
  });
};

let getClasesById = (req, res) => {
  const { idLesson } = req.params;
  const sql = `SELECT * FROM lesson WHERE idLesson = ${idLesson}`;
  connection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.json([]);
    }
  });
};

let postClases = (req, res) => {
  const sql = "INSERT INTO lesson set ?";
  const clasesModel =  {
    idLesson: req.body.idLesson,
    title: req.body.title,
    description: req.body.description,
    quota: req.body.quota,
    requirements: req.body.requirements,
    forwho: req.body.forwho,
    teacher: req.body.teacher,
    duration: req.body.duration,
    link: req.body.link,
    link1: req.body.link1,
    descountLink: req.body.descountLink,
    date: req.body.date,
    price: req.body.price,
    dolar: req.body.dolar,
    linkDolar: req.body.linkDolar,
}
  connection.query(sql, clasesModel, (error) => {
    if (error) throw error;
    res.send("lesson was created correctly!");
  });
};

let deleteClases = (req, res) => {
  const { idLesson } = req.params;
  const sql = `DELETE FROM lesson WHERE idLesson = ${idLesson}`;
  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("lesson deleted!");
  });
} 

module.exports = { homeClases, getClases, getClasesById, postClases, deleteClases };

/*app.put("/customers/:idcustomers", (req, res) => {
  const { idcustomers } = req.params;
  const { name, age } = req.body;
  const sql = `UPDATE customers SET name = '${name}', age = '${age}'
    WHERE idcustomers = ${idcustomers}`;
  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("customer updated!");
  });
}); */