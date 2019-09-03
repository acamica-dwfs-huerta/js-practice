// es importante saber que valores evaluan a false y a true

// falsy
var cero = 0;
var stringVacio = '';
var notANumber = NaN;
var falso = false;
var nulo = null;
var indefinido = undefined;

// todos los demas evaluan a true

// ya que vimos esto la clase pasada, podemos jugar

if (0) {
  alert('no entra');
}

if ('0') {
  alert(' entra');
}

if (0 == '0') {
  alert(' entra');
}

if (0 === '0') {
  alert('no entra');
}

// podemos usar operaciones como NOT, AND, y OR

if (null && 'false') {
  alert(''); // lo que quieras
}

if (!null) {
  alert(''); // lo que quieras
}

if (!notANumber) {
  alert(''); // lo que quieras
}

if (notANumber) {
  alert(''); // lo que quieras
} else if (2) {
  alert(''); // lo que quieras
} else {
  alert(''); // lo que quieras
}

if ({} == {}) {
  alert(''); // lo que quieras
}

var objeto = {};

if (objeto == objeto) {
  alert(''); // lo que quieras
}
