class player{
    constructor(name){
    this.name=name;
    this.score=[];
    this.finalscore = 0;
    };


    buildScore(score){
        this.score.push(score);
        return this.score;
    }

    sumScores(score){
        this.score = score;
        for (i=0;i<this.score.length;i++){
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

    rollDice(){
        
        this.score = Math.floor(Math.random() * 6) + 1
        //console.log(score);
        return this.score;
    };
    }
//-----------------------------------------

let player1=new player('Ann')
console.log(player1);

let player2=new player('Sam')
console.log(player2);

let dice = new Dice();

let goAhead = 'yes';
let player1Played = false;
let player2Played = false;
let player1ScoreAll = [];
let player2ScoreAll = [];
var finalscore1 = 0;
var finalscore2 = 0;

for (i=0;i<5;i++){
        console.log("round no. :" + i);

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
            //goAhead ='no';
            player1Played = false;
            player2Played = false;
        }

};
console.log(player1ScoreAll);
console.log(player2ScoreAll);

finalscore1 = player1.sumScores(player1ScoreAll);
finalscore2 = player2.sumScores(player2ScoreAll);
console.log("final score 1: " + finalscore1);
console.log("final score 2: " + finalscore2);
if (finalscore1 > finalscore2){
    console.log(player1.name + " is winner with highest score: " + player1.finalscore);
}
else if(finalscore1 < finalscore2){
    console.log(player2.name+ " is winner with highest score " + player2.finalscore);
}
else if(finalscore1 == finalscore2){
    console.log("its a tie with equal scores");
}