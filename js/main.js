

// Objektas
// - parametru rinkinys
// - savybiu (funkcionalumo) rinkinys



import {Dog} from './components/Dog.js';
import {Cat} from './components/Cat.js';
import {Hamster} from './components/Hamster.js';
import {Pet} from './components/Pet.js';

const rexas = new Dog('Rexas', 'brown');
const lese = new Dog('Lese', 'golden');

const fluffy = new Cat('Fluffy', 'white');

const chipsas = new Hamster('chipsas', 'black');


console.log(rexas);
console.log(lese);

console.log(fluffy);

console.log(chipsas);



rexas.voice();
lese.voice();

fluffy.voice();
chipsas.voice();

rexas.introduce();

chipsas.introduce();