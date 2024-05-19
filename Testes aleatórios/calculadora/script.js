num = ''
String(num)
num1 = 1
result = ''

function s1() {
    num += '1'
    document.getElementById('result').innerHTML = `${num}`
}

function s2() {
    num += '2'
    document.getElementById('result').innerHTML = `${num}`
}

function s3() {
    num += '3'
    document.getElementById('result').innerHTML = `${num}`
}

function s4() {
    num += '4'
    document.getElementById('result').innerHTML = `${num}`
}

function s5() {
    num += '5'
    document.getElementById('result').innerHTML = `${num}`
}

function s6() {
    num += '6'
    document.getElementById('result').innerHTML = `${num}`
}

function s7() {
    num += '7'
    document.getElementById('result').innerHTML = `${num}`
}

function s8() {
    num += '8'
    document.getElementById('result').innerHTML = `${num}`
}

function s9() {
    num += '9'
    document.getElementById('result').innerHTML = `${num}`
}

function s0() {
    num += '0'
    document.getElementById('result').innerHTML = `${num}`
}

function mult() {
    num1 = num
    res = 'x'
    num = ''
    document.getElementById('result').innerHTML = `${num}`
}

function divisao() {
    num1 = num
    res = '/'
    num = ''
    document.getElementById('result').innerHTML = `${num}`
}

function soma() {
    num1 = num
    res = '+'
    num = ''
    document.getElementById('result').innerHTML = `${num}`
}

function sub() {
    num1 = num
    res = '-'
    num = ''
    document.getElementById('result').innerHTML = `${num}`
}

function ac() {
    num1 = ''
    num = ''
    res = ''
    result = 0
    document.getElementById('result').innerHTML = '0'
}

function resultado() {
    if (res == 'x'){
        result = Number(num1) * Number(num)
    } else if (res == '/'){
        result = Number(num1) / Number(num)
    } else if (res == '+'){
        result = Number(num1) + Number(num)
    } else if (res == '-'){
        result = Number(num1) - Number(num)
    }  
    document.getElementById('result').innerHTML = `${result}` 
}