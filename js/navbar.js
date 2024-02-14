
function ajustarContenido() {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (width <= 990) {
        document.getElementById("header").innerHTML = '<nav class="navbar navbar-expand-lg bg-body-tertiary navColor navbarNuestro">' +
        '<div class="container-fluid navColor">' +
          '<a class="navbar-brand navbar-inicio" href="https://escuelahighlands.com">Inicio</a>' +
          '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
            '<span class="navbar-toggler-icon"></span>' +
          '</button>' +
          '<div class="collapse navbar-collapse" id="navbarSupportedContent">' +
            '<ul class="navbar-nav me-auto mb-2 mb-lg-0">' +
              '<li class="nav-item">' +
                '<a class="nav-link" aria-current="page" href="/cursos">Cursos</a>' +
              '</li>' +
              '<li class="nav-item">' +
                '<a class="nav-link" href="/examenes">Exámenes</a>' +
              '</li>' +
              '<a class="nav-link" href="/nosotros">Nosotros</a>' +
              '</li>' +
              '</li>' +
              '<a class="nav-link" href="/contacto">Contacto</a>' +
              '</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
      '</nav>'
    } 
    else{
        document.getElementById("header").innerHTML = '<nav class="navbarNuestro">' +
        '<div class="contenedorLogo">' +
          '<img class="logo_navbar" href="https://escuelahighlands.com" src="../fotosComponente/logito.jpeg" alt="Logo Highlands">' +
        '</div>' +
        '<a href="https://escuelahighlands.com" class="secciones">Inicio</a>' +
        '<p class="separadores">|</p>' +
        '<a href="/cursos/" class="secciones">Cursos</a>' +
        '<p class="separadores">|</p>' +
        '<a href="/examenes" class="secciones">Exámenes</a>' +
        '<p class="separadores">|</p>' +
        '<a href="/nosotros" class="secciones">Nosotros</a>' +
        '<p class="separadores">|</p>' +
        '<a href="/contacto" class="secciones">Contacto</a>' +
        '<a href=""></a>' +
      '</nav>'
    }
}

ajustarContenido()
window.addEventListener('resize', ajustarContenido);