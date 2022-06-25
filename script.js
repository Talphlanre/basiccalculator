function calculate(){
    var number1 = parseFloat (document.getElementById('number1').value);
    var number2 = parseFloat (document.getElementById('number2').value);
    var operator =document.getElementById("operator").value;

    if(operator === '+'){
       document.getElementById('result').value = number1 + number2;
    }
    else if(operator === '-'){
        document.getElementById('result').value = number1 - number2;
     }
     else if(operator === '/'){
        document.getElementById('result').value = number1 / number2;
     }
     else 
        document.getElementById('result').value = number1 * number2;
     

}


