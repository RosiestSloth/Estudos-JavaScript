// Estrutura condicional id

// if (expressão) {}

{
    let temperature = 30;

    if (temperature >= 30) {
        console.log("Está muito quente lá fora!");
    } else {
        console.log("A temperatura está agradável.");
    };
}

// Exemplo 1
{
    let grade = 7.5;

    if (grade >= 9) {
        console.log("Aprovado!");
    } else if (grade >= 7) {
        console.log("Aprovado na média!");
    } else {
        console.log("Reprovado. Estude mais da próxima vez.");
    };
}

// Exemplo 2

{
    const sideA = 1;
    const sideB = 2;
    const sideC = 3;

    if (sideA === sideB && sideB === sideC) {
        console.log("O triângulo é equilátero.");
    } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
        console.log("O triângulo é isóceles.");
    } else {
        console.log("O triânguo é escaleno.")
    }
}

// Exemplo 3

// {
//     const rl = require("node:readline");

//     const prompt = rl.createInterface({
//         input: process.stdin, output: process.stdout
//     });

//     prompt.question("Digite sua idade: ", answer => {
//         const age = Number.parseInt(answer);

//         if (Number.isNaN(age)) {
//             console.log("O que você digitou não é um número válido!");
//         } else {
//             console.log(`Sua idade é ${age}`);
//             console.log(`Daqui 4 anos você terá ${age+4}`);
//             console.log(`Daqui 10 anos você tera ${age+10}`);
//             console.log(`Daqui 25 anos você terá ${age+25}`);
//         }
//     });
//     prompt.close();
// }

// Exemplo 3

// {
//     const rl = require("node:readline");

//     const prompt = rl.createInterface({
//         input: process.stdin, output: process.stdout
//     });

//     let bank = 3000;
//     console.log(`Valor total no banco ${bank}`);
//     prompt.question("Digite o valor que deseja transferir: ", answer => {
//         const amount = Number.parseInt(answer);
//         if (Number.isNaN(amount)) {
//             console.log("Você precisa digitar um valor válido.");
//         } else if (amount > bank) {
//             console.log("Você não tem saldo suficiente.");
//         } else if (amount <= 0) {
//             console.log(" O valor deve ser um número positivo");
//         } else {
//             bank -= amount;
//             console.log(`Você transferiu R$${amount}`);
//             console.log(`Seu saldo atual é de R$${bank}`);
//         }
//     });
//     prompt.close();
// }

// Exemplo 4

const performance = "ótimo";
const baseSalary = 50000;
let bonus = 0;

if (performance === "ótimo") {
    bonus = baseSalary * 0.2;
} else if (performance === "muito bom") {
    bonus = baseSalary * 0.15;
} else if (performance === "bom") {
    bonus = baseSalary * 0.1;
} else if (performance === "regular") {
    bonus = baseSalary * 0.05;
} else {
    console.log("Desempenho não reconhecido. Sem bonus.");
};

console.log(`Bonus calculado: ${bonus.toFixed(2)}`);