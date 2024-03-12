




// Importa el módulo 'fs' (file system) para manejar operaciones de archivos en Node.js
const fs = require('fs');

// Lee de manera sincrónica (bloqueante) el contenido del archivo 'README.md' en formato UTF-8
const content = fs.readFileSync('texto.txt', 'utf8');

// Divide el contenido del archivo en un array de palabras utilizando el espacio como delimitador
const palabras = content.split(' ');


/*****************************************************Primera variantes******************************************************/

// Filtra las palabras para encontrar aquellas que son iguales a 'react' (sin importar mayúsculas o minúsculas)


// const buscarPalabraReact = palabras.filter((palabra) =>
//   palabra.toLowerCase() === 'react'
// ).length;

//El resultado de la búsqueda se almacena en la variable 'buscarPalabraReact'


/*****************************************************Segunda variante******************************************************/

// Filtra las palabras para encontrar aquellas que contienen la subcadena 'react' (sin importar mayúsculas o minúsculas)
// const buscarPalabraReact = palabras.filter((palabra) =>
//   palabra.toLowerCase().includes('react')
// ).length;

// El resultado de la búsqueda se almacena en la variable 'buscarPalabraReact'



/*****************************************************Segunda variante******************************************************/



// Utiliza una expresión regular para encontrar todas las ocurrencias de 'react' en el contenido, sin importar mayúsculas o minúsculas (gi)
const buscarPalabraReact = content.match(/react/gi).length;

/*
const buscarPalabraReact = content.match(/react/gi).length;: Utiliza una expresión regular (/react/gi) para encontrar todas las ocurrencias de 'react' en el contenido. Los modificadores g e i significan "global" (encuentra todas las coincidencias) e "insensible a mayúsculas/minúsculas" respectivamente. El método match() devuelve un array con todas las coincidencias encontradas.

.length: Calcula la longitud del array resultante, lo que da como resultado el número total de ocurrencias de 'react' en el contenido.*/

// El resultado de la búsqueda se almacena en la variable 'buscarPalabraReact'



console.log('Se encontro: ', palabras.length,' palabras')
console.log('Se encontro la palabra react: ',buscarPalabraReact, ' veces')


