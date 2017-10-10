
var panel = $("#quiz-area");
var countStartNumber = 30;

// Question set
var questions = [{
  question: "What was the first full length CGI movie?",
  answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
  correctAnswer: "Toy Story",
  image: "assets/images/toystory.gif"
}, {
  question: "Which of these is NOT a name of one of the Spice Girls?",
  answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
  correctAnswer: "Fred Spice",
  image: "assets/images/spicegirls.gif"
}, {
  question: "Which NBA team won the most titles in the 90s?",
  answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
  correctAnswer: "Chicago Bulls",
  image: "assets/images/bulls.gif"
}, {
  question: "Which group released the hit song, 'Smells Like Teen Spirit'?",
  answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
  correctAnswer: "Nirvana",
  image: "assets/images/nirvanabark.gif"
}, {
  question: "Which popular Disney movie featured the song, \"Circle of Life\"?",
  answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
  correctAnswer: "The Lion King",
  image: "assets/images/lionking.gif"
}, {
  question: "Finish this line from the Fresh Prince of Bel-Air theme song: \"I whistled for a cab and when it came near, the license plate said...\"",
  answers: ["Dice", "Mirror", "Fresh", "Cab"],
  correctAnswer: "Fresh",
  image: "assets/images/fresh.gif"
}, {
  question: "What was Doug's best friend's name?",
  answers: ["Skeeter", "Mark", "Zach", "Cody"],
  correctAnswer: "Skeeter",
  image: "assets/images/skeeter.gif"
}, {
  question: "What was the name of the principal at Bayside High in Saved By The Bell?",
  answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
  correctAnswer: "Mr.Belding",
  image: "assets/images/belding.gif"
}];

// Variable to hold our setInterval
var timer;

var game = {

  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    // decrease counter
    
    // update html-div counter-number with counter number
  
    // if counter = 0, call timeUp function

  },

  loadQuestion: function() {
    // set timer using countdown function and setInterval

    // update panel html with the current question

    // iterate through the current question's choices and append a button for each choice
  
  },

  nextQuestion: function() {
    // update game counter back to countStartNumber

    // update html-div with counter number

    // increase the currentQuestion

    // call on loadQuestion function to load the next question

  },

  timeUp: function() {

    // user clearInterval to clear the timer interval

    // update counter-number div with counter
   

    // let user know he is out of time by using the panel div
    // let user know what the correct answer was
    // display image/gif on screen

    // if the questions are up, show the results
    
    // else, go to the next question
  },

  results: function() {

    // clear the timer interval

    // Show the user how they did by appending html to the panel div and 
    // append a start-over button
  },

  clicked: function(e) {
    // clear the timer interval

    // if the target that was clicked has a data-name with the correct answer, run answeredCorrectly function
    
    // else run the answeredIncorrectly function
  },

  answeredIncorrectly: function() {

    // increase the incorrect key value

    // clear the timer interval

    // update the panel div with the correct answer

    // if the questions are up, show the results
    
    // else, go to the next question
  },

  answeredCorrectly: function() {

    // clear the timer interval

    // increase the correct key value

    // let user know they answered the quesiton correctly by filling in the panel div

    // if the questions are up, show the results
    
    // else, go to the next question
    
  },

  reset: function() {
    // reset all values
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};

// CLICK EVENTS

$(document).on("click", "#start-over", function() {
  game.reset();
});

$(document).on("click", ".answer-button", function(e) {
  game.clicked(e);
});

$(document).on("click", "#start", function() {
  $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
  game.loadQuestion();
});
