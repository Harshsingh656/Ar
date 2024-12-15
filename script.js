// script.js

// When the perfume bottle is clicked, show the playlist
document.getElementById('perfumeBottle').addEventListener('click', function() {
    document.getElementById('playlist').style.display = 'block';  // Show the playlist
});

// Generate Falling Hearts Effect
function generateHearts() {
    const heartsContainer = document.querySelector('.falling-hearts');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('span');
        heart.innerHTML = '❤️';  // Heart symbol
        heart.style.left = `${Math.random() * 100}vw`;  // Random horizontal position
        heart.style.animationDuration = `${Math.random() * 4 + 3}s`;  // Random fall duration
        heartsContainer.appendChild(heart);
    }
}

// Call the function to generate hearts when the page loads
window.onload = generateHearts;
