window.onload = function()
{

    //slider
    nom_div("slider").addEventListener('change', function(event)
    {
        
        nom_div("valorslider").innerHTML = "Peso Terrestre: " + Number(this.value);
        valorslider = Number(this.value);
        console.log(valorslider);

        Pesos(valorslider);
    });

    //Función que realizará la conversión...
    var Pesos = function(Valor)
    {
        var respuesta = Number(Valor)*0.17;
      
        //Imprime la respuesta en la vista (HTML)...
        nom_div("resp").innerHTML = "Peso Lunar: "+ respuesta;
    };
    function nom_div(div)
    {
        return document.getElementById(div);
    }
}
   