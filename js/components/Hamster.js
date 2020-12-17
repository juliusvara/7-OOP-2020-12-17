import {Pet} from './Pet.js';
class Hamster extends Pet {
    constructor (vardas, spalva) {
        super(vardas, spalva);
        this.sound = 'Ham Ham';
    }
    voice () {
        console.log(`${this.name}: ${this.sound}`);
    }
    introduce () {
        console.log('I am very shy');
    }
    
}
 
export { Hamster }