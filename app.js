window.addEventListener('load', () => {

    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const backrgoundMusic = document.querySelector('.background-music');
    const stopBackgroundMusic = document.querySelector('.stop-background-music');
    const back = document.querySelector('.back');

    stopBackgroundMusic.addEventListener('click', function() {
        back.pause();
        back.currentTime = 0;

    })

    backrgoundMusic.addEventListener('click', function() {
        back.currentTime = 0;
        back.play();
    })
    const colors = [
        "#D76BC8",
        "#d36060",
        "#c060d3",
        "#46ce83",
        "#D7C03F",
        "#757d07"
    ];




    //SOUNDS................................................................
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
        //function that makes bubbles.......
        const createBubbles = (index) => {
            const bubble = document.createElement("div");
            visual.appendChild(bubble);
            bubble.style.background = colors[index];
            bubble.style.animation = "jump 1s ease";
            bubble.addEventListener('animationend', function() {
                visual.removeChild(this);

            })
        }



    })


    console.log(sounds)


});