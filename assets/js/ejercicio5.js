// Se crean cinco variables con los valores ingresados por el usuario
var num1 = parseInt(prompt("Ingrese un primer número"));
var num2 = parseInt(prompt("Ingrese un segundo número"));
var num3 = parseInt(prompt("Ingrese un tercer número"));
var num4 = parseInt(prompt("Ingrese un cuarto número"));
var num5 = parseInt(prompt("Ingrese un quinto número"));

// Con las variables anteriores se crean variables de operaciones
var suma = num1+num2+num3+num4+num5;
var promedio = suma/5;

// Con los resultados de las variables de operaciones se imprime en pantalla los resultados
document.write("La suma entre los números es: " + suma + "<br>") 
document.write("El promedio de los números es: " + promedio)