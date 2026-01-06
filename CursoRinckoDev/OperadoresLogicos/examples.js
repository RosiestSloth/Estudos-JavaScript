// Para o menino sair de casa, ele tem que tomar banho e escovar os dentes.

const takeBath = true;
const brushTeeth = true;

const isReady = takeBath && brushTeeth;

console.log(isReady);

// Para o menino jogar videogame, ele tem que lavar as louças ou fazer o dever de casa.

const washDishes = false;
const doHomework = true;

const canPlay = washDishes || doHomework;

console.log(canPlay);

// Aqui, ele somente poderá sair de casa se tomar o banho e escovar os dentes e lavar as louças ou fazer o dever de casa.
console.log((takeBath && brushTeeth) && (washDishes || doHomework));