const pessoa = {
    nome: 'Vinicius',
    idade: 19,
    sexo: 'Masculino',
    peso: 70
};

console.log(pessoa);

for (c in pessoa) {
    console.log(c + ": " + pessoa[c]);
}

pessoa.idade = 20;

console.log(pessoa.idade);
