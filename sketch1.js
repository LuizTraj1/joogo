
let score = document.querySelector('.score');
let playerScore = 0;
let gameOver = document.querySelector('.gameOver');


const cry = new Audio('cry.mp3');

//score
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;

    console.log("scoreCounter")
}


window.addEventListener("keydown", (start) => {

    if (start.code == "Space") {
        let cat = document.querySelector('.cat');
        const arvore = document.querySelector('.arvore');
        const nuvem = document.querySelector('.nuvens')
        
            
        
        
        
        let playerScore = 0;
        interval = setInterval(scoreCounter, 20);



        function jump() {

            cat.classList.add('jump');
            audio.play();
            setTimeout(() => {
                cat.classList.remove('jump');
            }, 500);


            interval = setInterval(scoreCounter, 20);
        }

        const loop = setInterval(() => {
            const arvorePosition = arvore.offsetLeft
            const catPosition = +window.getComputedStyle(cat).bottom.replace('px', '');
            
            //parte do contato com a agua
            if (arvorePosition <= 37 && arvorePosition > 0 && catPosition < 80) {

                arvore.style.animation = 'none';
                arvore.style.left = `${arvorePosition}px`;


                cat.style.animation = 'none';
                cat.style.left = `${catPosition}px`;


                cat.src = 'gato.gif'
                cat.style.width = '75px'
                cat.style.marginLeft = '25px'
                cry.play();
                gameOver.style.display = "block";




                clearInterval(loop)
                playerScore = 0

            }

        }, 10);

        document.addEventListener('keydown', jump);

        const audio = new Audio('pulo.mp3');







    }


});




































