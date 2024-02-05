function scorerPrompt() {
    console.log('Which scoring algorithm would you like to use?\n');
    
    // Iterate over each algorithm in scoringAlgorithms array
    for (let i = 0; i < scoringAlgorithms.length; i++){
        console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);
    }
    
    let selectedAlgorithm;
    
    // Keep prompting until the user enters a valid choice (0, 1, or 2)
    do {
        
        // Prompt user choice (0, 1, or 2) and convert input to an integer
        
        selectedAlgorithm = parseInt(input.question('Enter 0, 1, or 2: '));
        
        // Check if the entered choice is invalid
        if (isNaN(selectedAlgorithm) || selectedAlgorithm < 0 || selectedAlgorithm >= scoringAlgorithms.length) {
            console.log('Invalid choice. Please enter 0, 1, or 2.');
        }
    } while (isNaN(selectedAlgorithm) || selectedAlgorithm < 0 || selectedAlgorithm >= scoringAlgorithms.length);
    
    // Retrieve the scoring function based on the user's choice
    const selectedScorer = scoringAlgorithms[selectedAlgorithm].scorerFunction;
    
    // Return the selected scoring function
    return selectedScorer;
}

// yml workflow added
// function scrabbleScorer(){
    
//     word = word.toUpperCase(); // make case insensitive
//     let letterPoints = "";
    
//     // variable to sum up total numeric score
//     let totalScore = 0;
    
    
//     for (let i = 0; i < word.length; i++) {
        
//         // note that the object 'key' is letter!
//         for (const letter in newPointStructure) {
//             if (newPointStructure.includes(word[i])) {
//                 letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
                
//                 totalScore += parseInt(pointValue); // Increment the total score
            
//             }
//         }
//     }
//     // Return object contain letterPoints and totalScore
//     return {
//        letterPoints: letterPoints,
//        totalScore: totalScore
//     };
//  }



// // old scrabble point structure
// const oldPointStructure = {
//     1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
//     2: ['D', 'G'],
//     3: ['B', 'C', 'M', 'P'],
//     4: ['F', 'H', 'V', 'W', 'Y'],
//     5: ['K'],
//     8: ['J', 'X'],
//     10: ['Q', 'Z']
// };

// function transform() {
//     const newPointStructure = {}
    
//     for (const key in oldPointStructure){
//         const letters = oldPointStructure[key];
        
//         for (const letter of letters){
//         // for (const letter in letters){
//             newPointStructure[letter.toLowerCase()] = parseInt(key);
//         }
//     }return newPointStructure;
// };

// let newPointStructure = transform(oldPointStructure);

// console.log(newPointStructure);

// // var input = {
// //     'person1.name': 'John',
// //     'person1.address.street': 'main street',
// //     'person1.address.zipcode': 12345,
// //     'person2.name': 'Smith',
// //     'person2.address.street': 'major street',
// //     'person2.address.zipcode': 12345
// // }

// // var output = {};

// // for (let prop in input) {
// //     _.set(output, prop, input[prop]);
// // }

// // console.log(output);




// // const scoringAlgorithms = [
// //     {
// //         name: 'Simple Score',
// //         description: 'Each letter is worth 1 point.',
// //         scoringFunction: 'simpleScorer'
// //     }, 
// //     {
// //         name: 'Bonus Vowels',
// //         description: 'Vowels are 3 pts, consonants are 1 pt.',
// //         scoringFunction: 'vowelBonusScorer'
// //     }, 
// //     {
// //         name: 'Scrabble',
// //         description: 'The traditional scoring algorithm.',
// //         scoringFunction: 'scrabbleScorer'
// //     }
// // ];






// // console.log('Which scoring algorithm would you like to use?\n');
// // for (let i = 0; i < scoringAlgorithms.length; i++){
// //     console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);
// //     // let selectedAlgorithm = parseInt(input.question('Enter 0, 1, or 2: '));
// //     // const selectedScorer = scoringAlgorithms[selectedAlgorithm].scoringFunction;
// //     }


