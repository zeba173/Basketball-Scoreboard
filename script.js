let scoreA = 0
let scoreB = 0
let totalSeconds = 12 * 60;
let timer;
let isRunning = false;

function addScore(team, points)
{
    if(team == 'A')
        scoreA += points;
    else
        scoreB += points;

    document.getElementById('scoreA').textContent = scoreA;
    document.getElementById('scoreB').textContent = scoreB;
}

function resetGame()
{
    scoreA = 0
    scoreB = 0
    document.getElementById('scoreA').textContent = '00';
    document.getElementById('scoreB').textContent = '00';
}

function updateDisplay()
{
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    document.getElementById('timer').textContent = 
    minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
}

function startTimer()
{
    if(isRunning) return;
    isRunning = true;

    timer = setInterval(() => {
        if(totalSeconds > 0)
            {
                totalSeconds--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alert("Time's Up!");
            }
    }, 1000);
}

function stopTimer()
{
    clearInterval(timer);
    isRunning = false;
}

function resetTimer()
{
    clearInterval(timer);
    isRunning = false;
    totalSeconds = 12 * 60;
    updateDisplay();
}
