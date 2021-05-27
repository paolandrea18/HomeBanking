const express = require('express');
const app = express();
const port = 4001;
let usuarios = require("./usuarios.json").usuarios;
app.use(express.json())


const validateId = (req, res, next) => {
  const { id } = req.query
  
  if(isNaN(id)) {
    return res.status(400).json({msg: "El ID debe ser numerico"})
  }
  next();
}

app.get('/usuario', validateId, (req, res) => {
  const { id } = req.query
  if( !id ) {
    return res.status(400).json({msg: "El ID es obligatorio"})
  }

  const persona = usuarios.find( item => item.id === parseInt(id))
  if( !persona ){
    return res.status(400).json({msg: "Usuario no encontrado"})
  }

  res.status(200).json({msg: "Usuario encontrado", data: persona})
})

app.post('/usuario', (req, res) => {
  console.log('creo un usuario');
})

app.listen(port, () => {
    console.log("Iniciando aplicacion en el puerto", port);
  });
  

  /**
 * {
    "usuarios": [
      {
        "id": 1,
        "nombre": "Diego",
        "apellido": "Cabulo",
        "saldo": "30000"
      },
      {
        "id": 2,
        "nombre": "Angela",
        "apellido": "Cabulo",
        "saldo": "30000"
      }
    ]
  }

 */