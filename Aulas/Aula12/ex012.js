var hora = new Date().getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa noite')
}