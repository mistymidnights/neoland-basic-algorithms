// #iteración 1
let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = x + 5;

// #iteración 2

const character = { name: 'Jack Sparrow', age: 10 };
console.log(character);
character.age = 25;
console.log(character);


let firstName = "Jon";
let lastName = "Snow";
let age = 24;

// 'Soy Jon Snow, tengo 24 años y me gustan los lobos.'
console.log("soy " + firstName + " " + lastName + ",tengo " + age + " años y me gustan los lobos");

console.log(`soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`);


const toy1 = { name: 'Buss myYear', price: 19 };
const toy2 = { name: 'Rallo mcKing', price: 29 };

console.log("Total Price", toy1.price + toy2.price);

let globalBasePrice = 10000;
const car1 = {
  name: 'BMW m&m',
  basePrice: 50000,
  finalPrice: 60000
};
const car2 = {
  name: 'Chevrolet Corbina',
  basePrice: 70000,
  finalPrice: 80000
};
console.log(car1);
console.log(car2);

globalBasePrice = 25000;

car1.finalPrice = car1.basePrice + globalBasePrice;
console.log("MODIFICADO", car1);
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log("MODIFICADO", car2);

// Iteración 3

// Multiplica 10 por 5 y muestra el resultado mediante console.log.
let multiplicacion = 10 * 5;

console.log(multiplicacion);

// Divide 10 por 2 y muestra el resultado en un console.log.

let division = (10 / 2);

console.log(division);

// Muestra mediante un console.log el resto de dividir 15 por 9

let resto = 15 % 9;

console.log(resto);

// Usa el correcto operador de asignación que resultará en o = 15,
// teniendo dos variables p = 10 y j = 5.

let p = 10;
let j = 5;
let o = p + j;

// Usa el correcto operador de asignación que resultará en i = 50,
// teniendo dos variables c = 10 y m = 5.

let c = 10;
let m = 5;
let i = (c * m);

// Iteración 4

// Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const nameAvenger = avengers[0];

// Cambiar el valor del 1 avenger a ironman
avengers[0] = "Ironman";
console.log(avengers);

//console numero de elementos en el array usando la propiedad correcta de Array.

console.log(avengers.length);

// Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty");
rickAndMortyCharacters.push("Summer");

console.log("LA DE CONTAR", rickAndMortyCharacters[4]);

// lenght - longitud [1,2,3] - 3
// position - 0, 1, 2
// lenght 3 lenght - 1 =  2 position
console.log("LA BUENA", rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);
