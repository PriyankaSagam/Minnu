class player{
    constructor(name){
    this.name=name;
    this.score=[];
    };

    rollDice(){
        
        const score = Math.floor(Math.random() * 6) + 1
        console.log(score);
        return score;
    };

    buildScore(score){
        this.score.push(score);
        return this.score;
    }


}
// class dice{
//     constructor(number){
//         this.number=number
//     }
// }
let player1=new player('Ann')
console.log(player1);

let player2=new player('Sam')
console.log(player2);

let goAhead = 'yes';
let player1Played = false;
let player2Played = false;
let player1ScoreAll = [];
let player2ScoreAll = [];

for (i=0;i<5;i++){
        console.log(i)

        if (goAhead == 'yes' && player1Played == false){
            const player1Score = player1.rollDice();
            console.log("Player1 Score: " + player1Score);
            player1Played = true; 
            player1ScoreAll = player1.buildScore(player1Score);
            console.log(player1ScoreAll);
            
        } 

        if (goAhead == 'yes' && player2Played == false){
            const player2Score = player2.rollDice();
            console.log("Player2 Score: " + player2Score);
            player2Played = true;
            player2ScoreAll = player2.buildScore(player2Score);
            console.log(player2ScoreAll);
        }

        if (goAhead = 'yes' && player1Played && player2Played){
            //goAhead ='no';
            player1Played = false;
            player2Played = false;
            console.log('final loop')
            console.log(player1Played)
            console.log(player2Played)
        }
};

