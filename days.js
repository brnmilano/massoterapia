const diaAtual = new Date().getDay()
const carregar = () =>{
    if(diaAtual  == 0 || diaAtual  == 6){
        document.getElementById("day").innerText = "Aberto segunda-feira a partir das 7:00";
    } else {
        document.getElementById("day").innerText = "Aberto até as 20:00";
    }
}

window.onload = carregar;