const x = 10;

var y = 20; //This variable dont have block scope

let z = 30; //Let and const have block scope

console.log(x);



{
    const x = 20;
    console.log(x);

    let z = 40;

    console.log(y); //Here we can access the variable y outside the block

    console.log(z); //Here we can access the variable z inside the block
}

console.log(z); //Here we can access the variable z outside the block