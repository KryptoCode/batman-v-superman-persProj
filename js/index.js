var supermanHP = 100;
var batmanHP = 100;
var total = 0;

var randomRoll = function(strength, wit) {
  return Math.floor(Math.random() * strength) + wit;
};

/*fight function handles the random roll for both character variables. 
the random roll is returned by the character who rolled the highest value, 
that value is subtracted from opposing character and added to the total. */
var fight = function() {
  var batman = randomRoll(20, 2);
  var superman = randomRoll(22, 1);
  console.log("Superman hit for " + superman);
  console.log("Batman hit for " + batman);
  if (batman > superman) {
    total += batman;
    supermanHP -= batman;
    console.log("Superman has " + supermanHP + " health Points Left");
  } else {
    total += superman;
    batmanHP -= superman;
    console.log("Batman has " + batmanHP + " health Points Left");
  };

  healthBars(); //calls the Health Bar function to pass the values to be computed against the losing character.
  return total;
};

/*healthBars function handles the graphical status bar that reveals to the player who is losing. 
4 symbols on the character is a loss.
each symbol represents 25% loss. */
function healthBars() {
  var supermanBar = document.getElementById('superHealth').children;
  var batmanBar = document.getElementById('batHealth').children;
  //must refactor, this isn't DRY at all, running two seperate for loops with if else trees. Will revisit.
  for (var i = 0; i <= supermanBar.length; i++) {
    if (supermanHP <= 75 && supermanHP > 50) {
      supermanBar[0].className = "";
    } else if (supermanHP <= 50 && supermanHP > 25) {
      supermanBar[1].className = "";
    } else if (supermanHP <= 25 && supermanHP > 0) {
      supermanBar[2].className = "";
    } else if (supermanHP <= 0) {
      supermanBar[3].className = "";
      console.log("Superman Lost! Game Over.");
      alert("Batman Wins! " + total + " Total Points. Game Over. Start again?"); //display victory with an Alert and display variable total points.
    }
  }
  //second health bar, second for loop and if else tree. Will refactor.
  for (var i = 0; i <= batmanBar.length; i++) {
    if (batmanHP <= 75 && batmanHP > 50) {
      batmanBar[0].className = "";
    } else if (batmanHP <= 50 && batmanHP > 25) {
      batmanBar[1].className = "";
    } else if (batmanHP <= 25 && batmanHP > 0) {
      batmanBar[2].className = "";
    } else if (batmanHP <= 0) {
      batmanBar[3].className = "";
      console.log("Batman Lost! Game Over.");

      alert("Superman Wins! " + total + " Total Points. Game Over. Start again?"); //display victory with an Alert and display variable total points.
    }
  }
};