function contar(){
    var res = document.getElementById('res')
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO, Faltam dados!')
    } else {
        res.innerHTML = 'Contando..'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        var g = 0
        for (var c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
            g++
        }
        res.innerHTML += `\u{1F3C1} total de numeros ${g}`
    }
    
}