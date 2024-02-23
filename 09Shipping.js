function inputEnter (){
    if(event.key === 'Enter'){
        jsReader();
    }
}
function jsReader (){

let VariableReader = document.querySelector('.js-input').value;
let changeToNumber = Number(VariableReader)

    if (VariableReader < 40 && VariableReader >0) {
        let result = 10 + changeToNumber
        document.querySelector('.js-input').value = `R$${result}`

    } else if(VariableReader >=40){
        let result2 = changeToNumber
        document.querySelector('.js-input').value = `R$${result2}`
    } 
}
