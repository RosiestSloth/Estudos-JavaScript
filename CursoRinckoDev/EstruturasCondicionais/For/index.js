// Estrutura de repetição For

// for(inicialização, condição, execução) {}

// for (let i=0; i<10; i++) {
//     setTimeout(() => console.log(i), 2000*1);
// };

// Exemplo 1

const fruits = ["maça", "Banana", "laranja", "uva"];

for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// Exemplo 2

const text = "Seja bem vindo a Vianópolis!";
const letter = "a";
let times = 0;

for (const char of text.toLowerCase()) {
    if (char === letter) times++;
}

console.log(`A letra (${letter}) se repete ${times} vezes.`)

