var hora =  new Date().getHours()
var minutos = new Date().getMinutes()

var txt = document.getElementById('hora')

var imagem = document.getElementById('imagem')

var foto = document.getElementById('foto')


if (hora <= 12) {
    txt.innerHTML = `Agora são ${hora}:${minutos}! <p>Bom Dia!</p>`
    foto.src = 'imagens/manhã.jpeg'
} else if (hora <= 17) {
    txt.innerHTML = `Agora são ${hora}:${minutos}! <p>Boa Tarde!</p>`
    document.body.style.background = '#F29F05'
    foto.src = 'imagens/tarde.jpeg'
} else {
    txt.innerHTML = `Agora são ${hora}:${minutos}! <p>Boa Noite</p>`
    document.body.style.background = '#010326'
    foto.src = 'imagens/noite.jpeg'
}