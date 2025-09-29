let cars = ["Fiat", "Corola", "Celta", "Palio", "Fusca"];
let text = "";

// For Simples em JS
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + " <br> ";
}

console.log(text);

// While Loop

i = 0;
text = "";
while (i <= 10) {
    text += `The number is ${i}\n`;
    i++;
}

console.log("-=-=-=-=-=");

console.log(text);

// Do While

i = 0;
do {
    console.log("Seja bem vindo");
    i++;
} while(i<=2);

// Exêmplos de for

console.log("-=-=-=-=-=");

i = 0

for (; i <= 3; i++) {
    console.log("Olá, seja bem vindo");
}

// Exêmplos de While

i = 0
text = "";

while (i < 10) {
    text += `The number is ${i} \n`
    i += 2;
}

console.log("-=-=-=-=-=");

console.log(text);

// Continue

text = "";

loop1: for (let j = 1; j < 5; j++) {
    loop2: for (let i = 1; i < 5; i++) {
        if (i===3) { continue loop2; };
        text += i + "\n";
    }
}

console.log(text);