let score = 0;

document.getElementById('clickerButton').addEventListener('click', () => {
    score++;
    document.getElementById('score').innerText = score;
    
    if (score > 50) {
        document.querySelector('.container').style.backgroundImage = "url('https://th.bing.com/th/id/OIP.dA5d4bv2iUfWuPtI0yHobQAAAA?rs=1&pid=ImgDetMain')";
    }
});

