function createGame(){




let score = 0;
function increasedScore(points){
    score += points;
    console.log(`+${points}pts`)
}
function decreaseScore(points){
    score -=  points;
    console.log(`-${points}pts`)
}
function getScore(){
    return score;
}
return{increasedScore,decreaseScore,getScore}
}
const game = createGame();
game.increasedScore(15);
game.decreaseScore(5);
console.log(`The final score is ${game.getScore()} pts`)
