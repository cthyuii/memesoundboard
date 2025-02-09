const sounds = [
    'vine_boom', 'sus', 'angry',
    'happy', 'dekupopdemnem', 'what_the_sigma',
    'applause', 'correct', 'wrong', 'get-out',
    'rizz', 'oioioi', 'vas', 'gay', 'again','huh',
    'naur', 'sitcom', 'wrong2', 'ding', 'sigma-boy',
    'sad', 'freddy', 'again2', 'chopped-chin', 'eye-of-rah',
    'egypt', 'indian',
];

let currentSound = null;

sounds.forEach((sound) =>{
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', ()=>{
       /* if (currentSound !== sound){
            stopSound();
            document.getElementById(sound).play();
            currentSound = sound;
        } else {
            document.getElementById(sound).play();
        }*/
            stopSound();
            document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

function stopSound(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
};

