// las funciones son un conjunto de instrucciones que tienen una entrada y una salida

function saludar(nombre) {
  return `hola ${nombre}, como estás?`;
}

var nombre = prompt('cual es tu nombre?', 'nombre generico');

var saludo = saludar(nombre);

alert(saludo);
