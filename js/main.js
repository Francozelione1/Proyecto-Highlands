document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.rotateButton');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Encuentra la tarjeta padre correspondiente
            let card = button.closest('.card');
            if(card) {
                card.classList.toggle('is-flipped');
            }
        });
    });
});
