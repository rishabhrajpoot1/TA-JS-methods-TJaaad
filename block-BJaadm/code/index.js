let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array

let peopleName = persons.map((person) => person.name);
console.log(peopleName);

// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade=persons.map((person) => person.grade);
console.log(peopleGrade);

// Create an array peopleSex and store the value of sex key from persons array

let peopleSex=persons.map((person) => person.sex);
console.log(peopleSex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

let filteredName=peopleName.filter(
 n=>n.startsWith('P') ||
 n.startsWith('J'));
console.log(filteredName);

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

let filArray= peopleName.filter(
  l=>(l.startsWith('A')) ||
  (l.startsWith('C'))).length;
console.log(filArray);

// Log all the filtered male ('M') in persons array

console.log(persons.filter(n=>n.sex.includes('M')));

// Log all the filtered female ('F') in persons array

console.log(persons.filter(n=>n.sex.includes('F')));

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

console.log(persons.filter((person)=>person.sex ==='F')
.filter((person)=>  person.name.startsWith('J') || person.name.startsWith('C'))
)

// Log all the even numbers from peopleGrade array

console.log(peopleGrade.filter(num=>num % 2 === 0));

// Find the first name that starts with 'J' in persons array and log the object

console.log(persons.find(n=>n.name.startsWith('J')));

// Find the first name that starts with 'P' in persons array and log the object

console.log(persons.find(n=>n.name.startsWith('P')));

// Find the first name that starts with 'J', grade is greater than 10 and is a female

console.log(persons.find((person)=>
person.name.startsWith('J') && person.sex === 'F' && person.grade > 10))

// Filter all the female from persons array and store in femalePersons array

let femalePersons = persons.filter(n=>n.sex.includes('F'));
console.log(femalePersons);

// Filter all the male from persons array and store in malePersons array

let malePersons = persons.filter(n=>n.sex.includes('M'));
console.log(malePersons);

// Find the sum of all grades and store in gradeTotal

let sum = peopleGrade.reduce((acc, cv)=>{
  acc = acc + cv
  return acc
}, 0)
console.log(sum)

// Find the average grade

let averageGrade = sum / peopleGrade.length
console.log(averageGrade)

// Find the average grade of male

let maleGrade = malePersons.map((person)=>{
  return person.grade
})

let averageOfMaleGrade = maleGrade.reduce((acc, cv)=>{
  acc = acc + cv
  return acc
},0) / maleGrade.length
console.log(averageOfMaleGrade);

// Find the average grade of female

let femaleGrade = femalePersons.map((person)=>{
  return person.grade
})

let averageOfFemaleGrade = femaleGrade.reduce((acc, cv)=>{
  acc = acc + cv
  return acc
},0) / femaleGrade.length
console.log(averageOfFemaleGrade);

// Find the highest grade



// Find the highest grade in male



// Find the highest grade in female



// Find the highest grade for people whose name starts with 'J' or 'P'



// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?



// Sort the peopleGrade in descending order



// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array



// Sort the array peopelName in ascending `ABCD..Za....z`



// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
