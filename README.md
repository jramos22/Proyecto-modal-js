# Proyecto-modal-js 
# Jean Carlo Toruño Gómez y José Daniel Ramos Barquero.

Para este proyecto utilizamos sass por que es algo que nos enseño el profe de Web y queriamos empezer a practicarlo por eso decidimos implementarlo en esta ocación.

Nuestra estrutura de HTML es básica tiene dos botones de información, dos imagenes de personajes de un juego de mesa y un juego virtual, los contenidos de las ventana modal tienen una brebe descripcion de dichos personajes.

El funcionamiento de nuestro script se podria describir de la siguiente forma:
contamos con dos botones de información los cuales al darle click son llamados de la siguiente forma 

(const ventanaModal = document.getElementsByClassName("modal1");) 

Decidimos que ibamos a dejar los div del modal visibles por si no funcionaba el javascipt entonces los cultamos mediante el script aplicandole la clase "ocultar" de la siguiente forma

(ventanaModal[0].classList.add('Ocultar');) 

una ves oculto decidimos mostrar nuevamente las ventanas modal que son activadas al darle click a el boton "información" el mecanismo de activación es el siguiente

 (boton[0].addEventListener('click',()=>{
  ventanaModal[0].classList.remove('Ocultar');
  })) 

que llama a la ventana modal, respectivamente del personaje que queramos ver, dichas ventanas cuentan con un boton de cierre el cual al dale click dispara el evento 

(cierre.addEventListener('click',()=>{
  ventanaModal[0].classList.add('Ocultar');
})) 

que cierra la ventana.

Cambiamos los estilos llamando las clases con ayuda de JavaScript.