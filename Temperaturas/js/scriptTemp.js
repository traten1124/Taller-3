window.onload = function()
{

    //esliders 
    nom_div("slider").addEventListener('change', function(event)
    {
        
        nom_div("valorslider").innerHTML = "Grados Centigrados: " + Number(this.value);
        valorslider = Number(this.value);

        Centigrados(valorslider);
    });

    nom_div("slider2").addEventListener('change', function(event)
    {
        
        nom_div("valorslider2").innerHTML = "Grados Fahrenheit: " + Number(this.value);
        valorslider = Number(this.value);

        Fahrenheit(valorslider);
    });

    nom_div("slider3").addEventListener('change', function(event)
    {
        
        nom_div("valorslider3").innerHTML = "Grados Kelvin: " + Number(this.value);
        valorslider = Number(this.value);

        Kelvin(valorslider);
    });

    //Función que realizará la conversión...
    var Centigrados = function(Valor)
    {
        var Fahrenheit = ( (9*Number(Valor))/5 )+32;
        var Kelvin = Number(Number(Valor)) + 273.15;
      
        nom_div("resp").innerHTML = "Grados Fahrenheit: "+ Fahrenheit + "<br> Grados Kelvin: " + Kelvin;
    };

    var Fahrenheit = function(Valor)
    {
        Centigrados = (Number(Valor) - 32) / (9/5);
      
        nom_div("resp2").innerHTML = "Grados Centigrados: " + Centigrados;
    };

    var Kelvin = function(Valor)
    {
        Centigrados = Number(Valor) - 273.15;
      
        nom_div("resp3").innerHTML = "Grados Centigrados: " + Centigrados;
    };


    function nom_div(div)
    {
        return document.getElementById(div);
    }
}
   