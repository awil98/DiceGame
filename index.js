// Create variables for the game state
let player1Score = 0
let player2Score = 0

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

/* Hook up a click event listener to the Roll Dice Button. Log out a random
 number between 1 and 6. Hint: use Math.floor() and Math.random() */
 
 rollBtn.addEventListener("click", async ()=>{
    let roll = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    /**
     * I need to make my scoreboard active put my roll into the scoreboard and add my roll to my total score
     */
    player1Score += roll
    player1Dice.innerText = roll.toString()
    player1Scoreboard.innerText = player1Score
    /**
     * I now need to switch my active to player2Scoreboard and
     * Disable the roll button and then wait 2 seconds then
     * display the random roll in the player2Dice and update the score
     */
    if(player1Score === 21){
        message.innerText = "Player 1 Wins"
        resetGame()
    }else if(player1Score > 21){
        player1Score = 15
        message.innerText = "You Went Over! Back To 15"
        await setTimeout(()=>{
            message.innerText = "Player 2 Turn"
            player1Scoreboard.innerText = player1Score
            player1Dice.classList.toggle("active")
            rollBtn.disabled = true;
            player2Dice.classList.toggle("active") 
            computerMove() 
        }, 1000)
    }else{
        message.innerText = "Player 2 Turn"
        player1Dice.classList.toggle("active")
        rollBtn.disabled = true;
        player2Dice.classList.toggle("active")
        computerMove()   
    }
 })
 
 resetBtn.addEventListener("click", ()=>{
     player1Score = 0
     player2Score = 0
     player1Scoreboard.innerText = 0
     player2Scoreboard.innerText = 0
     player1Dice.innerText = "-"
     player2Dice.innerText = "-"
     rollBtn.style.display = "block"
     resetBtn.style.display = "none"
 })
 
 
 function computerMove(){
     setTimeout(()=>{
        let roll = Math.floor(Math.random() * (6 - 1 + 1) + 1)
        /**
         * I need to make my scoreboard active put my roll into the scoreboard and add my roll to my total score
         */
        player2Score += roll
        player2Dice.innerText = roll.toString()
        player2Scoreboard.innerText = player2Score
        if(player2Score === 21){
            message.innerText = "Player 2 Wins"
            resetGame()
        }else if(player2Score > 21){
        player2Score = 15
        message.innerText = "Computer Went Over! Back To 15!"
        setTimeout(()=>{
            player2Scoreboard.innerText = player2Score
            message.innerText = "Player 1 Turn"
             player2Dice.classList.toggle("active")
            player1Dice.classList.toggle("active")
            rollBtn.disabled = false
        }, 1000)
    } else{
            message.innerText = "Player 1 Turn"
             player2Dice.classList.toggle("active")
            player1Dice.classList.toggle("active")
            rollBtn.disabled = false
        }
     }, 1000)
 }
 
 function resetGame(){
     rollBtn.style.display = "none"
     resetBtn.style.display = "block"
 }