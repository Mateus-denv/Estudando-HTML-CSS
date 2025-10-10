const display =document.getElementById('visor')

{string} value

function appendToDisplay(value){
    display.value += value
}

function cleanvisor(){
    display.value = ''
}

function calculeresultado(){
    try{
        display.value = eval(display.value)
    }catch(error){
        display.value = 'error'
    }
}