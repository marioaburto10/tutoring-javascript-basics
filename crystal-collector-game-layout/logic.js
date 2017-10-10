// GLOBAL VARIABLES
// =================================================================

// Crystal Variables
var crystal = {
  blue:
  {
    name: "Blue",
    value: 0
  },
  green:
  {
    name: "Green",
    value: 0
  },
  red:
  {
    name: "Red",
    value: 0
  },
  yellow:
  {
    name: "Yellow",
    value: 0
  }
};

// Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;


// FUNCTIONS
// =================================================================

// Helper Function for getting random numbers
var getRandom = function(min, max) {

};

// Starts the Game (and restarts the game)
var startGame = function() {

  // Reset the Current Score

  // Set a new Target Score (between 19 and 120)

  // Set different values for each of the crystals (between 1 and 12)

  // Change the HTML to reflect all of these changes


  // Testing Console

};

// Check if User Won or Lost and Reset the Game
var checkWin = function() {

  // Check if currentScore is larger than targetScore
  

    // Add to Loss Counter
    

    // Change Loss Count HTML
    

    // Restart the game
    
  }

  // else if user wins

    // Add to the Win Counter
   

    // Change Win Count HTML

    // Restart the game
    
  }

};

// Respond to clicks on the crystals
var addValues = function(clickedCrystal) {

  // Change currentScore

  // Change the HTML to reflect changes in currentScore

  // Call the checkWin Function


  // Testing Console
  console.log("Your Score: " + currentScore);
};

// MAIN PROCESS
// =================================================================

// Starts the Game the First Time.


$("#blue").click(function() {
  addValues(crystal.blue);
});

$("#red").click(function() {
  addValues(crystal.red);
});

$("#green").click(function() {
  addValues(crystal.green);
});

$("#yellow").click(function() {
  addValues(crystal.yellow);
});
