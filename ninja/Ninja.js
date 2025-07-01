class Ninja {
    constructer(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`My ninja name is ${this.name}`);
    }
    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drinks sake and gains 10 health!`);
    }

}
class Sensi extends Ninja{
    constructor(name, health){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakiWisdom(){
    this.drinkSake();
        console.log("what one programmer can do in one month, two programmers can do in two months.");
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const sensi1 = new Sensi("Master Splinter");
sensi1.speakiWisdom();
sensi1.showStats();
