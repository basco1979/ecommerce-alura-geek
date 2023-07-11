let user = "";
let password = "";

const datosUsuarios = () => {
  return fetch("http://localhost:3000/usuarios").then((respuesta) => {
    return respuesta.json();
  })
} 

datosUsuarios().then((data) => {
data.forEach((x) => {console.log(x)
    user = x.usuario;
    password = x.password;
});  
})

/* const http = new XMLHttpRequest()

http.open("GET", "http://localhost:3000/usuarios");

http.send();

http.onload = () => {
const data = JSON.parse(http.response);
data.forEach((x) => {
    user = x.usuario;
    password = x.password;
});
}
 */
const btnEnviar = document.querySelector("#enviar-login");
btnEnviar.addEventListener("click", (evento) => {
    evento.preventDefault();
    loginUsuario();
})

const loginUsuario = () => {
const usuarioIngresado = document.querySelector("#usuario").value;
const passwordIngresado = document.querySelector("#password").value;
console.log(user);
console.log(password);


if(usuarioIngresado === user && passwordIngresado === password){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login Exitoso',
        showConfirmButton: false,
        timer: 1500
      })
  
      setTimeout(function(){
    window.location.href = "../vistas/productos.html";
      })
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Datos incorrectos',
          })
        }

}
