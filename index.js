const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const publicDir = path.join(__dirname, "./public");
app.use(express.static(publicDir));

app.get("/", (req, res) => {
  res.send("Hello World");
});

const marks = require("./models/marksModel");
const student = require("./models/studentModel");

const mark1 = new marks("John", "Literature", 50);
//lets compute the score
// mark1.computeScore();

const johnGrade = new marks("Akonya", "P.E", 70);
// johnGrade.computeScore();

module.exports = johnGrade;

//port
app.listen(port, () => {
  console.log("up at " + port);
});
