function parimp(n) {
    if (n%2==0) {
        return 'É um número par.'
    } else {
        return 'É um número impar.'
    }
}

function soma(a, b) {
    return a + b
}

function fat(n) {
    f = 1
    for (n; n > 1; n--) {
        f *= n
    }
    return f
}

let v = function(x) {
    return x*2
}


console.log(`3 ${parimp(3)}`)

console.log(`10 + 3 = ${soma(10, 3)}`)

console.log(`O dobro do número 5 é ${v(5)}`)

console.log(`O fatorial de 5 é ${fat(5)}`)
