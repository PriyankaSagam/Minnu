class player{
    constructor(name){
    this.name=name;
    this.score=[];
    this.finalscore = 0;
    };

//to know the score

    buildScore(score){
        this.score.push(score);
        return this.score;
    }
// to know the final score

    sumScores(score){
        this.score = score;
        for (let i=0;i<this.score.length;i++){
            this.finalscore += this.score[i];
        }
        console.log(this.finalscore);
        return this.finalscore;
    }

}
class Dice{
    constructor(){
      this.score = 0
    }
//rolling dice randomly

    rollDice(){
        
        this.score = Math.floor(Math.random() * 6) + 1
        return this.score;
    };
    }
//-----------------------------------------
let player1=new player('Player1')
console.log(player1);

let player2=new player('Player2')
console.log(player2);

let dice = new Dice();


let player1Played = false;
let player2Played = false;
let player1ScoreAll = [];
let player2ScoreAll = [];
var player1FinalScore = 0;
var player2FinalScore = 0;
let winnerName = '';

//addEventListener to  enter button and choose rounds

let numOfRounds = 0;
const enter = document.getElementById('display');

enter.addEventListener('click', function(){
    document.getElementById('result').textContent = "Click on Start Button to start Game";
    numOfRounds = document.querySelector('input').value;
    console.log(numOfRounds);
})

//check the number is numeric and valid number

if (isFinite(numOfRounds) && !isNaN(numOfRounds)){
    console.log(numOfRounds + " is valid number")
    if (numOfRounds > 100){
        console.log("please enter value less than or equal 100")
    }
}
else{ 
    console.log("Please input a valid number")

}

//addEventListener to start button

const start = document.getElementById('start');

start.addEventListener('click', function(){
    
    for (i=1;i<= numOfRounds;i++){
            console.log("round no. :" + i);
            document.getElementById('start').disabled = true;
            if (player1Played == false){
                const player1Score = dice.rollDice();
                console.log("Player1 Score: " + player1Score);
                player1Played = true; 
                player1ScoreAll = player1.buildScore(player1Score);
                //console.log(player1ScoreAll);
                
            } 
    
            if (player2Played == false){
                const player2Score = dice.rollDice();
                console.log("Player2 Score: " + player2Score);
                player2Played = true;
                player2ScoreAll = player2.buildScore(player2Score);
                //console.log(player2ScoreAll);
            }
    
            if (player1Played && player2Played){
                player1Played = false;
                player2Played = false;
            }
    
    };
})

//addEventListener to the winner

document.getElementById('result').textContent = "Click on winner button to know the winner";

const winner = document.getElementById('winner');

winner.addEventListener('click', function(){
    player1FinalScore = 0;
    player2FinalScore = 0;
    player1FinalScore = player1.sumScores(player1ScoreAll);
    document.getElementById('score1').textContent = player1FinalScore;
    
    player2FinalScore = player2.sumScores(player2ScoreAll);
    document.getElementById('score2').textContent = player2FinalScore;

    console.log("final score of Player1: " + player1FinalScore);
    console.log("final score of Player2: " + player2FinalScore);
    if (player1FinalScore > player2FinalScore){
        console.log(player1.name + " is winner with highest score: " + player1.finalscore);
        winnerName = 'Player1 is the Winner';

    }
    else if(player1FinalScore < player2FinalScore){
        console.log(player2.name+ " is winner with highest score " + player2.finalscore);
        winnerName = 'Player2 is the Winner';
    }
    else if(player1FinalScore == player2FinalScore){
        console.log("its a tie with equal scores");
        winnerName = 'It is a tie!';
    }

    document.getElementById('result').textContent = winnerName;
    document.getElementById('finaltext').textContent = "Hit continue button to continue or Quit";

});

//addEventListener to continue buttton

const contue = document.getElementById('continue');

contue.addEventListener('click', function(){
    document.getElementById('result').textContent = "Choose Number of Rounds for next game and hit Enter";
    document.getElementById('finaltext').textContent = "";
    document.getElementById('start').disabled = false;
    document.querySelector('input').value = ""
   
})

//addEventListener to quit button

const qut = document.getElementById('quit');

qut.addEventListener('click', function(){
    document.getElementById('display').disabled = true;
    document.getElementById('start').disabled = true;
    document.getElementById('continue').disabled = true;
    document.getElementById('winner').disabled = true;
    document.getElementById('result').textContent = "All the buttons disabled as player wants to Quit";
    document.getElementById('finaltext').textContent = "Refresh page to start playing again";
 
})