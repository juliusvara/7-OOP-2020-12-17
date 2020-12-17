class Pet {
    constructor(vardas, spalva,) {
        this.name= vardas;
        this.color=spalva;
        this.sound='Miau au';
    }


    voice(){
        console.log(`${this.name}: ${this.sound}`);
    }

    introduce() {
        console.log(`I am ${this.name}`);
    }
}
export {Pet}