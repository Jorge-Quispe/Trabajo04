var op = (parseInt(prompt("Elija una opcion : ")))

function suma ( a,b) {
    
    a = prompt( "Ingresa el primer valor : ")
    b = prompt( " Ingresa el segundo valor : ");
    var c;
    c = a+b;
    c = document.write(c);
    }
function resta(a,b) {
    a = prompt("Ingresa el primer valor : ")
    b = prompt( " Ingresa el segundo valor  : ");
    var c;
    c = a-b;
    c = document.write(c);
}
function multiplicacion (a,b) {
    a = prompt("Ingresa el primer valor : ")
    b = prompt( " Ingresa el segundo valor  : ");
    var c;
    c = a*b;
    c = document.write(c);
}
function division(a,b) {
    a = prompt("Ingresa el primer valor : ")
    b = prompt( " Ingresa el segundo valor  : ");
    var c;
    c = a/b;
    c = document.write(c);
}
function raiz(a) {
    a = prompt("Ingresa el valor : ")
    var b;
    b  = Math.sqrt(a);
    c = document.write(b);
}
function factorial (a) {
    a = prompt("Ingresa el valor : ")
    var r =1;
    while (a!=0) {
        r = r*a;
        a--;
        c = document.write(r);
    }
}
    function potencia (a,b) {
        a = prompt("Ingresar el valor : ");
        
        b = prompt("Ingrese el valor de la potencia : ")
        var c;
        c = Math.pow(a,b);
        c = document.write(c);
    }

switch (op) {
    case 1:
        suma();
        break;
    case 2:
        resta();
        break;
    case 3:
        multiplicacion();
        break;
     case 4:
        division();
        break;
    case 5:
        raiz();
        break;
     case 6: 
        factorial();
        break;
        case 7:
            potencia();
            break;
    default:
       
}
