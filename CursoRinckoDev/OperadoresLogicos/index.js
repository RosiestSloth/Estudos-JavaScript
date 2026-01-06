// Operadores Lógicos

// && E (And)
// || Ou (OR)
// ! Não (Not)

console.table([
    ["Bolo", "Pizza", true],
    ['X', "Pizza", false]
    ["Bolo", "X", false],
    ["X", "X", false],
])

const cake = true;
const pizza = false;

console.log(cake && pizza);

console.log(cake || pizza);

const isOpen = true;

console.log(!isOpen);