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