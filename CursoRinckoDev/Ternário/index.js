// Ternário

// (expressão) ? (se verdadeiro) : (se falso)

// Exemplo 1
const number = 5;
console.log((number%2 === 0) ? "Par":"Ímpar");

const age = 21;
console.log(age >= 18 ? "Maior de idade.": "Menor de idade..");

// Exemplo 2
const learnedJs = true;
const withRincko = false;

console.log(
    learnedJs && withRincko
    ? "Aprendeu JavaScript com o Rincko Dev. "
    : learnedJs ? "Aprendeu JavaScript. " : "Não aprendeu JavaScript. "
);

// Exemplo 3
const bank = 300;
const transferValue = 20;

console.log(
    transferValue < bank
    ? "A transferência pode ser feita. "
    : "A transferência não pode ser feita. "
);

// Exemplo 4

const isAdult = true;

console.log(`Cristiano ${isAdult ? "não " : ""}é criança`)

// Exemplo 5
const hours = 14

console.log(
    "Está de",
    hours >= 0 && hours < 6 ? "madrugada" : 
    hours >= 6 && hours < 12 ? "manhã" :
    hours >= 12 && hours < 18 ? "tarde" : "noite"
);