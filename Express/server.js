const express = require("express");
const app = express();
const PORT = 5000;

const users = [
  { id: 1, name: "ahmet", place: "izmir" },
  { id: 2, name: "mehmet", place: "ankara" },
];

app.get("/users", (req, res, next)=>{
    res.json(users);
});


app.listen(PORT, () => {
  console.log("Listening to " + PORT);
});
