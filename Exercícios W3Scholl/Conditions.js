
let time = new Date().getHours();

if (time <= 18 ) {
    console.log(`Boa Tarde, Seja bem vindo time: ${time}`);
} else {
    console.log(`Bom dia, Seja bem vindo(a) time: ${time}`);
}

// Ternary Operator

let text = (time < 18) ? "Bom dia" : "Boa Noite";

console.log(text);

/*
    condition	Required.
    The condition to be tested.
    An expression that evaluates to true or false.
    ?	Required.
    The operator separating the condition from the expressions.
    expression1	Required.
    The value to return if the condition is true.
    :	Required.
    The operator separating the expressions.
    expression2	Required.
    The value to return if the condition is false.
*/

// Switch Case

dia = new Date().getDay();

switch (dia) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
}

