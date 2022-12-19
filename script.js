let computerChoice ;

const getComputerChoice = function(){
    computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) {
        computerChoice = 'ROCK' ;
        return computerChoice;
    } else if (computerChoice === 1) {
        computerChoice = 'PAPER'
        return computerChoice;
    } else {computerChoice = 'SCISSORS'
        return computerChoice;
    }
}

// getComputerChoice() ;

let playerChoice ;

const getPlayerChoice = function() {
    playerChoice = prompt ('Rock, Paper or Scissors?');
    playerChoice = playerChoice.toUpperCase();
    return playerChoice ;
}

// getPlayerChoice();


const playRound = function(playerChoice, computerChoice){
    playerChoice = getPlayerChoice();
    console.log(playerChoice);
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    if (playerChoice !== 'ROCK' && playerChoice !== 'PAPER' && playerChoice !== 'SCISSORS') {
            alert ('Check spelling!');
            playRound();
    } else if (playerChoice === 'ROCK' && computerChoice === 'PAPER') {
        result = 'Lose' ;
        console.log('You lose! Paper covers Rock!');
        return result;
    } else if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS'){
        result = 'Win' ;
        console.log('You win! Rock smashes Scissors!');
        return result;
    } else if (playerChoice === 'PAPER' && computerChoice === 'ROCK'){
        result = 'Win' ;
        console.log('You win! Paper covers Rock!');
        return result;
    }  else if (playerChoice === 'PAPER' && computerChoice === 'SCISSORS'){
        result = 'Lose' ; 
        console.log('You lose! Scissors cut paper!');
        return result;// win/lose outcomes for Paper
    } else if (playerChoice === 'SCISSORS' && computerChoice === 'ROCK'){
        result = 'Lose' ;
        console.log('You lose! Rock smashes Scissors!');
        return result;
    } else if (playerChoice === 'SCISSORS' && computerChoice === 'PAPER'){
        result = 'Win' ;
        console.log('You win! Scissors cut paper!');
        return result ; //win/lose outcomes for Scissors
    } else {
        alert ('Draw!') ;
        playRound() ;
    } //draw outcome   
}

// playRound();

//GAME OF 5//
let playerWin = 0
let computerWin = 0
const game = function() {
    for (let i = 0 ; i < 5 ; i ++) {
        playRound() ;
        if (result === 'Win') {
            playerWin += 1 ;
        } else {computerWin += 1}
        console.log(`ROUND-${i+1} SCORE: Player ${playerWin} Computer ${computerWin}`);
        if (playerWin === 3) {
            console.log (`You win! ${playerWin} to ${computerWin}!`);
            break;
        } else if (computerWin === 3) {
            console.log (`You lose! ${computerWin} to ${playerWin}`);
            break;
        }
    }
}

game()