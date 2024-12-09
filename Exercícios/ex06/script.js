
var valores = []
var flista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var num = document.querySelector('input#num')

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
    
function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        res.innerHTML = ''
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Número ${num.value} adicionado`
        flista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    
    let soma = 0
    if (valores.length <= 0){
        window.alert('Digite valores primeiro!')
    } else {
        res.innerHTML = `Foram adicionados ${valores.length} Números, foram os valores:<br>`
        for (n in valores) {
            res.innerHTML += ` [${valores[n]}]`
            soma += valores[n]
        }

        valores.sort()

        res.innerHTML += `<p>O menor valor digitado é ${valores[0]}</p>`

        res.innerHTML += `<p>O maior valor digitado foi ${valores[valores.length - 1]}</p>`

        res.innerHTML += `<p>A soma dos valores digitados é ${soma}</p>`

        res.innerHTML += `<p>A média dos valores digitados é ${soma/valores.length}</p>`
    }
}
