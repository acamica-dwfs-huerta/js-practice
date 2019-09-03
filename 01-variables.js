// las variables son valores dentro de la memoria de nuestro programa
// como su nombre indica, su contenido puede variar.

// Acá vamos a ver diferentes formas de definirlas

var saludo = 'hola';
var nombre = 'tu nombre'; // acá tenes que poner tu nombre
var edad = 20;
// podemos reasignar el valor de una variable de la siguiente forma
edad = 21;

// Podemos crear variables con el contenido de otras variables

var oracionConTemplateString = `${saludo} ${nombre}, como estás?`;
var oracionConcatenada = saludo + ' ' + nombre + ', como estás?';

// Podemos almacenar cualquier cosa dentro de una variable

var nada; // una variable inicializada y sin definir tiene el valor undefined

alert(oracionConTemplateString);
alert(oracionConcatenada);
