let timerId; // переменная, которая будет хранить ID таймера


const startButton = document.getElementById('start');

startButton.addEventListener('click', function getStart() {
clearInterval(timerId);
  timerId = setInterval(updateClock, 1000);
  
});


const stopButton = document.getElementById('stop');

stopButton.addEventListener('click', function getStop() {
    clearInterval(timerId);
});


function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}
