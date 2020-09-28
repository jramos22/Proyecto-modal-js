//Nissa

//Este proceso llama al div que contiene la ventana
const ventanaModal = document.getElementById("modal1");

//Este proceso llama al boton para abrir el modal del peronaje Nissa.
const boton = document.getElementById("nissab");

//cierra la ventana de Nissa.
const cierre = document.getElementsByClassName("cerrar")[0];

//Muesta el Modal
boton.onclick = function () {
  ventanaModal.style.display = "block";
}

//cierra el modal cuando se toca el boton de cierre.
cierre.onclick = function () {
  ventanaModal.style.display = "none";
}

//Thresh

//Este proceso llama al div que contiene la ventana
const ventanaModal2 = document.getElementById("modal2");

//Este proceso llama al boton para abrir el modal del peronaje thresh.
const boton2 = document.getElementById("threshb");

//cierra la ventana de Thresh.
const cierre2 = document.getElementsByClassName("salir")[0];

//Muesta el Modal
boton2.onclick = function () {
  ventanaModal2.style.display = "block";
}

//cierra el modal cuando se toca el boton de cierre.
cierre2.onclick = function () {
  ventanaModal2.style.display = "none";
}

//Cierra la ventana modal respetiva cuando se toca fuera de dicha ventana
window.onclick = function (event) {
  if (event.target == ventanaModal) {
    ventanaModal.style.display = "none";
  } else if (event.target == ventanaModal2) {
    ventanaModal2.style.display = "none";
  }
}