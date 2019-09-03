// string

var string = 'un string es una cadena de texto';
var string2 = `que se puede definir de diferentes`;
var string3 = new String('formas');

// numeros
var edad = 20; // completar con mi edad

// objetos
// los objetos son elementos que pueden almacenar datos encapsulados

var miObjeto = {
  nombre: 'Mi nombre', //completar con tus datos
  apellido: 'Mi apellido',
  edad // al hacer referencia a una variable ya existente, dentro de el objeto, se toma el valor de esa misma
};

// tambien podemos editar los atributos de un objeto de la siguiente forma
miObjeto.nombre = 'Leonel';
// o
miObjeto['nombre'] = 'tu nombre'; // esta forma nos permite usar caracteres especiales en los nombres de los atributos

// podemos usar el contenido qu ese encuentra dentro del objeto, usando un "."

alert(`Mi nombre es ${miObjeto.nombre} ${miObjeto.apellido}, y tengo ${miObjeto.edad} años.`);

// si hacemos referencia a algo que no esta definido, da undefined
alert(miObjeto.mail);

// array
let gustos = ['medialunas', 'dormir'];
let gustos2 = new Array('medialunas', 'no dormir');

// los arrays tambien son un tipo especial de objetos, pero almacenan datos por indices empezando a contar desde el 0
// podemos agregar elementos con el metodo push

gustos.push('peras');

alert('me gusta ' + gustos[1]);

// booleano

var verdadero = true;
var falso = false;
