"use strict";
var enumerador1,denominador1,enumerador2,denominador2;


var simplificaFraccionario = function(val)
   	{
   		var parteVal = val.split("/");
   		var numerador = Number(parteVal[0]);
   		var denominador = Number(parteVal[1]);
   		var maximoComunDivisor = function(a, b)
   		{
   			return b ? maximoComunDivisor(b, a%b) : a;
   		};
   		maximoComunDivisor = maximoComunDivisor(numerador,denominador);
        numerador /= maximoComunDivisor;
        denominador /= maximoComunDivisor;
        var respuesta = numerador + "/" + denominador;
        if(denominador === 1)
        {
            respuesta = numerador;
        }
   		return respuesta;
   	};

function suma() {	
	    
	enumerador1 = parseInt(document.getElementById("enumerador1").value);
	denominador1 = parseInt(document.getElementById("denominador1").value);
	enumerador2 = parseInt(document.getElementById("enumerador2").value);
	denominador2 = parseInt(document.getElementById("denominador2").value);
	
	var denominador = denominador1*denominador2;
	var enumerador = (enumerador1*denominador2)+(denominador1*enumerador2);
	var resultado = enumerador+"/"+ denominador;
	var simplificado = simplificaFraccionario(resultado);

	
	document.getElementById("results").innerHTML = simplificado;	
}
function restar() {	
	    
	enumerador1 = parseInt(document.getElementById("enumerador1").value);
	denominador1 = parseInt(document.getElementById("denominador1").value);
	enumerador2 = parseInt(document.getElementById("enumerador2").value);
	denominador2 = parseInt(document.getElementById("denominador2").value);
	
	var denominador = denominador1*denominador2;
	var enumerador = (enumerador1*denominador2)-(denominador1*enumerador2);
	var resultado = enumerador+"/"+ denominador;
	var simplificado = simplificaFraccionario(resultado);

	
	document.getElementById("results").innerHTML = simplificado;	
}
function multiplicacion() {	
	    
	enumerador1 = parseInt(document.getElementById("enumerador1").value);
	denominador1 = parseInt(document.getElementById("denominador1").value);
	enumerador2 = parseInt(document.getElementById("enumerador2").value);
	denominador2 = parseInt(document.getElementById("denominador2").value);
	
	var denominador = denominador1*denominador2;
	var enumerador = enumerador1*enumerador2;
	var resultado = enumerador+"/"+ denominador;
	var simplificado = simplificaFraccionario(resultado);

	
	document.getElementById("results").innerHTML = simplificado;	
}
function division() {	
	    
	enumerador1 = parseInt(document.getElementById("enumerador1").value);
	denominador1 = parseInt(document.getElementById("denominador1").value);
	enumerador2 = parseInt(document.getElementById("enumerador2").value);
	denominador2 = parseInt(document.getElementById("denominador2").value);
	
	var denominador = denominador1*enumerador2;
	var enumerador = enumerador1*denominador2;
	var resultado = enumerador+"/"+ denominador;
	var simplificado = simplificaFraccionario(resultado);

	
	document.getElementById("results").innerHTML = simplificado;	
}