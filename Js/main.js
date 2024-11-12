let resultado = document.getElementById("resultado");
let numeros = document.querySelectorAll(".numeros input");
let operadores = document.querySelectorAll(".operaciones input");
let num1 = ''; 
let num2 = ''; 
let operador = ''; 
let resultadoOperacion = '';



numeros.forEach(function(boton) {
    boton.addEventListener("click", function() {
        if (operador === '') {
            num1 += boton.value;
            resultado.value += boton.value; 
        } else {
            num2 += boton.value;
            resultado.value = num2;
        }
    });
});


operadores.forEach(function(boton) {
    boton.addEventListener("click", function() {
        if (boton.value == "AC") {
            resultado.value = ''; 
            num1 = ''; 
            num2 = ''; 
            operador = ''; 
            return; 
        }

        if (boton.value === '=') {
            realizarOperacion();
        } else {
            if (num1 !== '' && num2 !== '' && operador !== '') {
                realizarOperacion(); 
            }
            operador = boton.value;
            resultado.value = ''; 
        }
    });
});


function realizarOperacion() {
    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);

    if (!isNaN(num1) && !isNaN(num2) && operador) {

        switch (operador) {
            case '+':
                resultadoOperacion = n1 + n2;
                break;
            case '-':
                resultadoOperacion = n1 - n2;
                break;
            case '*':
                resultadoOperacion = n1 * n2;
                break;
            case '/':
                resultadoOperacion = n2 !== 0 ? n1 / n2 : 'Error'; 
                break;
            default:
            resultadoOperacion = 'Error';
        }

        resultado.value = resultadoOperacion;

        num1 = resultadoOperacion.toString(); 
        num2 = '';
        operador = '';
    } else {
        resultado.value = 'Error'; 
    }
}
