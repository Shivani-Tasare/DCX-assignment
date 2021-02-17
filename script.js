function clr(){
    document.getElementById('inputbox').value = "";
}

function display(value){
    document.getElementById('inputbox').value += value;
}

function calculate(){
    let number = document.getElementById('inputbox').value;
    let result = eval(number);
    document.getElementById('inputbox').value = result;
}