// 0. Start the game 
alert('Start the game')
alert('Choose an atack')

// 1. Choose an atack players
let player = prompt('Write 0 for rock, 1 for paper and 2 for scissors')

if (player == 0) {
    alert('You choose Rock')
} else if (player == 1) {
    alert('You choose paper')
} else if (player == 2) {
    alert('You choose scissors')
}

// 2. Choose an random atack computer
let enemy = Math.round(Math.random() * 2)

if (enemy == 0) {
    alert('The computer choose Rock')
} else if (enemy == 1) {
    alert('The computer choose paper')
} else if (enemy == 2) {
    alert('The computer choose scissors')
}

// 3. Show the result
if (player == enemy){
    alert('Draw :|')
} else if (player == 0 && enemy == 2) {
    alert('You win :D')
} else if (player == 1 && enemy == 0) {
    alert('You win :D')
} else if (player == 2 && enemy == 1) {
    alert('You win :D')
} else {
    alert('You loss :(')
}