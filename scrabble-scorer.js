// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

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
	word = word.toUpperCase();
	let letterPoints = "";

   // variable to sum up total numeric score
   let totalScore = 0;


   for (let i = 0; i < word.length; i++) {
      
      for (const pointValue in oldPointStructure) {
         
         if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`

         totalScore += 1;  // Increment the total score
      }
   }
}
// return letterPoints;
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
   const result = oldScrabbleScorer(word);
   
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
	word = word.toUpperCase();
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
function vowelBonusScorer(){
   
}



// TODO: Use the oldScrabbleScorer() function provided to score the word provided by the user. 
// Print the result to the console.
let scrabbleScorer = oldScrabbleScorer;


const scoringAlgorithms = [];

function scorerPrompt() {}

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
