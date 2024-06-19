function contar() {

    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)
    var pass = Number(document.getElementById('passo').value)
    var res = document.getElementById('result')

    res.innerHTML = '<p>Contando: </p>'

    if (pass == 0){

        alert('Impossível calcular. Insira um valor válido')

    } else if (num2 < num1) {

        while (num1 >= num2) {
            res.innerHTML += `${num1} 👉 `
            num1 -= pass
        }

        res.innerHTML += '🏁'

    } else if (num1 <=0 || num1 >= 0) {

        while (num1 <= num2) {
            res.innerHTML += `${num1} 👉 `
            num1 += pass
        }

        res.innerHTML += '🏁'

    }
}