//  Inicializamos variables de ambos modales 

//Nissa

//Este proceso llama al div que contiene la ventana
const ventanaModal = document.getElementsByClassName("modal1");

//Este proceso llama al boton para abrir el modal del peronaje Nissa.
const boton = document.getElementsByClassName("nissab");

//cierra la ventana de Nissa.
const cierre = document.getElementsByClassName("cerrar")[0];


//Thresh

//Este proceso llama al div que contiene la ventana
const ventanaModal2 = document.getElementsByClassName("modal2");

//Este proceso llama al boton para abrir el modal del peronaje thresh.
const boton2 = document.getElementsByClassName("threshb");

//cierra la ventana de Thresh.
const cierre2 = document.getElementsByClassName("salir")[0];



// Se ocultan ambas ventanas modal desde JS
ventanaModal[0].classList.add('Ocultar');
ventanaModal2[0].classList.add('Ocultar');

//Muesta el Modal
boton[0].addEventListener('click',()=>{
  ventanaModal[0].classList.remove('Ocultar');
})
//cierra el modal cuando se toca el boton de cierre.
cierre.addEventListener('click',()=>{
  ventanaModal[0].classList.add('Ocultar');
})

//Muesta el Modal
boton2[0].addEventListener('click',()=>{
  ventanaModal2[0].classList.remove('Ocultar');
})

//cierra el modal cuando se toca el boton de cierre.
cierre2.addEventListener('click',()=>{
  ventanaModal2[0].classList.add('Ocultar');
})

//cargando....
//cargando.....
//cargando......
//cargando.......
//cargando........
//cargando.........