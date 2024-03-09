const videoPlayer = document.querySelector('#videoPlayer');
const startButton = document.querySelector('#startBtn');
const stopButton = document.querySelector('#stopBtn');
let wakeLock = null;

startButton.addEventListener('click', async () => {
    try {
        wakeLock = await navigator.wakeLock.request( 'screen' );
        videoPlayer.play();
    }
    catch (err) {
        console.error( 'Ошибка запроса блокировки экрана', err );
    }
});

stopButton.addEventListener('click', () => {
    if( wakeLock !== null ) {
        wakeLock.release();
        wakeLock = null;
    }
    videoPlayer.pause();
});
