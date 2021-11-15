let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function  longestWord (words){
  return [...words]
  .sort((a,b)=> a.length - b.length)
  .pop();
}
console.log(longestWord(words));

// - Convert the above array "words" into an array of length of word instead of word.

let wordLenght = (words.map(word=> word.length));
console.log (wordLenght);
// - Create a new array that only contains word with atleast one vowel.
let oneVowel= words.filter(word=>{
  if( word.includes('a')||
      word.includes('e')||
      word.includes('i')||
      word.includes('o')||
      word.includes('u')
  ){
    return true;
  }else{
    return false;
  }});
console.log(oneVowel);
// - Find the index of the word "rhythm"

let index= words.indexOf('rhythm');
console.log(index);

// - Create a new array that contians words not starting with vowel.

let notStartWithVowel=words.filter(word=>{
  if( !word.startsWith('a') &&
   !word.startsWith('e') &&
   !word.startsWith('i') &&
   !word.startsWith('o') &&
   !word.startsWith('u')
  ){
    return true;
  }else{
    return false;
  }});
  console.log(notStartWithVowel);

// - Create a new array that contianse words not ending with vowel

let notEndWithVowel=words.filter(word=>{
  if( !word.endsWith('a') &&
   !word.endsWith('e') &&
   !word.endsWith('i') &&
   !word.endsWith('o') &&
   !word.endsWith('u')
  ){
    return true;
  }else{
    return false;
  }});
  console.log(notEndWithVowel);


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

function sumArray (arr){
  return arr.reduce((acc,cu) => { 
    acc + cu;
    return acc;
  },0)
}
console.log(sumArray(numbers));
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

let multipliedByThree = ((num) => {
  return  num % 3 ===0;
})
console.log(numbers.filter(multipliedByThree));

// - Create a new array that contains only even numbers

let isEven = ((num) => {
  return  num % 2 ===0;
})
console.log(numbers.filter(isEven));

// - Create  a new array that contains only odd numbers.

let isOdd = ((num) => {
  return  num % 2 !==0;
})
console.log(numbers.filter(isOdd));

// - Create a new array that should have true for even number and false for odd numbers.

let isEvenTrue = ((num)=> {
  if(num % 2 === 0){
    return true
  } if(num % 2 !==0){
    return false
  }
})
console.log(numbers.map(isEvenTrue));

// - Sort the above number in assending order.

let sortNumber = ((a,b)=>{
  return a-b
  })
  console.log(numbers.sort(sortNumber));

// - Does sort mutate the original array?

console.log(numbers);

// - Find the sum of the numbers in the array.

let add = ((accu, cu)=>{
 return accu + cu
})
console.log(numbers.reduce(add));

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers (array){
  return (
   array.reduce((acc,cv) => {
   acc +cv;
   return acc;
  },0) / array.length
  )
};

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(arr) {
  let sum = arr.reduce((acc, word) => {
      acc = acc + word.length;
      return acc;
  }, 0);
  return sum / arr.length
} 
console.log(averageWordLength(strings));
