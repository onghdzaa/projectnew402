const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const bodyParser = require("body-parser");
// const { json } = require("body-parser");
// const { response } = require("express");
// const { Connection } = require("pg");
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//var sess;
//postlogin
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
          console.log();
          console.log("case1");
          res.send({ result: "successful", type: response.rows[0].type_admin });
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
  //req.body.ise;
  console.log(req.body);
  try {
    const user = req.body.username;
    const pass = req.body.password;
    //console.log(req.body.tel);
    const Register = await pool.query(
      "INSERT INTO login VALUES ($1,$2,$3,$4,$5,$6,$7,$8)",
      [
        user,
        pass,
        req.body.name,
        req.body.tel,
        req.body.email,
        req.body.address,
        req.body.model,
        req.body.numcar,
      ]
    );
    res.send({ result: "successful" });
  } catch (err) {
    console.log("sss");
    console.error(err.message);
  }
});
//get staff
app.get("/staff", async (req, res) => {
  try {
    const allLogin = await pool.query("SELECT * FROM staff");
    console.log(allLogin.rows[0].id_staff);
    //console.log(allLogin.rows.sort(function(a,b){return a.id_staff-b.id_staff}))
    res.json(allLogin.rows.sort(function(a,b){return a.id_staff-b.id_staff}));
  } catch (err) {
    console.log("sss");
    console.error(err.message);
  }
});
//get datalogin
app.post("/logindata", async (req, res) => {
  const user = req.body.username;
  const pass = req.body.password;
  try {
    const allLogin = await pool.query(
      "SELECT * FROM login WHERE user_id = $1 AND password = $2",
      [user, pass]
    );

    res.json(allLogin.rows);

    //console.log(response.rows[0].name)
  } catch (err) {
    console.log("sss");
    console.error(err.message);
  }
});
//post profile
app.post("/profile", async (req, res) => {
  try {
    const allLogin = await pool.query("SELECT * FROM login WHERE numid=$1", [
      req.body.fullname,
    ]);
    console.log(req.body);
    console.log("allLogin.rows");
    console.log(allLogin.rowCount);
    res.json(allLogin.rows);

    //console.log(response.rows[0].name)
  } catch (err) {
    
    // console.error(err.message);
  }
});
//post booking
app.post("/booking", async (req, res) => {
  // req.body.ise;
  //\ console.log("("+req.body.gps.lat+","+req.body.gps.lng+")");
  console.log(req.body.id_member);
  const gpsss = "(" + req.body.gps.lat + "," + req.body.gps.lng + ")";
  // console.log(gpsss+"sss")
  const lat = "POINT(req.body.gps.lat,req.body.gps.lng)";
  const lng = "POINT(req.body.gps.lat,req.body.gps.lng)";
  try {
    const Register = await pool.query(
      "INSERT INTO reserve(name_member,name_staff,tel_member,tel_staff,id_staff,time,gps,type,model,numcar,price,date,status,id_member,address) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)",
      [
        req.body.name_member,
        req.body.name_staff,
        req.body.tel_member,
        req.body.tel_staff,
        req.body.id_staff,
        req.body.time,
        [gpsss],
        req.body.type,
        req.body.model,
        req.body.numcar,
        req.body.price,
        req.body.date,
        req.body.status,
        req.body.id_member,
        req.body.address,
      ]
    );
    res.send({ result: "successful" });
  } catch (err) {
    console.log("sss");
    console.error(err.message);
  }
});
//test get
app.get("/bookinghistory/apix/apix/:id", async (req, ress) => {
  try {
    var allLogin = await pool.query(
      "SELECT * FROM reserve WHERE id_member=$1",
      [req.params.id]
    );
    ress.json(allLogin.rows.sort(function(a,b){return b.id-a.id}))
   //console.log(allLogin.rows.id)
   // ress.json(allLogin.rows.sort(function(a,b){return b.id-a.id}));
    //ress.json(allLogin.rows)
  } catch (err) {
    console.error(err.message);
  }
});
//get listhistory
// the sub app
// app.get("/bookinghistory/search", async (req, res) => {
//   try {
//     // console.log(req.query.id);
//     var allLogin = await pool.query(
//       "SELECT * FROM reserve WHERE id_member=$1",
//       [req.query.id]
//     );
//     app.get("/bookinghistory/api", async (req, ress) => {
//       try {
//         //console.log(allLogin.rows.sort(function(a,b){return b.id-a.id}))
//      //   console.log(allLogin.rows.id)
//         ress.json(allLogin.rows.sort(function(a,b){return b.id-a.id}));
//         //ress.json(allLogin.rows)
//       } catch (err) {
//         console.error(err.message);
//       }
//     });
//     //console.log(req);
//     console.log(allLogin.rows);
//     //console.log(allLogin.rowCount);
//    res.json(allLogin.rows);
//   } catch (err) {
//     //console.log("sss");
//     console.error(err.message);
//   }
// });
//get list customer
app.get("/listcustomer", async (req, res) => {
  try {
    const allLogin = await pool.query(
      "SELECT * FROM login WHERE type_admin IS NULL"
    );
    console.log(allLogin.rows);
    res.json(allLogin.rows.sort(function(a,b){return a.numid-b.numid}));
  } catch (err) {
    console.error(err.message);
  }
});
//get calender
app.get("/calender", async (req, res) => {
  try {
    const allLogin = await pool.query("SELECT * FROM reserve ");
    console.log(allLogin.rows);
    res.json(allLogin.rows.sort(function(a,b){return b.id-a.id}));
  } catch (err) {
    console.error(err.message);
  }
});
//get listprice
app.get("/listprice", async (req, res) => {
  try {
    const allLogin = await pool.query("SELECT * FROM munuprice");
    console.log(allLogin.rows);
    res.json(allLogin.rows.sort(function(a,b){return a.price-b.price}));
  } catch (err) {
    console.error(err.message);
  }
});
//put profile
app.put("/editprofile", async (req, res) => {
  try {
    const allLogin = await pool.query(
      "UPDATE login SET name = $1, tel = $2 ,email = $3,address = $4,model = $5,numcar =  $6, img= $7 WHERE numid=$8",
      [req.body.name, req.body.tel, req.body.email,req.body.address,req.body.model,req.body.numcar,req.body.img,req.body.id]
    );
    console.log(req.body);
    // res.json(allLogin.rows);
  } catch (err) {
    console.error(err.message);
  }
});
//put price
app.put("/editprice", async (req, res) => {
  try {
    const allLogin = await pool.query(
      "UPDATE munuprice SET type = $1, price = $2 ,process=$3,img= $4 WHERE id=$5",
      [req.body.price_service, req.body.price_price, req.body.price_waytobuy,req.body.price_img,req.body.index]
    );
    console.log(req.body);
    // res.json(allLogin.rows);
  } catch (err) {
    console.error(err.message);
  }
});
//put employee
app.put("/editemployee", async (req, res) => {
  try {
    const allLogin = await pool.query(
      "UPDATE staff SET Full_Name = $1, Tell_Staff = $2  WHERE Id_Staff=$3",
      [req.body.name,req.body.tel,req.body.id]
    );
    console.log(req.body);
     //res.json(allLogin.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.post("/munuprice", async (req, res) => {
  try {
    const allLogin = await pool.query(
      "SELECT * FROM munuprice WHERE type=$1",
      [req.body.p]
    );
    console.log(allLogin.rows[0].price)
   // res.send({ result: req.body });
     res.json(allLogin.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.listen(5000, () => {
  console.log("5000");
});
