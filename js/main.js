var number = 0;
var numberDiv = document.getElementById('number');


document.getElementById('buttonPl').addEventListener('click', increaseValue);
document.getElementById('buttonNeg').addEventListener('click', decreaseValue);


function increaseValue(){
    var inputVal = document.getElementById('inputNum').value;
    var int = parseInt(inputVal)
    number += int
    document.getElementById('number').innerHTML=number;
    if (number < 0) {
    numberDiv.style.color = "red"; 
    } else {
    numberDiv.style.color = "black"; 
    }
};

function decreaseValue(){
    var inputVal = document.getElementById('inputNum').value;
    var int = parseInt(inputVal)
    number -= int
    document.getElementById('number').innerHTML=number;
    console.log(number)
    if (number < 0) {
        numberDiv.style.color = "red"; 
        } else {
        numberDiv.style.color = "black"; 
    }
}

