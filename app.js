//RETO DEL FIZZ BUZZ (200 numeros enteros)

/*Escribe, un programa que muestre en pantalla los números del 1 al 200, 
sustituyendo los múltiplos de 3 por el palabro “Fizz” y, a su vez, los múltiplos 
de 5 por “Buzz”. Para los números que, al tiempo, son múltiplos de 3 y 5, utiliza el combinado 
“FizzBuzz*/

var text = "";
var i;
"<h2>el numero enteros</h2> "
for (i = 0; i < 200; i++) {
    if (i === 200) { break; }
    text += "el numero enteros " + i + "<br>";
  }
  "<br>"
  "<hr>"

for (i = 0; i < 200; i=i+3) {
  if (i === 200) { break; }
  text += "el numero es multiplos de tres Fizz " + i + "<br>";
}
"<br>"
"<hr>"

for (i = 0; i < 200; i=i+5) {
    if (i === 200) { break; }
    text += "el numero es multiplos de tres Buzz " + i + "<br>";
  }
document.getElementById("demo").innerHTML = text;