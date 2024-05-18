function calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`
    if (vel > 60){
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade!</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}