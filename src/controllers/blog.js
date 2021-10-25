const connection = require("../settings/db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const diskstorage = multer.diskStorage({
  destination: path.join(__dirname, "../../images"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const fileUpload = multer({
  storage: diskstorage,
}).single("image");

let getBlog = (req, res) => {
  const sql = "SELECT * FROM publications";

  connection.query(sql, (error, result) => {
    if (error) throw error;
    result.map((r) => {
      fs.writeFileSync(
        path.join(
          __dirname,
          "../../dbimages/" + r.idPublications + "-" + r.name
        ),
        r.data
      );
    });

    const imagesDir = fs.readdirSync(path.join(__dirname, "../../dbimages/"));

    if (result.length > 0) {
      res.json(result);
    } else {
      res.json([]);
    }
  });
};

let postBlog = (req, res) => {
  const sql = "INSERT INTO publications set ?";
  const type = req.file.mimetype;
  const name = req.file.originalname;
  const data = fs.readFileSync(
    path.join(__dirname, "../../images/" + req.file.filename)
  );
  const blogModel = {
    idPublications: req.body.idPublications,
    title: req.body.title,
    description: req.body.description,
    description1: req.body.description1,
    description2: req.body.description2,
    description3: req.body.description3,
    subtitle: req.body.subtitle,
    subtitle2: req.body.subtitle2,
    type: type,
    name: name,
    data: data,
  };
  connection.query(sql, blogModel, (error) => {
    if (error) throw error;
    res.send("blog was created correctly!");
    fs.unlinkSync("./images/" + req.file.filename);
  });
};

let deleteBlog = (req, res) => {
  const { idPublications } = req.params;
  const help = `SELECT * FROM publications WHERE idPublications = ${idPublications}`;
  connection.query(help, (error, result) => {
    if (error) {
      throw error;
    } else {
      //res.json(result[0].name);
      const name = result[0].name;
      const directory = idPublications + "-" + name;
      const sql = `DELETE FROM publications WHERE idPublications = ${idPublications}`;
      connection.query(sql, (error) => {
        if (error) throw error;
        res.send("blog deleted!");
        fs.unlinkSync("./dbimages/" + directory);
      });
    }
  });
};
module.exports = { getBlog, postBlog, deleteBlog, fileUpload };
