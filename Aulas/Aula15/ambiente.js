let num = [5, 8, 2, 9, 3]

//A sexta posição recebe o valor 6
num[5] = 6

//Adiciona o valor 7 na ultima posição do array
num.push(7)
console.log(`Nosso vetor é o ${num}`)
console.log(`A quantidade de números é ${num.length}`)

//sorteia os números dentro do Array
num.sort()
console.log(`Os números sorteados é ${num}`)


console.log('O número sem formatação é:')

//função for(var, condição, param) para iterar sobre o array
for (let pos=0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//Forma simplificada de iterar sobre arrays
for (x in num) {
    console.log(`A posição ${x} tem o valor ${num[x]}`)
}

// Procura o valor 7 dentro o Array
console.log(num.indexOf(7))
