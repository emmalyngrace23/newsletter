//jshint esversion: 6

const express = require ("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res) {

  let firstName = req.body.fName;
  let lastName = req.body.lName;
  let email = req.body.email;

  console.log(firstName,lastName,email);

});



app.listen(4000, function() {
  console.log("Service is running at port 4000");
})
