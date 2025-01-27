/* psuedocode
1.CSS-  create a gameboard with 6 rows, 5 boxes in each row.
     Each row is a turn, each box contains a single character
     I want the gameboard to be in the center of the screen
     I want a pop up window upon initialization of page with the instructions.

2. CSS- display a keyboard on screen
     allows users to click a letter (similar to calculator lab) and is assigned to the first empty box of the current row. (JS)

3. CSS- submit button
    upon click, check guess with correct word
        (must iterate over the individual letters of guessed word to match yellows and greens.)
    update the colors of the letters in game board AND keyboard
    check status of game
        if won, display message and add confetti
        if lost, move the turn to the next row

4. JS-  randomly select a word from a source
    source is a defined const using a random number generator function to select the index

5. JS- tally for games won & user scoreboard
    the tally has to be able to store wins and losses
    don't restart the tally upon initialization, need to keep track of overall wins
    computer wins every time the user is unable to guess the word

6. stretch goal: add different languages
*/

/* ---------------------------------- Constants------------------------------------ */

const wordBank = [
    "apple", "bread", "chair", "dance", "eagle", "fence", "giant", "horse", "ideal", "jelly", "knife", "lemon", "magic", "night", "ocean", "penny", "queen", "rocky", "sugar", "table", "union", "venus", "water", "zebra", "angry", "brave", "cloud", "dream", "earth", "fairy", "ghost", "happy", "inlet", "jolly", "kites", "latch", "music", "novel", "olive", "peace", "quill", "river", "story", "towel", "under", "value", "worry", "young", "zesty", "alley", "blaze", "crush", "drown", "elbow", "frost", "grown", "hatch", "ivory", "joint", "karma", "light", "mocha", "nerve", "ovals", "paint", "quirk", "relay", "storm", "tonic", "urges", "vivid", "winds", "yards", "zonal", "arrow", "blend", "cable", "decor", "equip", "flour", "glare", "honor", "issue", "judge", "kneel", "layer", "moons", "north", "opals", "plant","query", "reach", "shine", "trust", "upset", "verge", "witty", "yield", "zones"
]

/* ---------------------------------- Variables (state)---------------------------- */
// gameState;
// //(true false, won/lost)
// gameTurn;
// // each row = turn
// restartGame
/* -------------------------------- Cached Element References --------------------- */
// select the button & pop up-elements
const instructionsButton = document.getElementById('instructions-button');
const popup = document.getElementById('popup');
const closePopupButton= document.getElementById('close-popup');
const gameBoardElement = document.querySelector('#game-board')

/* -------------------------------- Functions ------------------------------------ */


/* -------------------------------- Event Listeners ------------------------------ */

// show instructions pop-up when button clicked
instructionsButton.addEventListener('click', () => {
    console.log('Instructions requested')
    // popup.style.opacity= '1';
    popup.classList.remove('hidden')
});

// close instructions pop-up when let's play is clicked
closePopupButton.addEventListener('click', ()=> {
    console.log('Instructions dismissed');
    popup.classList.add('hidden');
})

console.dir(closePopupButton)
