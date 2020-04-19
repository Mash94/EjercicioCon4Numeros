function Calcular() {
    //Función con código generado por los docentes para cargar los 4 números ingresados
    // en el array "valores" y en las 4 variables (v1, v2, v3 y v4)
    Actualizar_Valores();
    //A partir de acá, van a llamar a las funciones que ustedes generen para:
    //1) Mostrar un alert con la suma de todos los números ingresados.
        let suma = mostrarSuma();
        alert(suma);
    //2) Mostrar un alert con el mayor número de los 4 ingresados.
        let mayor = mostrarMayor();
        alert(String(mayor[0]));
    //3) Mostrar un alert con los dos números del medio (ni el mayor, ni el menor)
        alert(String(mayor[1])+','+String(mayor[2]));
    //4) Mostrar por consola los 4 números, en orden inverso (primero el 4, último el 1) utilizando un solo console.log
        invertido=invertir(mayor);
        alert(String(invertido));
    //5) Realizar una calculadora, utilizando el 1er y 2do número como operandos, y el 3ro como indicador de suma (0), resta (1), multiplicación (2) o división (3)
    //6) Modificar el archivo "Ejercicio1.js" y reemplazar las variables por un único objeto que incluya el vector y los 4 números por separado. En base a esto, corregir el código generado anteriormente con el nuevo objeto general.
}

function mostrarSuma(){
    var suma = 0;
    for(let i=0 ; i < valores.length ; i++){
        valores[i] = parseInt(valores[i]);
        suma += valores[i];
    }
    return (suma);
}


function mostrarMayor(){
    let mayor = [];
    for(let i=0 ; i < valores.length ; i++){
        valores[i] = parseInt(valores[i]);
    }

    for(let j=0 ; j < valores.length; j++){
        for(let i=0 ; i < valores.length ; i++){
            if(i == valores.length-1){
                    mayor.push(valores[valores.length-1]);  
            } else if(valores[i] > valores[i+1]){
                mayor.push(valores[i]);
            }else{
                mayor.push(valores[i+1]);
                valores[i+1] = valores[i]
                valores[i] = mayor[i]
            }
            //console.log("vuelta:",i);
            //console.log("mayor",mayor);
            //console.log("valores",valores);

            if(mayor.length == 10 || valores.length == 10){ 
                //console.log("Salgo por break");
                break;
            }
        }
        if(j== valores.length-1){
            return mayor;
        }
        valores = mayor;
        mayor = [];

        //console.log("mayor",mayor);
        //console.log("valores",valores);
    }
}

function invertir(valores){
    var invertido = []
    for(let i = (valores.length-1) ; i>=0 ; i--){
        invertido.push(valores[i]);
    }
    //console.log(invertido);
    return invertido;
}