//RETO DEL FIZZ BUZZ (200 numeros enteros)

/*Escribe, un programa que muestre en pantalla los números del 1 al 200, 
sustituyendo los múltiplos de 3 por el palabro “Fizz” y, a su vez, los múltiplos 
de 5 por “Buzz”. Para los números que, al tiempo, son múltiplos de 3 y 5, utiliza el combinado 
“FizzBuzz*/

var text = "";
var text1 = "";
var text2 = "";
var text3 = "";
var i;
"<h2>el numero enteros</h2> "
for (i = 0; i <= 201; i++) {
    if (i === 201) { break; }
    text += "el numero enteros " + i + "<br>";
  }
  "<br>"
  "<hr>"

for (i = 0; i <= 200; i=i+3) {
  if (i === 200) { break; }
  text1 += "el numero es multiplos de tres Fizz " + i + "<br>";
}
"<br>"
"<hr>"

for (i = 0; i <= 200; i=i+5) {
    if (i === 200) { break; }
    text2 += "el numero es multiplos de tres Buzz " + i + "<br>";
  }
  for (i = 0; i <= 200; i=i+3*5) {
    if (i === 200) { break; }
    text3 += "el numero es multiplos de tres y de cinco  FizzBuzz " + i + "<br>";
  }
var demo = document.getElementById("demo");
demo.innerHTML += `
    <div class container>
    <h1>Numeros enteros</h1>
    <h3>${text}</h3>
    <h1>Numeros multiplos de tres </h1>
    <h3>${text1}</h3>
    <h1>Numeros multiplos de cinco</h1>
    <h3>${text2}</h3>
    <h1>Numeros multiplos de tres y de cinco</h1>
    <h3>${text3}</h3>
    </div>

`;
