const express = require("express");
const routes = express.Router();

const middleware = (req, res, next) => {
  let { id } = req.body;
  if (!id) {
    return res.status(400).json({ msg: "Se requiere una identificación" });
  }
  next();
};

routes.post("/register", middleware, (req, res) => {
  let data = [];
  data.push(req.body);
  localStorage.setItem("users", JSON.stringify(data));
  res.status(201).json({ msg: "Usuario creado", data: data });
});

module.exports = routes;
