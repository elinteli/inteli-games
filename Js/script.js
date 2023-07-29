const nav = document.getElementById('nav');
const navMovil = `<ul class="nav__lista"><i class="menu-boton fa-solid fa-bars" id="menuBoton" onclick="responsive();"></i><ul/>`;
const navAbierto = document.createElement("ul");;

navAbierto.innerHTML = `<li class="nav--movil__listitem"><a class="nav__links" href="index.html" title="Inicio">Inicio</a></li><li class="nav--movil__listitem"><a class="nav__links" href="https://inteligames.itch.io/" title="Itch.io" target="_blank">Juegos</a></li><li class="nav--movil__listitem"><a class="nav__links" href="contacto.html" title="Inicio">Contacto</a></li>`;
navAbierto.className = 'nav--movil__contenedor';
navAbierto.id = 'contenedorNavMovil';
let botonMenu;
let contenedorLinksMovil;
let navEstaAbierto = false;

if (screen.width < 800) { //Si es un dispositivo movil
    document.body.appendChild(navAbierto);
    nav.innerHTML = navMovil;
    botonMenu = document.getElementById('menuBoton');
    contenedorLinksMovil = document.getElementById('contenedorNavMovil');
}

function responsive() {
    if (navEstaAbierto){ //Esta cerrado o abierto el Nav
        contenedorLinksMovil.style.right = '-200px'; //oculto
        console.log("cerrando...");
        navEstaAbierto = false;
    }
    else {
        contenedorLinksMovil.style.right = '0px'; //Abierto
        console.log("abriendo...");
        navEstaAbierto = true;
    }
}