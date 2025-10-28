let scoreA = 0
let scoreB = 0

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