const connection = require("../settings/db");

let getBlog = (req, res) => {
  const sql = "SELECT * FROM publications";

  connection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.json([]);
    }
  });
};

let postBlog = (req, res) => {
  const sql = "INSERT INTO publications set ?";
  const blogModel = {
    idPublications: req.body.idPublications,
    title: req.body.title,
    description: req.body.description,
    description1: req.body.description1,
    description2: req.body.description2,
    description3: req.body.description3,
    subtitle: req.body.subtitle,
    subtitle2: req.body.subtitle2,
    blob: req.body.blob,
  };
  connection.query(sql, blogModel, (error) => {
    if (error) throw error;
    res.send("lesson was created correctly!");
  });
};

let deleteBlog = (req, res) => {
    const { idPublications } = req.params;
    const sql = `DELETE FROM publications WHERE idPublications = ${idPublications}`;
    connection.query(sql, (error) => {
      if (error) throw error;
      res.send("lesson deleted!");
    });
  } 
module.exports = { getBlog, postBlog, deleteBlog };
