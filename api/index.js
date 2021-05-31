const express = require('express');  //  importacion del modulo  o libreria 

const app = express();
const port = 4001;
let usuarios = require("./usuarios.json").usuarios;
app.use(express.json()) // middleware

const validateUser = (req, res, next) => { 
  const { id } = req.query;
  const person = usuarios.find( item => item.id === parseInt(id));
  
  if( isNaN(id) ) {
    return res.status(400).json({msg: "El ID debe ser numerico"})
  }

  if( !id ) {
    return res.status(400).json({msg: "El ID es obligatorio"})
  }

  if( !person ){
    
    return res.status(400).json({msg: "Usuario no encontrado"})
  }

  next();
}

app.get('/usuarios', (req, res) =>{
  res.json({msg: 'Ingreso a la lista de usuarios', data: Object.values(usuarios)})
})

app.get('/usuario', validateUser, (req, res) => {
  res.status(200).json({msg: "Usuario encontrado"})
})

app.put('/usuario/', validateUser, (req, res) => {
  const {id, saldo} = req.body

  console.log(req.query.id);
  console.log({id, saldo})
  
  if(!id || !saldo ) {
    return res.status(502).json({msg: "Datos faltantes", data: id})
   } else {
    const idQuery = req.query.id
    const person = usuarios.find( item => item.id === parseInt(idQuery));
     
    user = {
      'id': idQuery, 
      'saldo': saldo
    }

    console.log( 'El saldo que ingreso fue '+ user.saldo)
    console.log( 'El saldo que se tenia es '+ person.saldo)
    person.saldo = user.saldo
    console.log( 'El saldo final es '+ person.saldo)
    console.log(JSON.stringify(usuarios))    
    return res.status(200).json({msg: 'Se ha transferido el dinero exitosamente'})
   }

})


//Generamos la respuesta para url no encontradas
app.use( (req, res, next) => {
  respuesta = {
      error: true,
      codigo: 404,
      mensaje: 'URL no encontrada'
  };
  //Imrpimimos respuesta
  res.status(404).send(respuesta);
});

app.listen(port, () => {
    console.log("Iniciando aplicacion en el puerto", port);
  });