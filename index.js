/**
Name:
Date:
Description:
Bugs:
Reflection (including LLM use):
*/

import express from "express";

const app = express();
const port = process.env.PORT || 3000; // Use Codespaces port

app.get("/", (req, res) => {
  res.send("Specify  /add?x=val1&y=val2, /subtract?x=val1&y=val2, etc.");
});
app.get("/add", (req, res) => {
  let sum = parseFloat(req.query.x) + parseFloat(req.query.y);
  res.json({operation: `${req.query.x} + ${req.query.y}`, sum: sum});
});
app.get("/sub", (req, res) => {
  let dif = req.query.x - req.query.y;
  res.json({operation: `${req.query.x} - ${req.query.y}`, dif: dif});
});
app.get("/mul", (req, res) => {
  let prod = req.query.x * req.query.y;
  res.json({operation: `${req.query.x} * ${req.query.y}`, prod: prod});
});
app.get("/div", (req, res) => {
  let quo = req.query.x / req.query.y;
  res.json({operation: `${req.query.x} / ${req.query.y}`, quo: quo});
});
app.get("/pow", (req, res) => {
  let pow = req.query.x ** req.query.y;
  res.json({operation: `${req.query.x} ^ ${req.query.y}`, pow: pow});
});
app.get("/root", (req, res) => {
  let root = req.query.x ** (1/req.query.y);
  res.json({operation: `${req.query.x} ^ 1/${req.query.y}`, root: root});
});
app.get("/mod", (req, res) => {
  let mod = req.query.x % req.query.y;
  res.json({operation: `${req.query.x} % ${req.query.y}`, mod: mod});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
