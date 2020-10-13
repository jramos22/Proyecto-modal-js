//  Inicializamos variables de ambos modales 


const botones = document.querySelectorAll(' .bottones');

const cierre = document.querySelectorAll(' .bottonesCierre');

const contenido = document.querySelectorAll(' .contenido');



for (let i = 0; i < contenido.length; i++) {
  contenido[i].classList.add('ocultar');
}

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener('click', (event) => {
      event.preventDefault();
      const id = event.currentTarget.getAttribute('href').substring(1);
      console.log(id);


      for (let i = 0; i < contenido.length; i++) {
          contenido[i].classList.add('ocultar');
          if (contenido[i].getAttribute('id') == id) {
              contenido[i].classList.remove('ocultar');
          }
      }
    
  });
}

for (let i = 0; i < cierre.length; i++) {
  cierre[i].addEventListener('click', (event) => {
      event.preventDefault();
      const id = event.currentTarget.getAttribute('href').substring(1);
      console.log(id);


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