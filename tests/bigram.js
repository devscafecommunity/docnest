// function generateBigrams(text) {
//     const words = text.split(" ");
//     const bigrams = [];
    
//     for (let i = 0; i < words.length - 1; i++) {
//         const bigram = [words[i], words[i + 1]];
//         bigrams.push(bigram);
//     }
    
//     return bigrams;
// }

// function countBigrams(text) {
//     const bigrams = generateBigrams(text);
//     const bigramCounts = {};
    
//     bigrams.forEach(bigram => {
//         const key = bigram.join(" ");
//         if (bigramCounts[key]) {
//             bigramCounts[key]++;
//         } else {
//             bigramCounts[key] = 1;
//         }
//     });
    
//     return bigramCounts;
// }

// // Exemplo de uso:
// const inputText = "O rato roeu a roupa do rei de roma";
// const bigrams = generateBigrams(inputText);
// console.log("Bigramas gerados:", bigrams);

// const bigramCounts = countBigrams(inputText);
// console.log("Contagem de bigramas:", bigramCounts);


// function generateTrigrams(text) {
//     const words = text.split(" ");
//     const trigrams = [];
    
//     for (let i = 0; i < words.length - 2; i++) {
//         const trigram = [words[i], words[i + 1], words[i + 2]];
//         trigrams.push(trigram);
//     }
    
//     return trigrams;
// }

// function predictNextWord(text, previousWord1, previousWord2) {
//     const trigrams = generateTrigrams(text);
//     const possibleNextWords = {};
    
//     trigrams.forEach(trigram => {
//         if (trigram[0] === previousWord1 && trigram[1] === previousWord2) {
//             const nextWord = trigram[2];
//             if (possibleNextWords[nextWord]) {
//                 possibleNextWords[nextWord]++;
//             } else {
//                 possibleNextWords[nextWord] = 1;
//             }
//         }
//     });
    
//     let maxCount = 0;
//     let predictedWord = null;
    
//     for (const word in possibleNextWords) {
//         if (possibleNextWords[word] > maxCount) {
//             maxCount = possibleNextWords[word];
//             predictedWord = word;
//         }
//     }
    
//     return predictedWord;
// }

// // Exemplo de uso:
// const inputText = "O rato roeu a roupa do rei de roma";
// const previousWord1 = "roupa";
// const previousWord2 = "do";
// const predictedWord = predictNextWord(inputText, previousWord1, previousWord2);
// console.log(predictedWord)