function mult() {
    var num = Number(document.getElementById('num').value)
    var txt = document.getElementById('mult')

    txt.innerHTML = 'Tabuada: '

    for (n = 1; n <= 10; n++) {
        txt.innerHTML += `<p>${num} x ${n} = ${num*n}</p>`
    }
}