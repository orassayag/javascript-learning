/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, previousScore, winScore;

init();


//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).textContent = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);

//function btn() {
//Do something
//}
//btn();


document.querySelector('.btn-roll').addEventListener('click', function () {
    // Check if the game is active
    if (!gamePlaying) {
        return;
    }

    // Random number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // Display the result
    var diceDOM1 = document.getElementById('dice1');
    diceDOM1.style.display = 'block';
    diceDOM1.src = 'dice-' + dice1 + '.png';

    var diceDOM2 = document.getElementById('dice2');
    diceDOM2.style.display = 'block';
    diceDOM2.src = 'dice-' + dice2 + '.png';

    // Update the round score IF the rolled number is not a 1
    if (dice1 !== 1 && dice2 !== 1) {
        // Add score
        roundScore += dice1 + dice2;
        if (previousScore === 6 && (dice1 === 6 || dice2 === 6)) {
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else {
            previousScore = dice1;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
    } else {
        // Next player
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    // Check if the game is active
    if (!gamePlaying) {
        return;
    }

    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    winScore = document.querySelector('.input-win-score').value;
    if (!winScore) {
        winScore = 100;
    }

    // Check if the player won the game
    if (scores[activePlayer] >= winScore) {
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
        var diceDOM1 = document.getElementById('dice1');
        diceDOM1.style.display = 'none';
        var diceDOM2 = document.getElementById('dice2');
        diceDOM2.style.display = 'none';
        gamePlaying = false;
    } else {
        // Check if player won the game
        nextPlayer();
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    // Reset variables
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    previousScore = 0;
    winScore = 100;

    // Update the UI
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.input-win-score').value = winScore;
}

function nextPlayer() {

    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    previousScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    var diceDOM1 = document.getElementById('dice1');
    diceDOM1.style.display = 'none';
    var diceDOM2 = document.getElementById('dice2');
    diceDOM2.style.display = 'none';
}