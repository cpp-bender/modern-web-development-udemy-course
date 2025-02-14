const express = require("express");
const { control, def } = require("./middleware");
const app = express();
const PORT = 5000;

const users = [
  { id: 1, name: "ahmet", place: "izmir" },
  { id: 2, name: "mehmet", place: "ankara" },
];

app.get("/users", [control, def], (req, res, next) => {
  res.json(users);
});

app.get("/products", (req, res, next) => {
  res.send("Hi");
});

app.listen(PORT, () => {
  console.log("Listening to " + PORT);
});
