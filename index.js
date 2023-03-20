const connection = require("./model/connction");
const express = require("express");
const app = express();

app.listen(3005, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port 3005`);
  }
});


const data = (req, res) => {
  const { id, password } = req.query;
  id = req.query.uid, 
  password = req.query.pass
  console.log(query);

  let sql = `SELECT * FROM user WHERE id='${id}' and password ='${password}'`;

  connection.query(sql, (err, result) => {
    if (result[0]) {
      console.log(result[0]);

      if (result[0].role === "superadmin") {
        let sql = "SELECT * FROM user";
        connection.query(sql, (err, output) => {
          res.send(output);
        });
      } else if (result[0].role === "admin") {
        let sql = "SELECT * FROM user WHERE role=user? OR role=admin";
        connection.query(sql, (err, output) => {
          res.send(output);
        });
      } else if (result[0].role === "user") {
        let sql = "SELECT * FROM user WHERE role=user? ";
        connection.query(sql, (err, output) => {
          res.send(output);
        });
      }
    } else {
      res.json({ Error: err.sqlMessage });
    }
  });
};

app.get("/role", data);

app.use("/", (req, res) => {
  res.status(200);
});
