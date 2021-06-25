// Se crean dos variables con los valores ingresados por el usuario
var num1 = parseInt(prompt("Ingrese un primer número mayor a cero"));
var num2 = parseInt(prompt("Ingrese un segundo número diferente y mayor a cero"));

// Con las variables anteriores se crean variables de operaciones
var suma = num1+num2;
var resta = num1-num2;
var division = num1/num2;
var multiplicacion = num1*num2;
var modulo = num1%num2;

// Con los resultados de las variables de operaciones se imprime en pantalla los resultados
document.write("La suma entre los números es: " + suma + "<br>") 
document.write("La resta entre los números es: " + resta + "<br>")
document.write("La división entre los números es: " + division + "<br>")
document.write("La multiplicación entre los números es: " + multiplicacion + "<br>")
document.write("El módulo de los números es: " + modulo + "<br>")