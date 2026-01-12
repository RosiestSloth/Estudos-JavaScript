// Funções

// function identificador(param opicional) {}

function greet(name) {
    console.log("Seja bem vindo(a)", name);
}

function sum(a, b) { 
    return a+b;
}

function factorial(number) {
    let result = 1;
    for (let i=1; i<= number; i++) {
        result *= i;
    }
    return result;
}

greet("Vinicius");

const result = sum(2, 3);

console.log(result);

// Exemplo 1

console.log(factorial(5));

// Exemplo 2

const sum1 = (a, b) => {
    return a+b;
}

console.log(sum1(2, 3));

// Exemplo 3
// IIFE
// Imediately invoked function expression

((name) => {
    console.log("Seja bem vindo(a)", name);
})("Vinicius");

// Exemplo 4

function createTag(name, prefix, suffix) {
    if (prefix && suffix) {
        return `${prefix}, ${name}, ${suffix}`;
    }
    if (prefix) {
        return `${prefix}, ${name}`;
    }

    return name;
}

const tag = createTag("Vinicius", "[Desenvolvedor]");
console.log(tag);

// Exemplo 5

function pow(number=2, exponencial=2) {
    return number ** exponencial;
}

console.log(pow(4));

// Exemplo 6

function greet1(name, log=false) {
    const text = `Seja bem vindo(a) ${name}`;
    if (log) {
        console.log(text);
        return;
    }
    return text;
}

greeting = greet1("Vinicius");
console.log(greeting.toUpperCase());

greet1("Vinicius", true);