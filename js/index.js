
let valorActual = ""; //iniciamos una cadena vacía para que puedan concatenarse los números
let oper = ""; //para guardar la operación seleccionada por el usuario

let valorAnterior = ""; 


function press(numeroIngresado){
    valorActual = valorActual + numeroIngresado; //convierte el numero ingresado a una cadena y lo añade a la variable valorActual
    document.querySelector("#display").innerHTML = valorActual;  //se actualiza el display con el valor concatenado
}

function setOP(operacionSeleccionada){
    op = operacionSeleccionada;//guardamos la operacion seleccionada en una variable 
    valorAnterior = valorActual; //para que el valor actual pase a ser el primer valor ingresado antes de seleccionar la operacion, entonces ese valor lo guardamos en una variable
    valorActual = ""; //resetea el valor para el proximo valor ingresado
    
}

//realizamos las operaciones
function calculate(){
    if(op === "+"){
        let resultado = Number(valorAnterior) + Number(valorActual);
        document.querySelector("#display").innerHTML = resultado;
    }
    if(op === "-"){
        let resultado = Number(valorAnterior) - Number(valorActual);
        document.querySelector("#display").innerHTML = resultado;
    }
    if(op === "*"){
        let resultado = Number(valorAnterior)*Number(valorActual);
        document.querySelector("#display").innerHTML = resultado;
    }
    if(op === "/"){
        let resultado = Number(valorAnterior) / Number(valorActual);
        document.querySelector("#display").innerHTML = resultado;
    }
}

function clr(){
    valorActual = "";
    valorAnterior= "";
    op = "";
    document.querySelector("#display").innerHTML = "0";
}