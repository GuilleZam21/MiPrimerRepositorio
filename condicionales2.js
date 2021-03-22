//Dado un no separarlos en centenas, descenas y unidades
//Intercambiar la posición entre las centenas y las unidades
//e imprimir el no final

var numcompleto = 738;
//asegurarnos que nos dieron un no de 3 cifras, con:
if (numcompleto < 1000 && numcompleto > 99) {
    //centenas= parseInt(738/100);
    var centenas = parseInt(numcompleto / 100); //regresa la parte entera de la divis
    //console.log(centenas);

    //decenas=parseInt(38/10)
    var decenas=parseInt((numcompleto % 100) / 10);
    //console.log(decenas);

    //unidades = parseInt(38-30)
    var unidades = numcompleto % 100 - decenas * 10;
    //console.log(unidades);

    //var final= (unidades) + (decenas) + (centenas);
    //console.log("final1:" + final);
    console.log("Numero original: " + numcompleto);
    console.log("Resultado final: " + unidades + decenas + centenas);
}
else {
    console.log( "Ingresa un número de 3 cifras");
}

//Condicional switch
var condSwitch = "Luis";
var edad="18";
switch(condSwitch) {
    case 2:
        console.log("El valor ingresado es: 2");
        break;
        case 3:
            console.log("El valor ingresado es: 3");
            break; 
        case 6:
            console.log("El valor ingresado es: 6");
            break;
        case "Luis":
            console.log("Hola Luis");
            if (edad==18) {
                console.log("Felicidades eres mayor de edad");
            }
            break;
        default:
            console.log("Cayo en default");
            break;
}