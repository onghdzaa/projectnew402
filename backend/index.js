const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const { response } = require("express");
const { Connection } = require("pg");
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
//postlogin
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/logins", async (req, res) => {
  const user = req.body.username;
  console.log(req.body.username);
  const pass = req.body.password;
  console.log(req.body.password);
  //res.send({ result: "successful", error: "songsakdi" });
  try {
    const Login = await pool
      .query("SELECT * FROM login WHERE user_id = $1 AND password = $2", [
        user,
        pass,
      ])
      .then((response) => {
        console.log("testcase" + response.rowCount);
        if (response.rowCount === 1) {
          console.log("case1");
          res.send({ result: "successful" });
        } else {
          res.send({ result: "error" });
        }
      });
  } catch (err) {
    console.error(err.message);
  }
});
//post register
app.post("/registers", async (req, res) => {
  req.body.ise
  console.log(req.body);
  // try {
  //   const user = req.body.username;
  //   const pass = req.body.password;
  //   //console.log(req.body.tel);
  //   const Register = await pool
  //   .query("INSERT INTO login VALUES ($1,$2,$3,$4,$5,$6,$7,$8)", [
  //     user,
  //     pass,
  //     req.body.name,
  //     req.body.tel,
  //     req.body.email,
  //     req.body.address,
  //     req.body.model,
  //     req.body.numcar
  //   ])
  //   res.send({ result: "successful" });
  // } catch (err) {
  //   console.log("sss")
  //   console.error(err.message);
  // }
});
//get
app.get("/logins", async (req, res) => {
  try {
    const allLogin = await pool.query("SELECT * FROM login");

    res.json(allLogin.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.listen(5000, () => {
  console.log("5000");
});
