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
let AnnPlayed = false;
let SamPlayed = false;
let AnnScoreAll = [];
let SamScoreAll = [];
var finalscoreAnn = 0;
var finalscoreSam = 0;

for (i=1;i<6;i++){
        console.log("round no. :" + i);

        if (AnnPlayed == false){
            const AnnScore = dice.rollDice();
            console.log("Ann Score: " + AnnScore);
            AnnPlayed = true; 
            AnnScoreAll = player1.buildScore(AnnScore);
            //console.log(AnnScoreAll);
            
        } 

        if (SamPlayed == false){
            const SamScore = dice.rollDice();
            console.log("Sam Score: " + SamScore);
            SamPlayed = true;
            SamScoreAll = player2.buildScore(SamScore);
            //console.log(SamScoreAll);
        }

        if (AnnPlayed && SamPlayed){
            //goAhead ='no';
            AnnPlayed = false;
            SamPlayed = false;
        }

};
console.log(AnnScoreAll);
console.log(SamScoreAll);

finalscoreAnn = player1.sumScores(AnnScoreAll);
finalscoreSam = player2.sumScores(SamScoreAll);
console.log("final score of Ann: " + finalscoreAnn);
console.log("final score of Sam: " + finalscoreSam);
if (finalscoreAnn > finalscoreSam){
    console.log(player1.name + " is winner with highest score: " + player1.finalscore);
}
else if(finalscoreAnn < finalscoreSam){
    console.log(player2.name+ " is winner with highest score " + player2.finalscore);
}
else if(finalscoreAnn == finalscoreSam){
    console.log("its a tie with equal scores");
}