alert("Welcome to Space Battle");

// USS 

class battleShip {
  constructor(name, hull, firepower, accuracy) {
    this.name = this.name,
    this.hull = this.hull
    this.firepower = this.firepower
    this.accuracy = this.accuracy
  }
  }

let ship1 = {
name: 'Ship 1',
hull: Math.floor(Math.random() * 4) + 3,
firepower: Math.floor(Math.random() * 3) + 2,
accuracy: (Math.floor(Math.random() * 3) + 6) / 10
}

let ship2 = {
name: 'Ship 2',
hull: Math.floor(Math.random() * 4) + 3,
firepower: Math.floor(Math.random() * 3) + 2,
accuracy: (Math.floor(Math.random() * 3) + 6) / 10
}

let ship3 = {
name: 'Ship 3',
hull: Math.floor(Math.random() * 4) + 3,
firepower: Math.floor(Math.random() * 3) + 2,
accuracy: (Math.floor(Math.random() * 3) + 6) / 10
}

let ship4 = {
name: 'Ship 4',
hull: Math.floor(Math.random() * 4) + 3,
firepower: Math.floor(Math.random() * 3) + 2,
accuracy: (Math.floor(Math.random() * 3) + 6) / 10
}

let ship5 = {
name: 'Ship 5',
hull: Math.floor(Math.random() * 4) + 3,
firepower: Math.floor(Math.random() * 3) + 2,
accuracy: (Math.floor(Math.random() * 3) + 6) / 10
}

let ship6 = {
name: 'Ship 6',
hull: Math.floor(Math.random() * 4) + 3,
firepower: Math.floor(Math.random() * 3) + 2,
accuracy: (Math.floor(Math.random() * 3) + 6) / 10
}


class AlienShip {
constructor(name, hull, firepower, accuracy) {
  this.name = this.name
  this.hull = Math.floor(Math.random() * 4) + 3;
  this.firepower = Math.floor(Math.random() * 3) + 2;
  this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
}
}

const AlienShips = [ship1, ship2, ship3, ship4, ship5, ship6]; //ship1, ship2, ship3, ship4, ship5, ship6
// new AlienShip(this.name, this.hull, this.firepower, this.accuracy)
const arnold = new battleShip("USS Schwarzenegger", 20, 5, .7) // trying to make battleShip as a variable didn't work
// let ship1 = new AlienShip("Ship 1", this.hull, this.firepower, this.accuracy);
// let ship2 = new AlienShip("Ship 2", this.hull, this.firepower, this.accuracy);
// let ship3 = new AlienShip("Ship 3", this.hull, this.firepower, this.accuracy);
// let ship4 = new AlienShip("Ship 4", this.hull, this.firepower, this.accuracy);
// let ship5 = new AlienShip("Ship 5", this.hull, this.firepower, this.accuracy);
// let ship6 = new AlienShip("Ship 6", this.hull, this.firepower, this.accuracy);

AlienShips.push(ship1.name, ship2.name, ship3.name, ship4.name, ship5.name, ship6.name)

i = 0

for(let i = 0; i < 6; i++) { // this should create 6 ships with different attributes
// AlienShips[i] = new AlienShip();
}

// console.log(AlienShips[i]);


// outcomes of battle

let gameOver = "You win!"
let gameOverForYou = "You lose!"
let endOfGame = "GAME OVER"

      
const defeat = () => {
    if(arnold.hull <= 0) {
      defeat = gameOverForYou
      console.log(defeat);
    }
  }

// isolate the attacks so it goes until someone's hull is at 0 and then game ends

function checkWin() {
    if (AlienShips[i].hull <= 0) {
      console.log("Their ship is down!");
      alert(gameOver);
    } else if (AlienShips[i].hull >= 0) {
      console.log("The battle isn't over! Keep firing!");
    } else if (arnold.hull <= 0) {
      console.log(defeat);
      alert(gameOverForYou)
    } else if (arnold.hull >= 0) {
      console.log("You're still alive champ!");
    }
  }

// user input to start fight or retreat

let fight = prompt("You are being approached by the enemy! " + "Type FIRE to attack or cancel to retreat", "FIRE")
    if(fight === "FIRE") {
      alert("You said it... FIRE");
    } 
attack();
    if(fight === null) { // https://stackoverflow.com/questions/12864582/javascript-prompt-cancel-button-to-terminate-the-function
      alert('Come on. Refresh the page or press "OK"');
    }

// user input to continue fighting

let keepGoing = prompt(`Do you want to enter the battle field again? Type 'Yes' to continue or cancel to stop the game.`, "Yes", "No")
    if(keepGoing === "Yes") {
      alert("If you say so lol");
    }
    if(keepGoing === null) {
    }
attack();



// attack functions

function attack() {
  if(Math.random() < AlienShips[i].accuracy) {
    console.log("You hit their ship! NICE!");
    AlienShips[i].hull = AlienShips[i].hull - arnold.firepower // should output new health in line 102
    console.log(`${AlienShips[i].name} has ${AlienShips[i].hull} health`);
    checkWin();
    } if (Math.random() > AlienShips[i].accuracy) {
      console.log("You missed! Don't make that mistake again!");
    }
  }
 

function alienAttack() {
  if(Math.random() < AlienShips[i].accuracy) {
      console.log("You've been hit Arnold! Be careful!")
      arnold.hull = arnold.hull - AlienShips[i].firepower // should output new health in line 119
      // console.log(`USS Schwarzenegger has ${arnold.hull} health left`);
      checkWin();
      } if (Math.random() > arnold.accuracy) {
        console.log("The aliens have missed! It's your lucky day..")
      }
  }

// battle with all 6 ships

function battle() {

// battle between arnold and Ship 1 


  if(arnold.hull > 0 && AlienShips[0].hull > 0) {
      attack(arnold, AlienShips[0])
    } else if (arnold.hull > 0 && AlienShips[0].hull > 0) {
        alienAttack(arnold);
    } else if (arnold.hull > 0 && AlienShips[0].hull <= 0) {
        console.log(gameOver);
        alert(keepGoing)
    } else {
      // alert(gameOverForYou);
      
}

// battle between arnold and Ship 2   
    

  if(arnold.hull > 0 && AlienShips[1].hull > 0) {
      attack(arnold, AlienShips[1])
    } else if (arnold.hull > 0 && AlienShips[1].hull > 0) {
        alienAttack(arnold);
    } else if (arnold.hull > 0 && AlienShips[1].hull <= 0) {
        console.log(gameOver);
        alert(keepGoing);
    } else {
      // alert(gameOverForYou);
}
    
// battle between arnold and Ship 3
   
  if(arnold.hull > 0 && AlienShips[2].hull > 0) {
      attack(arnold, AlienShips[2])
    } else if (arnold.hull > 0 && AlienShips[2].hull > 0) {
        alienAttack(arnold);
    } else if (arnold.hull > 0 && AlienShips[2].hull <= 0) {
        console.log(gameOver);
        alert(keepGoing);
    } else {
      // alert(gameOverForYou);
}

// battle between arnold and Ship 4 
    

if(arnold.hull > 0 && AlienShips[3].hull > 0) {
    attack(arnold, AlienShips[3])
    } else if (arnold.hull > 0 && AlienShips[3].hull > 0) {
        alienAttack(arnold);
    } else if (arnold.hull > 0 && AlienShips[3].hull <= 0) {
        console.log(gameOver);
        alert(keepGoing);
    } else {
      // alert(gameOverForYou);
}

// battle between arnold and Ship 5

if(arnold.hull > 0 && AlienShips[4].hull > 0) {
      attack(arnold, AlienShips[4])
    } else if (arnold.hull > 0 && AlienShips[4].hull > 0) {
        alienAttack(arnold)
    } else if (arnold.hull > 0 && AlienShips[4].hull <= 0) {
        console.log(gameOver);
        alert(keepGoing);
    } else {
      // alert(gameOverForYou);
}

// battle between arnold and Ship 6
    
if(arnold.hull > 0 && AlienShips[5].hull > 0) {
    attack(arnold, AlienShips[5])
  } else if (arnold.hull > 0 && AlienShips[5].hull > 0) {
      alienAttack(arnold);
  } else if (arnold.hull > 0 && AlienShips[5].hull <= 0) {
      console.log(gameOver);
  } else {
    // alert(gameOverForYou);
  }
}


// battle all ships or until your hull is at or below 0

battle(arnold, ship1)
battle(arnold, ship2)
battle(arnold, ship3)
battle(arnold, ship4)
battle(arnold, ship5)
battle(arnold, ship6)

// battle(arnold, AlienShips[0])
// battle(arnold, AlienShips[1])
// battle(arnold, AlienShips[2])
// battle(arnold, AlienShips[3])
// battle(arnold, AlienShips[4])
// battle(arnold, AlienShips[5])





