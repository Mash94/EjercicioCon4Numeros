//Código interno que genera un vector con los valores
var valores = new Array(4);
var v1, v2, v3, v4;
function Actualizar_Valores()
{
    let temp = document.getElementsByName("numeros");
    for(let i = 0; i < valores.length; i++) {
        valores[i] = temp[i].value;
    };
    v1 = valores[0];
    v2 = valores[1];
    v3 = valores[2];
    v4 = valores[3];
    //console.log("Valores cargados por el docente: ", valores, v1, v2, v3, v4);
}