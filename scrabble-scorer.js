// last functional = copy 3
// This assignment is inspired by a problem on Exorcism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system.

const input = require("readline-sync");

// old scrabble point structure
const oldPointStructure = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

function oldScrabbleScorer(word) {
  word = word.toUpperCase(); // make case insensitive

  let letterPoints = ""; // empty string store letter points data
  let score = 0; // variable to sum up total numeric score

  // iterate over each letter in word
  for (let i = 0; i < word.length; i++) {
    // iterate over each key in oldPointStructure object
    // note that the object 'key' is pointValue!
    for (const pointValue in oldPointStructure) {
      // Check current letter is in the array with the current pointValue (i.e. key)
      if (oldPointStructure[pointValue].includes(word[i])) {
        // temp literal match the letter with the key, pointValue
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`;

        // increment score adding current pointValue (parsed as integer)
        score += parseInt(pointValue); // Increment the total score
      }
    }
  }
  // returns a numerical 'score', i.e. integer value
  return score;
}

// TODO: your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

// TODO:  Modify the provided initialPrompt() function to prompt the user to enter a word to score.

// function initialPrompt() {
//    // initialize word to readline-sync prompt for a word to play Scrabble
//    let word = input.question("Let's play some scrabble! Enter a word: ");

//    // scorerPrompt function call for choice of scorer
//    const selectedScorer = scorerPrompt();
//    // selected scorer calculates score for input word
//    const result = selectedScorer(word);

//    // template literal output numeric score to console
//    console.log(`Total Score: ${result}`);// Print totalScore

//    // return result
//    return result;

// };

function initialPrompt() {
  let word = validateWord(
    input.question("Let's play some scrabble! Enter a word: ")
  );
  const selectedScorer = scorerPrompt();
  const result = selectedScorer(word);
  console.log(`Total Score: ${result}`);
  return result;
}

function validateWord(word) {
  while (!isValidWord(word)) {
    console.log("Invalid input! Please enter a word containing only letters.");
    word = input.question("Let's play some scrabble! Enter a word: ");
  }
  return word;
}

function isValidWord(word) {
  return /^[a-zA-Z]+$/.test(word); // Check if the word contains only letters
}

/*
TASK 2: ADD AND ORGANIZE SCORING ALGORITHMS
Your job here is to write two other scoring algorithms for the Scrabble player.
*/

// TODO: Define a function 'simpleScorer' that takes a word as a parameter and returns a numerical score.
// Each letter within the word is worth 1 point.

function simpleScorer(word) {
  word = word.toUpperCase(); // make case insensitive

  let letterPoints = ""; // empty string store letter points data
  let score = 0; // variable to sum up total numeric score

  // iterate over each letter in word
  for (let i = 0; i < word.length; i++) {
    // temp literal match the letter with the 1 point
    letterPoints += `Points for '${word[i]}': 1\n`;
    score += 1; // Increment the total score
  }
  // returns a numerical 'score', i.e. integer value
  return score;
}

// MARK GENIUS!!!! consider for simplescorer just use word.length for score!!!

// TODO: Define a function 'vowelBonusScorer' that takes a word as a parameter and returns a score.
// Each vowel within the word is worth 3 points, and each consonant is worth 1 point.

function vowelBonusScorer(word) {
  word = word.toUpperCase(); // make case insensitive

  let letterPoints = ""; // empty string store letter points data
  let score = 0; // variable to sum up total numeric score

  // iterate over each letter in word
  for (let i = 0; i < word.length; i++) {
    // Check if letter is a vowel (i.e. 'A', 'E','I', 'O', 'U')
    if ("AEIOU".includes(word[i])) {
      // If IS a vowel, add 3 points to the letterPoints and totalScore
      letterPoints += `Points for '${word[i]}': 3\n`;

      score += 3; // Increment the total score
    }
    // If letter NOT a vowel (i.e. is consonant)
    if (!"AEIOU".includes(word[i])) {
      // If it's not a vowel, add 1 point to the letterPoints and totalScore
      letterPoints += `Points for '${word[i]}': 1\n`;

      score += 1; // Increment the total score
    }
  }
  // returns a numerical 'score', i.e. integer value
  return score;
}
// consider switch if AEIOU 3 point otherwise just 1point

// TODO: Use the oldScrabbleScorer() function provided to score the word provided by the user.
// Print the result to the console.
// let scrabbleScorer = oldScrabbleScorer;

// TODO: Use newPointStructure, to finish writing scrabbleScorer() function
// replace the oldScrabbleScorer() function in scoringAlgorithms with this new function.
// function scrabbleScorer(word) {
//    word = word.toLowerCase(); // make case insensitive - to LOWER case to match transformer

//    let letterPoints = ""; // empty string store letter points data
//    let score = 0;// variable to sum up total numeric score

//    // iterate over each letter in word
//    for (let i = 0; i < word.length; i++) {

//       // retrieve current letter
//       const letter = word[i];

//       // check if letter exists in newPointStructure
//       if (newPointStructure.hasOwnProperty(letter)) {
//          // retrieve point value for the letter
//          const pointValue = newPointStructure[letter];

//          // temp literal match the letter with pointValue
//          letterPoints += `Points for '${letter}': ${pointValue}\n`;

//          score += pointValue;  // Increment the total score
//       }
//    }
//    // returns a numerical 'score', i.e. integer value
//    return score;
// }

function scrabbleScorer(word) {
  // make case insensitive - to LOWER case to match transformer
  word = word.toLowerCase();

  let score = 0; // variable to sum up total numeric score

  // Iterate each letter in word with for...of loop
  for (let letter of word) {
    // Retrieve point value of letter from newPointStructure and add to score
    score += newPointStructure[letter];
  }
  // returns a numerical 'score', i.e. integer value
  return score;
}

// TODO: Finish writing the scoringAlgorithms array.
// It should be populated with three objects,
// one for each of the three scoring options.
// Each object should contain three keys: name, description, and scoringFunction

const simpleScorerAlgorithm = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scorerFunction: simpleScorer,
};

const vowelBonusScorerAlgorithm = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scorerFunction: vowelBonusScorer,
};

const scrabbleScorerAlgorithm = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scorerFunction: scrabbleScorer,
};

const scoringAlgorithms = [
  simpleScorerAlgorithm,
  vowelBonusScorerAlgorithm,
  scrabbleScorerAlgorithm,
];

// TODO: Finish writing scorerPrompt() so that the user can select which scoring algorithm to use when the program scores their word.
// function prompts user to select scoring algorithm
// scorerPrompt() retrieves user selected object (i.e. an element in the algorithms array).
//  - user enters 0, scorerPrompt returns the simple scorer.
//  - user enters 1, scorerPrompt returns the vowel bonus scorer.
//  - user enters 2, scorerPrompt returns the Scrabble scorer.
// TODO: EXCEPTION HANDLING if user enters NaN or <0 or > 2 indicates
// using 'DIW' syntax do{ if(){}}while();
//  - indicates invalid response
//  - re-prompts until valid response input

// function scorerPrompt() {
//    console.log('Which scoring algorithm would you like to use?\n');

//    // iterate each algorithm of scoringAlgorithms array
//    for (let i = 0; i < scoringAlgorithms.length; i++){
//       console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);
//    }

//    let selectedAlgorithm;

//    // continue prompt until valid choice (0, 1, or 2) is input
//    do {
//       // readline-sync prompt input (0, 1, or 2) convert input str to integer
//       selectedAlgorithm = parseInt(input.question('Enter 0, 1, or 2: '));

//       // check choice validity
//       if (isNaN(selectedAlgorithm) || selectedAlgorithm < 0 || selectedAlgorithm >= scoringAlgorithms.length) {
//          console.log('Invalid choice. Please enter 0, 1, or 2.');
//       }
//    } while (isNaN(selectedAlgorithm) || selectedAlgorithm < 0 || selectedAlgorithm >= scoringAlgorithms.length);

//    // retrieve scoring function with valid input choice
//    const selectedScorer = scoringAlgorithms[selectedAlgorithm].scorerFunction;

//    // return scoring function
//    return selectedScorer;
// }

// Function to prompt the user to select a scoring algorithm
function scorerPrompt() {
  console.log("Which scoring algorithm would you like to use?\n");

  // Display each algorithm in the scoringAlgorithms array
  for (let i = 0; i < scoringAlgorithms.length; i++) {
    console.log(
      `${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`
    );
  }

  // Get the user's input and validate it
  const validChoice = checkValidity(input.question("Enter 0, 1, or 2: ")); // call checkValidity parameter readline-sync prompt input (0, 1, or 2)
  // returns integer choice

  // Retrieve the selected scoring function
  const selectedScorer = retrieveAlgorithm(validChoice); // call retrieveAlgorithm() parameter validchoice
  // returns selected scoringFunction

  // Return the selected scoring function
  return selectedScorer;
}

// function checkValidity of the user input
function checkValidity(input) {
  let choice;

  // Continue prompting until a valid choice (0, 1, or 2) is input
  do {
    // Convert input string to integer
    choice = parseInt(input);

    // Check is input valid
    if (isNaN(choice) || choice < 0 || choice >= scoringAlgorithms.length) {
      console.log("Invalid choice. Please enter 0, 1, or 2.");
      break; // Exit the loop if choice is invalid
    }
  } while (isNaN(choice) || choice < 0 || choice >= scoringAlgorithms.length);

  // return choice as integer
  return choice;
}

// Function to retrieve the selected algorithm
function retrieveAlgorithm(validChoice) {
  // Retrieve the selected scoring function based on user's validchoice
  const scoringFunction = scoringAlgorithms[validChoice].scorerFunction;

  return scoringFunction;
}

// TASK 3: TRANSFORM SCRABBLE SCORING
// TODO: function transform takes oldPointStructure to make new point structure //

function transform() {
  const newPointStructure = {}; // empty object for new point structure

  // iterate each key (i.e. point values) in the old point structure
  for (const key in oldPointStructure) {
    // retrieve array of letters for current key/point value
    const letters = oldPointStructure[key];

    // iterate over each letter in the array
    for (const letter of letters) {
      // assign point value (integer) to lowercase letter in new point structure
      newPointStructure[letter.toLowerCase()] = parseInt(key);
    }
  }
  // return the new point structure
  return newPointStructure;
}

// TODO: Locate the newPointStructure object in the starter code and set it equal to transform(oldPointStructure).
let newPointStructure = transform(oldPointStructure);

function runProgram() {
  initialPrompt();
}

/*
initialPrompt();  // for use with debugger only
*/

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScorer: simpleScorer,
  vowelBonusScorer: vowelBonusScorer,
  scrabbleScorer: scrabbleScorer,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt,
};
