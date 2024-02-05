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
                        <p>Los exámenes de Trinity GESE niveles 1-9 cubren habilidades orales en inglés desde principiante (A1) hasta intermedio alto (B2), evaluando conversación, intercambio de información y discusión en progresión de dificultad</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
                <div class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgStartersExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Este es el primer nivel de los Young Learners English Tests (YLE), destinado a niños que comienzan a aprender inglés. Evalúa la comprensión y expresión oral y escrita básica.</p>
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
                        <p>El segundo nivel de los YLE, para niños que han hecho algunos progresos en el aprendizaje del inglés. Este examen aumenta en dificultad desde Starters, evaluando habilidades lingüísticas básicas en un contexto divertido y motivador.</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
                <div class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgFlyersExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>El nivel más alto de los YLE, dirigido a niños que han desarrollado una comprensión básica del inglés. Flyers demuestra que el niño puede usar el inglés para comunicarse en situaciones simples.</p>
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
                        <p>Un examen de nivel básico que demuestra la capacidad de comunicarse en situaciones cotidianas. Es el primer nivel de los exámenes para adultos y jóvenes adultos.</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
                <div class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgPetExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Este examen muestra que puedes usar tu inglés en situaciones prácticas cotidianas. Es intermedio y demuestra que puedes comunicarte de manera efectiva a este nivel.</p>
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
                        <p>Un examen de nivel intermedio alto que indica que puedes usar el inglés de manera efectiva, expresando opiniones y presentando argumentos en una variedad de situaciones.</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
                <div id="botonExamen" class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgAdvancedExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Demuestra que tienes las habilidades lingüísticas necesarias para funcionar de manera efectiva en casi cualquier situación en inglés. Es apropiado para aquellos que buscan un alto nivel de competencia en el idioma.</p>
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
                        <p>Los exámenes de Trinity GESE niveles 1-9 cubren habilidades orales en inglés desde principiante (A1) hasta intermedio alto (B2), evaluando conversación, intercambio de información y discusión en progresión de dificultad</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
                <div class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgKeyExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Un examen de nivel básico que demuestra la capacidad de comunicarse en situaciones cotidianas. Es el primer nivel de los exámenes para adultos y jóvenes adultos.</p>
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
                        <p>Este es el primer nivel de los Young Learners English Tests (YLE), destinado a niños que comienzan a aprender inglés. Evalúa la comprensión y expresión oral y escrita básica.</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
                <div class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgPetExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Este examen muestra que puedes usar tu inglés en situaciones prácticas cotidianas. Es intermedio y demuestra que puedes comunicarte de manera efectiva a este nivel.</p>
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
                        <p>El segundo nivel de los YLE, para niños que han hecho algunos progresos en el aprendizaje del inglés. Este examen aumenta en dificultad desde Starters, evaluando habilidades lingüísticas básicas en un contexto divertido y motivador.</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
                <div class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgFirstExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Un examen de nivel intermedio alto que indica que puedes usar el inglés de manera efectiva, expresando opiniones y presentando argumentos en una variedad de situaciones.</p>
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
                        <p>El nivel más alto de los YLE, dirigido a niños que han desarrollado una comprensión básica del inglés. Flyers demuestra que el niño puede usar el inglés para comunicarse en situaciones simples.</p>
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                </div>
                <div id="botonExamen" class="card">
                    <div class="card-face front">
                        <img src="fotosComponente/imgAdvancedExam.png" alt="" class="logoExamen">
                        <img src="fotosComponente/volver-flecha.png" class="rotateButton" alt="">
                    </div>
                    <div class="card-face back">
                        <p>Demuestra que tienes las habilidades lingüísticas necesarias para funcionar de manera efectiva en casi cualquier situación en inglés. Es apropiado para aquellos que buscan un alto nivel de competencia en el idioma.</p>
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
