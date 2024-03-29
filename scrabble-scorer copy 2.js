// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

// old scrabble point structure
const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};


function oldScrabbleScorer(word) {
   
   word = word.toUpperCase(); // make case insensitive
   let letterPoints = "";

   // variable to sum up total numeric score
   let totalScore = 0;

   for (let i = 0; i < word.length; i++) {

      // note that the object 'key' is pointValue!
      for (const pointValue in oldPointStructure) {
         if (oldPointStructure[pointValue].includes(word[i])) {
            letterPoints += `Points for '${word[i]}': ${pointValue}\n`;

            totalScore += parseInt(pointValue); // Increment the total score
            // totalScore += Number(pointValue); // Increment the total score

            // const points = parseInt(pointValue);  // Convert pointValue to a number
            // totalScore += points;  // Increment numeric score
         }
      }
   }
   // Return object contain letterPoints and totalScore
   return {
      letterPoints: letterPoints,
      totalScore: totalScore
   };
}


// TODO: your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

// TODO:  Modify the provided initialPrompt() function to prompt the user to enter a word to score.

function initialPrompt() {
   let word = input.question("Let's play some scrabble! Enter a word: ");

   // Score input word with oldScrabbleScorer function call
   // const result = oldScrabbleScorer(word);

   // call the selected scorer from the scorerprompt function
   const selectedScorer = scorerPrompt();
   const result = selectedScorer(word);
   // const result = selectedScorer.scoringFunction(word);

   
   // console.log(result);

   // print scoring output
   console.log(result.letterPoints); // Print letterPoints
   
   console.log(`Total Score: ${result.totalScore}`);// Print totalScore

   return result;

};

/*
TASK 2: ADD AND ORGANIZE SCORING ALGORITHMS
Your job here is to write two other scoring algorithms for the Scrabble player.
*/

// TODO: Define a function that takes a word as a parameter and returns a numerical score. 
// Each letter within the word is worth 1 point.

function simpleScorer(word){
	word = word.toUpperCase(); // make case insensitive
	let letterPoints = "";
   // variable to sum up total numeric score
   let totalScore = 0;

   for (let i = 0; i < word.length; i++) {
      letterPoints += `Points for '${word[i]}': 1\n`;
      totalScore += 1;  // Increment the total score
   }
   
   console.log(`Total Score: ${totalScore}`);  // print out total score

   // Return object contain letterPoints and totalScore
   return {
      letterPoints: letterPoints,
      totalScore: totalScore
   };
};


// TODO: Define a function that takes a word as a parameter and returns a score. 
// Each vowel within the word is worth 3 points, and each consonant is worth 1 point.

function vowelBonusScorer(word) {
   word = word.toUpperCase(); // make case insensitive
   let letterPoints = "";

   // variable to sum up total numeric score
   let totalScore = 0;

   for (let i = 0; i < word.length; i++) {

      // Check if letter is a vowel (i.e. 'A', 'E','I', 'O', 'U')
      if ('AEIOU'.includes(word[i])) {
         // If IS a vowel, add 3 points to the letterPoints and totalScore
         letterPoints += `Points for '${word[i]}': 3\n`;
         // Increment numeric total score by 3 points for a vowel
         totalScore += 3;
      }
      // If letter NOT a vowel (i.e. is consonant)
      if (!'AEIOU'.includes(word[i])) {
         // If it's not a vowel, add 1 point to the letterPoints and totalScore
         letterPoints += `Points for '${word[i]}': 1\n`;
         // Increment the total score by 1 point for a consonant
         totalScore += 1;
      }
   }
   // return letterPoints;
   return {
      letterPoints: letterPoints,
      totalScore: totalScore
   };
}


// TODO: Use the oldScrabbleScorer() function provided to score the word provided by the user. 
// Print the result to the console.
let scrabbleScorer = oldScrabbleScorer;


// TODO: Finish writing the scoringAlgorithms array. 
// It should be populated with three objects, 
// one for each of the three scoring options. 
// Each object should contain three keys: name, description, and scoringFunction

const scoringAlgorithms = [
   {
      name: 'Simple Score',
      description: 'Each letter is worth 1 point.',
      scoringFunction: simpleScorer
   }, 
   {
      name: 'Bonus Vowels',
      description: 'Vowels are 3 pts, consonants are 1 pt.',
      scoringFunction: vowelBonusScorer
   }, 
   {
      name: 'Scrabble',
      description: 'The traditional scoring algorithm.',
      scoringFunction: scrabbleScorer
   }
];


// TODO: Finish writing scorerPrompt() so that the user can select which scoring algorithm to use when the program scores their word. 
// scorerPrompt() should return the object the user has selected.
// Use the selected algorithm to determine the score for the word:
/*
If the user enters 0, have the program output a score using the simple scorer.
If the user enters 1, use the vowel bonus scoring function.
If the user enters 2, use the Scrabble scoring option.
scorerPrompt() should return the object the user has selected.
*/

function scorerPrompt() {
   
   console.log('Which scoring algorithm would you like to use?\n');
   for (let i = 0; i < scoringAlgorithms.length; i++){
      console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);
   }
   let selectedAlgorithm = parseInt(input.question('Enter 0, 1, or 2: '));
   const selectedScorer = scoringAlgorithms[selectedAlgorithm].scoringFunction;
   return selectedScorer;
}



function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
}

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
	scorerPrompt: scorerPrompt
};
