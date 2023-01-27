const risultati = ["W", "W", "L", "X", "X", "W", "L", "X"];

let sommaW = 0;
let sommaX = 0;
let sommaL = 0;

for (let i = 0; i < risultati.length; i++) {
  if (risultati[i] == "W") {
    sommaW++;
  } else if (risultati[i] == "X") {
    sommaX++;
  } else if (risultati[i] == "L") {
    sommaL++;
  }
}

document.getElementById(
  "risultati"
).innerHTML = `<p>Vittorie: ${sommaW}</p><p>Pareggi: ${sommaX}</p><p>Sconfitte: ${sommaL}</p>`;
