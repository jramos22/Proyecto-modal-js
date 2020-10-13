//  Inicializamos variables de ambos modales 


const botones = document.querySelectorAll(' .bottones');

const cierre = document.querySelectorAll(' .bottonesCierre');

const contenido = document.querySelectorAll(' .contenido');


// Ocultamos Los modales si estan visibles
for (let i = 0; i < contenido.length; i++) {
  contenido[i].classList.add('ocultar');
}
// Linkea el documento modal respectivamente
for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener('click', (event) => {
      event.preventDefault();
      const id = event.currentTarget.getAttribute('href').substring(1);

// Compara los Ids para entrar en el modal respectivo
      for (let i = 0; i < contenido.length; i++) {
          contenido[i].classList.add('ocultar');
          if (contenido[i].getAttribute('id') == id) {
              contenido[i].classList.remove('ocultar');
          }
      }
    
  });
}
//Linkea el boton de cierre
for (let i = 0; i < cierre.length; i++) {
  cierre[i].addEventListener('click', (event) => {
      event.preventDefault();
      const id = event.currentTarget.getAttribute('href').substring(1);

//Compara para cerrar la ventana modal respectiva
      for (let i = 0; i < contenido.length; i++) {
          contenido[i].classList.add('ocultar');
          if (contenido[i].getAttribute('id') == id) {
              contenido[i].classList.remove('ocultar');
          }
      }
    
  });
}

//cargando.
//cargando..
//cargando...
//cargando....
//cargando.....
//cargando......
//cargando........
//cargando.........
//cargando..........
//cargando...........
//cargando............
//cargando.............