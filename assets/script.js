var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
let subtrair = document.getElementById("sub");
let adicionar = document.getElementById("add");

window.onload = function(){
    verificarValor();
}

function increment(){
    if (currentNumber < 10) {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }

    verificarValor();
}

function decrement(){
    if (currentNumber > 0) {
        currentNumber -= 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    
    verificarValor();
}

function verificarValor(){
    if (currentNumber === 0){
        subtrair.style.backgroundColor = "lightgrey";
    } else {
        subtrair.style.backgroundColor = "rgb(235, 204, 204)";
    }

    if (currentNumber === 10){
        adicionar.style.backgroundColor = "lightgrey";
    } else {
        adicionar.style.backgroundColor = "rgb(235, 204, 204)";
    }
}