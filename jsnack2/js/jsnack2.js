const numbers = [];

const myArray = Math.floor(Math.random() * 10) + 1;

for (let i = 0; i < myArray; i++) {
  const randomNumber = Math.floor(Math.random() * 50) + 1;
  numbers.push(randomNumber);
}
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    document.getElementById("pari").innerHTML += `<p>${numbers[i]}</p>`;
  } else {
    document.getElementById("dispari").innerHTML += `<p>${numbers[i]}</p>`;
  }
}
