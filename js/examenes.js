function ajustarContenidoExamenes() {
    const examenesSeccion = document.getElementById('examenes');

    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (width <= 990) {
        examenesSeccion.innerHTML =
            `
            <div class="columnasExamenes">
                <div class="card card-container">
                    <div class="card-face front">
                        <img src="fotosComponente/imgTrinityExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Back</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
                <div class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgStartersExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Back</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>

            </div>
            <div class="columnasExamenes">
                <div class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgMoversExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Back</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
                <div class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgFlyersExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Back</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
            </div>
            <div class="columnasExamenes">
                <div class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgKeyExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Back</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
                <div class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgPetExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Back</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
            </div>
            <div class="columnasExamenes">
                <div class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgFirstExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Back</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
                <div id="botonExamen" class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgAdvancedExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Back</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
            </div>
            `
    }
    else {
        examenesSeccion.innerHTML =
            `
            <div class="columnasExamenes">
                <div class="card card-container">
                    <div class="card-face front">
                        <img src="fotosComponente/imgTrinityExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Back</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
                <div class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgKeyExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Back</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>

            </div>
            <div class="columnasExamenes">
                <div class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgStartersExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Back</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
                <div class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgPetExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Back</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
            </div>
            <div class="columnasExamenes">
                <div class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgMoversExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Back</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
                <div class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgFirstExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Back</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
            </div>
            <div class="columnasExamenes">
                <div class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgFlyersExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Back</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
                <div id="botonExamen" class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgAdvancedExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Back</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
            </div>
            `
    }
    const buttons = document.querySelectorAll('.rotateButton');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Encuentra la tarjeta padre correspondiente
            let card = button.closest('.card');
            if (card) {
                card.classList.toggle('is-flipped');
            }
        });
    });
}

const buttons = document.querySelectorAll('.rotateButton');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Encuentra la tarjeta padre correspondiente
        let card = button.closest('.card');
        if (card) {
            card.classList.toggle('is-flipped');
        }
    });
});

ajustarContenidoExamenes()
window.addEventListener('resize', ajustarContenidoExamenes)
