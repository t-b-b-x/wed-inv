document.getElementById('flip-card').addEventListener('click', function() {
document.querySelector('.card').classList.add('flipped');
});

document.getElementById('flip-back').addEventListener('click', function() {
document.querySelector('.card').classList.remove('flipped');
});

window.onload = function() {
    document.getElementById("background-music").play();
}