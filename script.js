function confirmar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('resp')

    if(inicio.length == 0 || fim.length == 0){
        alert('Erro')
    } else {
        ini = Number(inicio.value)
        fi = Number(fim.value)
        pas = Number(passo.value)
    }
    if (pas == 0){
        alert('passo sera considerado 1')
        pas = 1
    }
    res.innerHTML = 'Contando: '
    if(ini < fi){
    for(var i = ini; i <= fi; i += pas){
        res.innerHTML += `\u{1F449} ${i} `
    }
    } else {
        for(var i = ini; i >= fi; i -= pas){
            res.innerHTML += `\u{1F449} ${i} `
        }
    }
    res.innerHTML += `\u{1F3C1}`
}