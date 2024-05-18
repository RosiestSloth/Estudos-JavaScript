function nacionalidade(){
    var txt = window.document.querySelector('input#nat')
    var res = window.document.querySelector('div#res')
    var pais = String(txt.value)
    res.innerHTML = `Você mora no ${pais}`
    res.innerHTML += `Você mora no ${pais}`
    if (pais == 'Brasil'){
        res.innerHTML += 'Você é Brasileiro!'
    } else {
        res.innerHTML += 'Você é Extrangeiro!'
    }
}