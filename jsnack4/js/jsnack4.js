const numbersOne = [];
const numbersTwo = [];

const myArrayOne = Math.floor(Math.random() * 10) + 1;
const myArrayTwo = Math.floor(Math.random() * 10) + 1;

for (let i = 0; i < myArrayOne; i++) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  numbersOne.push(randomNumber);
}
for (let i = 0; i < myArrayTwo; i++) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  numbersTwo.push(randomNumber);
}

console.log(numbersOne);
console.log(numbersTwo);

let totalArrayLength = numbersOne.length + numbersTwo.length;
let differenceArrayLength = Math.abs(numbersOne.length - numbersTwo.length);

if (totalArrayLength % 2 == 0) {
  for (let i = 0; i < differenceArrayLength; i++) {
    if (numbersOne.length < numbersTwo.length) {
      numbersOne.push(numbersTwo[0]);
      numbersTwo.shift();
    } else if (numbersTwo.length < numbersOne.length) {
      numbersTwo.push(numbersOne[0]);
      numbersOne.shift();
    } else {
      console.log(`Compito eseguito`);
    }
  }
} else {
  console.log(`Impossibile eseguire il compito`);
}

console.log(numbersOne);
console.log(numbersTwo);
