// Se crea una variable con el valor ingresado por el usuario
var cel = parseInt(prompt("Ingrese la temperatura en grados Celsius"));

// Se crean dos variables con la operación de conversión de Celsius a Kelvin y Fahrenheit
var kel = cel + 273.15;
var far = cel * 9 / 5 + 32;

// Con los resultados de las conversiones se imprime en pantalla los resultados
document.write("La temperatura en grados Kelvin es: " + kel + "<br>") 
document.write("La temperatura en grados Fahrenheit es: " + far)