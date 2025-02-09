const sounds = [
    'vine_boom', 'sus', 'angry',
    'happy', 'dekupopdemnem', 'what_the_sigma',
    'applause', 'correct', 'wrong', 'get-out',
    'rizz', 'oioioi', 'vas', 'gay', 'again','huh',
    'naur', 'sitcom', 'wrong2', 'ding', 'sigma-boy',
    'sad', 'freddy', 'again2', 'chopped-chin', 'eye-of-rah',
    'egypt', 'indian',
];

//let currentSound = null;
let playback = 1;

document.getElementById('setPlaybackRate').addEventListener('click', () => {
    const rate = parseFloat(document.getElementById('playbackRate').value);
    if (!isNaN(rate) && rate >= 0.5 && rate <= 3) {
        playbackRate = rate;
    } else {
        alert('Please enter a valid playback rate between 0.5 and 3.');
    }
});

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
        const audio = document.getElementById(sound);
        audio.playbackRate = playbackRate; // Use the set playback rate
        stopSound();
        audio.play();
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

