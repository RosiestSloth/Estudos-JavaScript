// Estrutura condicional Switch Case

// switch(valor) {
//     case: "Esperado": {

//         break;
//     }
// }

const animal = "gato";

switch(animal) {
    case "gato": {
        console.log("miau");
        break;
    } 
    case "galinha": {
        console.log("Cocorico");
        break;
    }
    case "cachorro": {
        console.log("Au Au");
        break;
    }
    case "pássaro": {
        console.log("Bem-te-vi");
        break;
    }
}
console.log("Emitiu um som.");

// Exemplo 1
const stuff = "gato";

switch(stuff) {
    case "pizza":
    case "bolo":
    case "pastel": {
        console.log("Comida");
        break;
    }
    case "pato":
    case "gato":
    case "vaca": {
        console.log("animal");
        break;
    }
    default: {
        console.log("Não listado.")
    }
}

const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
});

console.log("Bem vindo ao programa");

console.log("[1] Data atual");
console.log("[2] Horário atual");
console.log("[3] Ver animais");
console.log("[4] Ver comidas");
console.log("[0] Sair");

prompt.question("Selecione o que deseja fazer: ", answer => {
    switch(answer) {
        case "1": {
            const date = new Date();
            const day = date.getDay();
            const month = date.getMonth()+1;
            const year = date.getFullYear()

            console.log(`Hoje é ${day}/${month}/${year}`);
            break;
        }
        case "2": {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();

            console.log(`São exatamente ${hours}:${minutes}`);
            break;
        }
        case "3": {
            console.log("Galinha");
            console.log("Vaca");
            console.log("Gato");
            console.log("Cachorro");
            break;
        }
        case "4": {
            console.log("Pizza");
            console.log("Bolo");
            console.log("Guacamole");
            console.log("Doritos");
            break;
        }
        default:
            console.log("Fim do programa.")
    }
    prompt.close();
})