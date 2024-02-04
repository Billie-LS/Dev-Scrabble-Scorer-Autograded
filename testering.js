

const scoringAlgorithms = [
    {
        name: 'Simple Score',
        description: 'Each letter is worth 1 point.',
        scoringFunction: 'simpleScorer'
    }, 
    {
        name: 'Bonus Vowels',
        description: 'Vowels are 3 pts, consonants are 1 pt.',
        scoringFunction: 'vowelBonusScorer'
    }, 
    {
        name: 'Scrabble',
        description: 'The traditional scoring algorithm.',
        scoringFunction: 'scrabbleScorer'
    }
];






console.log('Which scoring algorithm would you like to use?\n');
for (let i = 0; i < scoringAlgorithms.length; i++){
    console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);
    // let selectedAlgorithm = parseInt(input.question('Enter 0, 1, or 2: '));
    // const selectedScorer = scoringAlgorithms[selectedAlgorithm].scoringFunction;
    }


