var pessoas = {nome:'Vinicius', 
    Idade:19, 
    Sexo:'Masculino', 
    peso:70,
    engordar(p=0){ 
        this.peso += p
        console.log('Engordou')
        console.log(`O peso agora é de ${pessoas.peso}`)
}}

console.log(pessoas.nome, pessoas.engordar(2))