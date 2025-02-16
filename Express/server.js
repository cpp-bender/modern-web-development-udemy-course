const express = require("express");
const { control, def } = require("./middleware");
const app = express();
const PORT = 5000;

app.use(express.json());

const users = [
  { id: 1, name: "ahmet", place: "izmir" },
  { id: 2, name: "mehmet", place: "ankara" },
];

app.get("/users", [control, def], (req, res, next) => {
  res.json({ success: true, data: users });
});

app.post("/users", (req, res, next) => {
  users.push(req.body);
  res.json({ success: true, data: "Post request" });
});

app.put("/users/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i] = {
        ...users[i],
        ...req.body,
      };
    }
  }
  res.json({ success: true, data: users });
});

app.delete("/users/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users.splice(i, 1);
    }
  }
  res.json({ success: true, data: "Delete request" });
});

app.listen(PORT, () => {
  console.log("Listening to " + PORT);
});
