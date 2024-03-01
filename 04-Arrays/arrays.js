// Array de animales
const animales = ["Perro", "Gato", "Vaca", "Cerdo", "Caballo", "Gallina", "Pato", "Conejo", "Tortuga", "Jirafa"];

// Mostrar todos los valores del array
console.log("Animales:", animales);

// Mostrar elementos en los índices 0, 4, 6 y 11 (si existe)
console.log("Índice 0:", animales[0]);
console.log("Índice 4:", animales[4]);
console.log("Índice 6:", animales[6]);
console.log("Índice 11:", animales[11]); // undefined

// Cambiar el elemento 5 por "Pipito feliz"
animales[5] = "Pipito feliz";

// Agregar un nuevo elemento al final del array
animales.push("Pipito triste");

// Mostrar el tipo de dato del array
console.log("Tipo de dato:", typeof animales); // object

// Mostrar el tamaño del array
console.log("Tamaño del array:", animales.length);
