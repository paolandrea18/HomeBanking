const express = require("express");
const app = express();
const port = 4000;
const usuarios = require("./usuarios.json").usuarios;
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
  let { user, password } = req.body;
  console.log(user);
  console.log(password);
  if (!user || !password)
    return res.status(400).json({ msg: "Favor validar, datos faltantes" });

  //busca usuario
  const userFind = usuarios.find((usu) => usu.usuario === user);
  console.log(userFind);
  //Busca contraseña
  const contrasenia = usuarios.find((pass) => pass.contrasenia === password);
  console.log(contrasenia);

  //Valida usuario y contraseña
  if (
    userFind === undefined ||
    contrasenia === undefined ||
    user !== userFind.usuario ||
    password !== contrasenia.contrasenia
  )
    return res.status(400).json({ msg: "Usuario o contraseña incorrecta" });

  res
    .status(200)
    .json({
      msg:
        "Bienvenido " +
        userFind.nombre.toUpperCase() +
        " " +
        userFind.apellido.toUpperCase(),
    });
});

/*Muestra todos los usuarios */
app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.listen(port, () => {
  console.log("Iniciando servidor en el puerto: " + port);
});
