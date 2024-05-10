function verificar(){
    var data = new Date()
    var ano = data.getFullYear()  // vai pegar com quatro digitos, ou seja, 20 23 (2023)
    var fano = document.getElementById('txtano') // a variável (fano) vai receber o valor que veio do formulário (txtano)
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){ // lê-se: se não colocou o ano/ input vazaio (zero), OU colocou um ano maior que o ano atual, vai dar erro

        alert('[ERRO] Verifique os dados acima e tente novamente.')   

    }else {
        var fsex = document.getElementsByName('radsex') // não tem [] porque ele quer pegar os dois
        var idade = ano - Number(fano.value) // lê-se: ano menos o ano inserido no input
        var genero = ''
        var img = document.createElement('img') // vai criar uma tag 'img'
        img.setAttribute('id', 'foto') // após ter criado uma tag 'img', agora foi adicionado uma id com o nome 'foto', ou seja, é igual ir no html criar: <img id="foto">

        if(fsex[0].checked) { // lê-se: se o que estiver marcado (checked), for o fsex[0], é sinal de que é masculino (pois está definido do html que o checked é o masculino)
            genero = 'Homem'

            if(idade >= 0 && idade < 10){ // se a idade estiver entre 0 ou 10, é uma criança
                // CRIANÇA
                img.setAttribute('src', './assets/bebe-menino.jpg')
            }else if(idade >= 10 && idade < 21){
                // JOVEM
                img.setAttribute('src', './assets/jovem-menino.jpg')
            }else if (idade < 50){
                // ADULTO
                img.setAttribute('src', './assets/adulto-homem.jpg')
            }else {
                // IDOSO
                img.setAttribute('src', './assets/idoso-homem.jpg')
            }

        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // CRIANÇA
                img.setAttribute('src', './assets/bebe-menina.jpg')
            }else if(idade >= 10 && idade < 21){
                // JOVEM
                img.setAttribute('src', './assets/jovem-menina.jpg')
            }else if (idade < 50){
                // ADULTA
                img.setAttribute('src', './assets/adulta-mulher.jpg')
            }else {
                // IDOSA
                img.setAttribute('src', './assets/idosa-mulher.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // vai adicionar um elemento (no caso é o 'img') embaixo
    }


}