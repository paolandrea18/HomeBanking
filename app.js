const express = require("express");
const app  = express();
const port = 4000;
const usuarios = require("./usuarios.json").usuarios;
app.use(express.json());

app.post("/login", (req, res) =>{
    let {user, password} = req.query;
    if (!user || !password) return res.status(400).json({msg: "Favor validar, datos faltantes"});

    //busca usuario
    const userFind = usuarios.find((usu)=>usu.usuario === user);
    //Busca contraseña
    const contrasenia = usuarios.find((pass) => pass.contrasenia === password);



    if(userFind === undefined || contrasenia === undefined || user !== userFind.usuario || password !== contrasenia.contrasenia ) return res.status(400).json({msg: "Usuario o contraseña incorrecta"});

    res.status(200).json({msg: "Bienvenido " + userFind.nombre.toUpperCase() + " "+ userFind.apellido.toUpperCase()})
    console.log(userFind.usuario);
    console.log(contrasenia.contrasenia);
})

/*Muestra todos los usuarios */
app.get("/usuarios", (req, res)=>{
    res.json(usuarios);
})


app.listen(port, () =>{
    console.log("Iniciando servidor en el puerto: " + port);
})