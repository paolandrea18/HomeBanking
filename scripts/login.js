let usuario_input = document.getElementById("usuario");
let password_input = document.getElementById("password");
let btnIngresar = document.getElementById("btn-ingresar");

// class Data{
//     constructor_login(usuario, password){
//         this.usuario = usuario;
//         this.password = password
//     }
//     get usuario(){
//         return this.usuario;
//     }
//     get password(){
//         return this.password;
//     }
// }

const LOGINURL = `http://localhost:4000/login`
btnIngresar.addEventListener("click", async () =>{
let user = usuario_input.value;
let password = password_input.value;
const dataJson = {
    "user": user,
    "password": password,
  };

  console.log(user);
  console.log(password);
  const data = await fetch(LOGINURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(dataJson),
    redirect: 'follow'
  });
  const resultJson = await data.json();

  console.log('Este es mi resultado', resultJson);
})
// const queryLogin = `http://localhost:4000/login`
// btnIngresar.addEventListener("click", async () =>{
//     let usuario = usuario_input.value;
//     let password = password_input.value;
//     const data = {"user": usuario, "password": password }
//     // let data = new Data(usuario, password)
//     console.log(usuario)
//     console.log(data)
//     await fetch(encodeURI(queryLogin), {
//         method: 'POST', 
//         mode: 'cors', 
//         cache: 'no-cache', 
//         credentials: 'same-origin', 
//         headers: {
//             'Content-Type': 'application/json'      
//           },
//           redirect: 'follow', 
//           referrerPolicy: 'no-referrer', 
//           body: JSON.stringify(data) 
//         })
//         .then(res =>{
//             console.log(res.json());
//             res.json()
//         } )
//         .catch(error => {
//             console.error('Error:', error)
            
//         })
//         .then(response =>
//         {
//             console.log('Success:', response);
//      });
// })

