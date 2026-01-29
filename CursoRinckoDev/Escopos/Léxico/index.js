// Escopos

// Escopo Léxico

const myName = "Vinicius";

function main() {
    let number = 1;
    const myName = "Matheus";

    function secondary() {
        console.log(number);
        console.log(myName)
    }
    secondary();
}

main();