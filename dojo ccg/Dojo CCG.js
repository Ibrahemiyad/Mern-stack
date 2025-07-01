class Card{
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power;
            console.log(`${this.name} attacks ${target.name} for ${this.power} damage!`);
            console.log(`${target.name} has ${target.res} health left.`);
        } else {
            console.log("Target must be a unit.");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, stat, magnitude) {
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit){
            if (this.stat === "power"){
                target.power += this.magnitude;
            } else if (this.stat === "res") {
                target.res += this.magnitude;
            }
            console.log(`${this.name} played on ${target.name}.`);
        }
        else {
            console.log("Target must be a unit.");
        }
    }
}


const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "resilience",3);
hardAlgorithm.play(redBeltNinja);

const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);
unhandledPromiseRejection.play(redBeltNinja);   

const pairProgramming = new Effect("Pair Programming", 3, "power", 2);
pairProgramming.play(redBeltNinja);           
redBeltNinja.attack(blackBeltNinja);            
