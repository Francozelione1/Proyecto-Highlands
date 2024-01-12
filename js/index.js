
function ajustarContenido() {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (width <= 990) {
      document.getElementById("fotoCompu").innerHTML = 
      `
      <img class="imgLogos" src="fotosComponente/imgTrinity.png" alt="fotoCompu">
      <img class="imgLogos" src="fotosComponente/imgAaci.png" alt="fotoCompu">
      <img class="imgLogos" src="fotosComponente/imgCambridge.png" alt="fotoCompu">
      `
    } 
    else {
      document.getElementById("fotoCompu").innerHTML = 
      `
      <img class="fotoComputadora" src="fotosComponente/imgCompu.svg" alt="">
      `
    }
}

ajustarContenido()
window.addEventListener('resize', ajustarContenido);