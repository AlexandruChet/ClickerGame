let score = 0;

document.getElementById('clickerButton').addEventListener('click', () => {
    score++;
    document.getElementById('score').innerText = score;
});