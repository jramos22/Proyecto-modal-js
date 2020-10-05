//Nissa

//Este proceso llama al div que contiene la ventana
const ventanaModal = document.getElementsByClassName("modal1");

//Este proceso llama al boton para abrir el modal del peronaje Nissa.
const boton = document.getElementsByClassName("nissab");

//cierra la ventana de Nissa.
const cierre = document.getElementsByClassName("cerrar")[0];

//Muesta el Modal

//cierra el modal cuando se toca el boton de cierre.


//Thresh

//Este proceso llama al div que contiene la ventana
const ventanaModal2 = document.getElementsByClassName("modal2");

//Este proceso llama al boton para abrir el modal del peronaje thresh.
const boton2 = document.getElementsByClassName("threshb");

//cierra la ventana de Thresh.
const cierre2 = document.getElementsByClassName("salir")[0];

//Muesta el Modal
//cierra el modal cuando se toca el boton de cierre.
//Cierra la ventana modal respetiva cuando se toca fuera de dicha ventana

ventanaModal[0].classList.add('js_content_hidden');
ventanaModal2[0].classList.add('js_content_hidden');

boton[0].addEventListener('click',()=>{
  ventanaModal[0].classList.remove('js_content_hidden');
})

cierre.addEventListener('click',()=>{
  ventanaModal[0].classList.add('js_content_hidden');
})

boton2[0].addEventListener('click',()=>{
  ventanaModal2[0].classList.remove('js_content_hidden');
})

cierre2.addEventListener('click',()=>{
  ventanaModal2[0].classList.add('js_content_hidden');
})

/*  = function (event) {
  if (event.target == ventanaModal) {
    console.log('porque?');
    ventanaModal.style.display = "none";
  } else if (event.target == ventanaModal2) {
    ventanaModal2.style.display = "none";
  }
}*/
//falta solución 
//'cargando'....
//'cargando'.....