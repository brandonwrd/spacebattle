alert("Welcome to Space Battle");

// USS

let arnold = {
  name: "USS Schwarzenegger",
  hull: 20,
  firepower: 5,
  accuracy: .7
}

class battleShip {
  constructor(name, hull, firepower, accuracy) {
    this.name = this.name,
    this.hull = this.hull
    this.firepower = this.firepower
    this.accuracy = this.accuracy
  }
}

class AlienShip {
constructor(name, hull, firepower, accuracy) {
  this.name = this.name
  this.hull = Math.floor(Math.random() * 4) + 3;
  this.firepower = Math.floor(Math.random() * 3) + 2;
  this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  }
}

// const arnold = new battleShip("USS Schwarzenegger", 20, 5, .7) // trying to make battleShip as a variable didn't work

let ship1 = new AlienShip("Ship 1");
let ship2 = new AlienShip("Ship 2");
let ship3 = new AlienShip("Ship 3");
let ship4 = new AlienShip("Ship 4");
let ship5 = new AlienShip("Ship 5");
let ship6 = new AlienShip("Ship 6");

const AlienShips = []; // ship1, ship2, ship3, ship4, ship5, ship6

for(let i = 0; i < 6; i++) { 
  const ships = new AlienShip(); // this should create 6 ships with different attributes
  AlienShips.push(ships); 
  }


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
        console.log(gameOver);
        alert("NICE! Press OK to move on to the next ship");
    }
    if (AlienShips[i].hull >= 0) {
        console.log("The battle isn't over! Keep firing!");
    } else if (arnold.hull <= 0) {
        console.log(defeat);
        alert(gameOverForYou)
    } else if (arnold.hull >= 0) {
        console.log("You're still alive champ!");
    }
}

// user input to start fight or retreat at the start

let fight = prompt("You are being approached by the enemy! " + "Type FIRE to attack or cancel to retreat", "FIRE")
    if(fight === "FIRE") {
      alert("You said it... FIRE");
    } 
    // battle();

    if(fight === null) { // https://stackoverflow.com/questions/12864582/javascript-prompt-cancel-button-to-terminate-the-function
      alert('Come on. Refresh the page or press "OK"');
    }

// user input to continue fighting

let keepGoing = prompt(`Are you sure? Type 'Yes' to continue cancel to stop the game.`, "Yes")
    if(keepGoing === "Yes") {
      alert("If you say so lol");
    }
battle();
    if(keepGoing === null) {
}

// battle with all 6 ships (hopefully)

function battle() {

for(i = 0; i < AlienShips.length; i++) {
  if (Math.random() < arnold.accuracy) { // this is old attack function
      console.log("You hit their ship! NICE!");
      AlienShips[i].hull = AlienShips[i].hull - arnold.firepower // should output new health in line below
      console.log(`This ship has ${AlienShips[i].hull} health`);
      checkWin();
      break;
  } else if (Math.random() > AlienShips[i].accuracy) {
      console.log("You missed! Don't make that mistake again!");
      checkWin();
      break;
  }

} if (Math.random() < AlienShips[i].accuracy) { // this is old alienAttack function
    console.log("You've been hit Arnold! Be careful!");
    arnold.hull = arnold.hull - AlienShips[i].firepower // should output new health in line below in console
    console.log(`You have ${arnold.hull} health`);
    // alert("To keep fighting press OK");
    checkWin();
}
  } if (Math.random() > arnold.accuracy) {
      console.log("The aliens have missed! It's your lucky day..");
       checkWin()

  } 

battle();



// all deleted code that I have caught is here to help me read my code better
// console.log(attack());
// battle all ships or until your hull is at or below 0
// console.log(alienAttack());
// checkWin(); 
// AlienShips.push(AlienShips[0], AlienShips[1], AlienShips[2], AlienShips[3], AlienShips[4], AlienShips[5]); 
// AlienShips.push(ship1, ship2, ship3, ship4, ship5, ship6);  // this should create 6 ships with different attributes into AlienShips 
// AlienShips[i] = new AlienShip();
// console.log(endOfGame);
// alert(keepGoing);