const numbers = [];

const myArray = Math.floor(Math.random() * 10) + 1;

for (let i = 0; i < myArray; i++) {
  const randomNumber = Math.floor(Math.random() * 50) + 1;
  numbers.push(randomNumber);
}
console.log(numbers);

let somma = 0;

for (let i = 0; i < numbers.length; i++) {
  if (i % 2 != 0) {
    somma = somma + numbers[i];
  }
}

console.log(`La somma è:`, somma);
