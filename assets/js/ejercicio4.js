// Se crea una variable con el valor ingresado por el usuario
var num1 = parseInt(prompt("Ingrese un número de días"));

// Con las variables anteriores se crean variables de operaciones
var years = num1/365; 
var weeks = (num1%365)/7;
var days = (num1%365)-(Math.floor(weeks)*7);

// Con los resultados de las variables de operaciones se imprime en pantalla los resultados
document.write("El resultado es: " + Math.floor(years) + " año(s) " + Math.floor(weeks) + " semana(s) y " + Math.floor(days) + " día(s).")