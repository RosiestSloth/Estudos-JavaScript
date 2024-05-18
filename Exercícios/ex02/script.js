function verificar() {
    var data = new Date().getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > data) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = data - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/menina.jpeg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-menina.jpeg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher.jpeg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosa.jpeg')
            }
        } else if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/menino.jpeg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-menino.jpeg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem.jpeg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        img.style.borderRadius = '10px'
        img.style.boxShadow = '5px 5px 5px rgba(94, 94, 94, 0.603)'
    }
}