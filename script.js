const genMessage = document.getElementById('genMessage')
const choosePlayerNum = document.getElementById('choosePlayerNum')
const select2Player = document.getElementById('select2Player')

// Player 1
const player1 = document.getElementById('player1')
const playerName1 = document.getElementById('playerName1')
const playerMessage1 = document.getElementById('playerMessage1')
const dice1 = document.getElementById('dice1')
const score1 = document.getElementById('score1')
const roleDice1 = document.getElementById('roleDice1')
const player1DiceImage = document.getElementById('player1DiceImage')

// Player 2
const player2 = document.getElementById('player2')
const playerName2 = document.getElementById('playerName2')
const playerMessage2 = document.getElementById('playerMessage2')
const dice2 = document.getElementById('dice2')
const score2 = document.getElementById('score2')
const roleDice2 = document.getElementById('roleDice2')
const player2DiceImage = document.getElementById('player2DiceImage')

// Total Score Variables
let scoreTotPlayer1 = 0
let scoreTotPlayer2 = 0


gameControl = {
    playerMode: '1player',
    turn: 1,
    turnCheck: () => {
        this.turn = (1) ? (this.turn = 2) : (this.turn = 1); 
    },
    modeCheck: ()=>{
        if(this.playerMode === '2player'){
            if(turn == 1){
                roleDice1.disabled = false
                roleDice2.disabled = true
            }
            else{
                roleDice1.disabled = true
                roleDice2.disabled = false
            }

        }
        else{
            roleDice2.disabled = true
        }
    }
}


thePlayer1 = {
    playerNumber:1,
    name: 'Bob Haskins',
    scoreTot: 0,
    state: 'playing',
    setDiceNumer: ()=>{player1DiceImage.src = diceSidePic}

}

thePlayer2 = {
    playerNumber:2,
    name: 'Mary Popins',
    scoreTot: 0,
    state: 'playing',
    setDiceNumer: ()=>{player2DiceImage.src = diceSidePic}
    
}



dice = {
    getDicePic: (score) =>{
        score = score -1  // as array starts at 0
        const diceSides = ["1.png","2.png","3.png","4.png","5.png","6.png"]
        let pic  = "./img/dice" + diceSides[score]
        return pic
    },

    diceRolling: ()=> {return Math.floor((Math.random()* 6) + 1)}

}





// How many players
// const checkNumPlayers = () =>{
//     if(choosePlayerNum.checked = true){
//         console.log(`2 players`)
//         return true
//     }
//     else {
//         console.log(`1 players`)
//         return false
//     }
// }



// // Role dice
// const diceRoll = () =>{
//     return Math.floor((Math.random()* 6) + 1)
// }


// dice score displayed

// const getDicePic = (score) =>{
//     score = score -1  // as array starts at 0
//     const diceSides = ["1.png","2.png","3.png","4.png","5.png","6.png"]
//     let pic  = "./img/dice" + diceSides[num]
//     return pic
// }

// const displayDice = (thePlayer, diceSidePic) => {
//     //thePLayer is 1 or 2
//     // diceSidePic   eg  "./img/dice3.png"
//     if(thePlayer === 1){
//         player1DiceImage.src = diceSidePic
//     }
//     else {
//         player2DiceImage.src = diceSidePic
//     }
// }


// TESTING
// -------
// let test = diceRoll()
// console.log(`dice roll  ${test}`)
// let testSide = getDicePic(test)
// console.log(`getDicePic  ${testSide}`)
// console.log(`displayDice`)
// displayDice(2,testSide)



// keep rolling , score adds up
const gamePlay = (player, diceId, scoreId, playerMessage)=> {
    // player --> e.g. thePlayer1 object   ,  playerID --> eg. player1
    console.log(`player.state   ${player.state}\n   player.scoreTot ${player.scoreTot}\n   player.name  ${player.name}\n  player.playerNumber  ${player.playerNumber}`)
        
    // roll dice
        let theScore = dice.diceRolling()
        diceId.src = dice.getDicePic(theScore)
        console.log(`theScore  ${theScore}`)

        // Check if 1
        if(theScore === 1){
            console.log(`game over - loose`)
            playerMessage.textContent = "LOOSE"
            player.scoreTot = 0
            player.state = "loose"
            return "loose"
        }

        player.scoreTot = player.scoreTot + theScore
        scoreId.value = player.scoreTot

        if(player.scoreTot > 20){
            console.log(`game WIN`)
            playerMessage.textContent = "WIN"
            player.state = "WIN"
            return "win"
        }

}






// Listen to button and selection inputs
roleDice1.addEventListener('click' , ()=>{
    console.log(`role Dice 1`)
    gamePlay(thePlayer1, player1DiceImage, score1, playerMessage1)
    })
    

roleDice2.addEventListener('click' , ()=>{
        console.log(`role Dice 2`)
    gamePlay(thePlayer2, player2DiceImage, score2, playerMessage2)
    })
    

    // gameControl = {
    //     playerMode: '1player',
    //     turn: 1,
    //     turnCheck: () => {
    //         this.turn = (1) ? (this.turn = 2) : (this.turn = 1); 
    //     },
    //     modeCheck:


select2Player.addEventListener('click' ,()=>{
        console.log(`change player numbers  select2Player.checked ${select2Player.checked}`)
        if(select2Player.checked === false){
            console.log('1 player')
            thePlayer2.state = 'notPlaying'
            player2.classList.add('hide')
            gameControl.playerMode = '1player'
            

        } else{
            console.log('2 players')
            thePlayer2.state = 'playing'
            player2.classList.remove('hide')
            gameControl.playerMode = '2player'
        }

        console.log(`thePlayer1 state ${thePlayer1.state}`)
        console.log(`thePlayer2 state ${thePlayer2.state}`)
    
    })

// if score is 20 or over win
// roll is 1 loose




// Dice Game

// Brief
// There are two parts to this project:
// 	single player 
// 	multiplayer players

// Single player dice game:
//      Roll the dice to begin the game.
//      The dice appears on the first roll.
//      Each time the dice is rolled the score adds up.
//      If the score passes 20, you win.
//      If you roll a 1 at any time, you lose and the game restarts.


// Multiplayer dice game:
//      Rules are the same as the single player version, 
//      but you must display a dice for each player, and 
//      it must highlight the current player and keep their score. 


