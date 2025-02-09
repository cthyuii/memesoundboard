const sounds = [
    'vine_boom', 'sus', 'angry',
    'happy', 'dekupopdemnem', 'what_the_sigma',
    'applause', 'correct', 'wrong', 'get-out',
    'rizz', 'oioioi', 'vas', 'gay', 'again','huh',
    'naur', 'sitcom', 'wrong2', 'ding', 'sigma-boy',
    'sad', 'freddy', 'again2', 'chopped-chin', 'eye-of-rah',
    'egypt', 'indian',
];

let currentAudio = null;
let playbackRate = parseFloat(document.getElementById('playbackRate').value); // Initialize playback rate from input field


document.getElementById('setPlaybackRate').addEventListener('click', () => {
    const rate = parseFloat(document.getElementById('playbackRate').value);
    if (!isNaN(rate) && rate >= 0.5 && rate <= 3) {
        playbackRate = rate;
        document.getElementById('playbackRateMessage').innerText = `Playback rate set to ${playbackRate}!`;
    } else {
        alert('Please enter a valid playback rate between 0.5 and 3.');
    }
});

sounds.forEach((sound) =>{
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        if (currentAudio && currentAudio.src !== document.getElementById(sound).src) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        const audio = new Audio(document.getElementById(sound).src);
        audio.playbackRate = playbackRate; // Use the set playback rate
        audio.play();

        currentAudio = audio;
    });

    document.getElementById('buttons').appendChild(btn);

});
/*
function stopSound(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
};*/

