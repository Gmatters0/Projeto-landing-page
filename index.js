var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var samantha = window.document.getElementById("samantha")
var setaEsquerda = window.document.getElementById("setaesquerda")
var setaDireita = window.document.getElementById("setadireita")

function rolarDireita(){
    bruna.style = "display: none"
    samantha.style = "display: flex" 
    setaEsquerda.style = "display: flex; margin-top: 55px"
    setaDireita.style = "display: none"
}
function rolarEsquerda(){
    bruna.style = "display: flex"
    samantha.style = "display: none" 
    setaEsquerda.style = "display: none"
    setaDireita.style = "display: flex; margin-top: 40px"
}

