enum options {
    rock = 'rock' ,
    paper =  'paper' ,
    scissors = 'scissors'
}

interface player {
    choice:options
}

type result = "player1" | "player2" | "standoff"

function playGame(player1:player, player2:player):result{
    if(player1.choice === player2.choice){
        return "standoff"
    }
    else if((player1.choice === options.rock && player2.choice === options.scissors) ||
    (player1.choice === options.paper && player2.choice === options.rock) ||
    (player1.choice === options.scissors && player2.choice === options.paper)){
        return "player1"
    }
    else {
        return "player2"
    }
}

const player1:player = {choice:options.paper}

const player2:player = {choice:options.scissors}


const play = playGame(player1, player2);
console.log(play);