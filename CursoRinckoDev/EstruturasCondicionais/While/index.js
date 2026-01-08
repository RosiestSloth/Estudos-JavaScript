// Estrutura de repetição While

// While (condição) {}

let count = 10;

while(count > 0) {
    console.log(count);
    count--;
}

// Exemplo 1

const x = 20;
let playerX = 0;

while(playerX < x) {
    console.log(" Pessoa ".padStart(playerX, "."));
    playerX++;
}

// Exemplo 2

let current;
let times = 0;
const expected = 8;

while(current !== expected) {
    current = Math.floor(Math.random() * (50+1));
    console.log(current);
    times++;
}

console.log("Foram executadas:", times, "vezes");

// Exemplo 3

let count1 = 0;

while(count1 <= 20) {
    if (count1 === 8) {
        break; // Sai do loop
    }
    console.log(count1);
    count1++;
}

// Exemplo 4

let count2 = 0;

while(count2 <= 20) {
    count2++;

    if (count2%2 == 0) {
        console.log(count2, "é par.");
        continue; // Recomeça o loop
    }

    console.log(count2, "não é par.");
}