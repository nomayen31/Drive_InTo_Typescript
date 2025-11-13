class Human {
//    public name: string;
//    public species: string;
//    public sound: string;

   constructor(public name: string,public species: string, public sound: string) {
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }
    makeSound(){
    console.log(`${this.name}is making sound ${this.sound}`);
    
}
}

const man1 = new Human("Nomayen Hossain", "human", "bangla");
const girls1 = new Human('Shahanika Hossain', 'Human', 'English')


man1.makeSound()


console.log({
    name: man1.name,
    species: man1.species,
    sound: man1.sound
});

console.log({
    name: girls1.name,
    species: girls1.species,
    sound: girls1.sound
}); 

console.log();
