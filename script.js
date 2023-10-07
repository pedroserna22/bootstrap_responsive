//Se obtiene la referencia del botón opciones para desplegar la lista de las opciones
const opcionesBtn = document.getElementById('btnOpciones');

//Lo mismo con las 4 opciones que queremos mostrar
const opciones = document.getElementById('opciones');

//Se agrega un evento a dicho botón
opcionesBtn.addEventListener('click', () => {
    // Alternamos la clase "d-none" en las opciones para mostrar las opciones cuando se haga clic
    opciones.classList.toggle('d-none');

    // Alternamos la clase "d-lg-block" en las opciones
    opciones.classList.toggle('d-lg-block');
});

