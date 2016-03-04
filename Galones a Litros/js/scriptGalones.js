window.onload = function()
{
    nom_div("slider").addEventListener('change', function(event)
    {
        
        nom_div("valorslider").innerHTML = "Galones: " + Number(this.value);
        valorslider = Number(this.value);
        console.log(valorslider);

        galonalitros(valorslider);
    });

    var galonalitros = function(Valor)
    {
        var respuesta = Number(Valor)*3.7854;

        nom_div("resp").innerHTML = "Litros: "+ respuesta;
    };
    function nom_div(div)
    {
        return document.getElementById(div);
    }
}
   