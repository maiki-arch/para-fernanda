function createHeart() {
    const heartContainer = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.className = 'heart';

    // Posición inicial aleatoria
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = Math.random() * 1 + 's'; // Variación en el tiempo de inicio

    heartContainer.appendChild(heart);

    // Eliminar el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, 3000); // Coincide con la duración de la animación
}

function openLetter() {
    const letter = document.getElementById('letter');
    letter.classList.add('show'); // Mostrar la carta

    // Crear varios corazones
    for (let i = 0; i < 10; i++) {
        createHeart();
    }
}

function closeLetter() {
    const letter = document.getElementById('letter');
    letter.classList.remove('show'); // Ocultar la carta
}