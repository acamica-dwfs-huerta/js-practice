// los loops nos permiten iterar sobre elementos

var frutas = ['banana', 'naranja', 'durazno'];

// esto nos dice que i (nuestro contador va a ser cero), y mientras que i sea menor que el largo de nuestro array, se le va a sumar un numero.
// ese numero va a ser el que usamos para acceder a un elemento dentro de nuestro array

for (
  var i = 0; // acá dice desde donde empezamos a contar
  i < frutas.length; // esta va a ser la condición
  i++ // esta va a ser la operación que se hace sobre el numero que declaramos al principio
) {
  var fruta = frutas[i];
  alert(fruta);
}

// tambien podemos iterar sobre strings
for (var i = 0; i < frutas[0].length; i++) {
  let letra = frutas[0][i];
  alert(letra);
}

// ejemplo de concatenacion con array

var stringDeFrutas = ''; // muy importante tener un string vacío, sino el string que creemos va a empezar con undefined

for (var u = 0; u < frutas.length; u++) {
  var fruta = frutas[u];
  stringDeFrutas += fruta + ' ';
}

alert(stringDeFrutas);
