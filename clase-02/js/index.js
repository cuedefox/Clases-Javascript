// Condiciones if else
let pruebaIf = 5;

if (pruebaIf == 5) {
    console.log("si sta bien");
}
if (pruebaIf == 6) {
    console.log("si sta bien tambien pero es 6");
}

let pruebaElse = prompt("Ingrese su nombre haber si sos tan piola");


if (pruebaElse == "") {
    alert("no pusiste nombre de usuario mamerto");
}
else {
    alert("Tu nombre es " + pruebaElse);
}
if (pruebaElse == "Cuede") {
    console.log("Sis es Cuede we");
} 
else {
    console.log("No es Cuede :(");
}

// Condiciones anidadas

let pijas = prompt("¿Cuantas pijas hay?");
// ir de menor a mayor, ya que es interpretado linea por linea
if (pijas < 10) {
    alert("Hay menos de 10 pijas :o");
}
else if (pijas < 40) {
    alert("Hay menos de 40 pijas :o");
}
else if (pijas < 70) {
    alert("Hay menos de 70 pijas :o");
}
else if (pijas < 100) {
    alert("Hay menos de 100 pijas :o");
}
else if (pijas > 100) {
    alert("Hay mas de 100 pijas :o");
}

// Variable booleana
let pruebaBoolean = prompt("Pone un numero mayor a 5");
let esMayor5 = (pruebaBoolean > 5);

if (esMayor5) {
    alert("Bien ahi");
}
else {
    alert("te dije mayor a 5 la puta que te pario");
}

// y && - no es igual, es distinto != - \n salto de linea

let nombreIngresado = prompt("Ingresar Nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if ((nombreIngresado != "") && (apellidoIngresado != "")) {
    alert("Tu nombre es " + nombreIngresado + " " + apellidoIngresado + "\nNombre: "
    + nombreIngresado + "\nApellido: " + apellidoIngresado);
}
else {
    alert("Te dije que pongas el nombre y apellido la puta que te remil re pario");
}

// or, o ||

let nombrePuta = prompt("Pone el nombre de una puta");

if ((nombrePuta == "Cuede") || (nombrePuta == "Rodrigo")) {
    alert("Dios no es una puta");
}
else {
    alert("Efectivamente es una puta");
}

// Combinacion de && y ||

if (((nombreIngresado != "") && (apellidoIngresado != "")) && ((nombreIngresado == "Rodrigo") || (nombreIngresado == "Cuede"))) {
    alert("Hola dios " + nombreIngresado);
}
else {
    alert("You´re not god");
}

