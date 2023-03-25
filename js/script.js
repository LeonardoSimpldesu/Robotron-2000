const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const btnCor = document.querySelector("[data-cor]")
const robo = document.querySelector("[data-robo]")

const pecas = {
    "bracos":{
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5 
    },
    "blindagem":{
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20 
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia":48 ,
        "velocidade": -4 
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -9 
    },
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]")

    if(operacao == "-"){
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca){
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

var cont = 0
btnCor.addEventListener("click",() => {
    cont++;
    switch (cont){
        case 1:
            robo.src = "img/Robotron2000-Amarelo.png"
        break;
        case 2:
            robo.src = "img/Robotron2000-Branco.png"
        break;
        case 3:
            robo.src = "img/Robotron2000-Preto.png"
        break;
        case 4:
            robo.src = "img/Robotron2000-Rosa.png"
        break;
        case 5:
            robo.src = "img/Robotron2000-Vermelho.png"
        break;
        case 6:
            robo.src = "img/Robotron2000-Azul.png"
            cont = 0
        break;
    }
})