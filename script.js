const dino  = document.getElementById("dino")
const cactus = document.getElementById("cactus")

document.addEventListener("keydown", function(event) {
    jump();
}); 


function jump () {
    if (dino.classList != "jump"){
        dino.classList.add("jump")
    }
    setTimeout( function() {
        dino.classList.remove("jump")
    }, 300)
}

let score = 0;

document.getElementById('clickerButton').addEventListener('click', () => {
    score++;
    document.getElementById('score').innerText = score;
    
    if (score > 50) {
        document.querySelector('.container').style.backgroundImage = "url('https://th.bing.com/th/id/OIP.dA5d4bv2iUfWuPtI0yHobQAAAA')";
    }
});