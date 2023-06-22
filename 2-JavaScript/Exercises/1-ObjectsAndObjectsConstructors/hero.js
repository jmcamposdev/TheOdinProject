// This is an example of Prototype of an Object
// First of all We need to create a constructor
function Hero (name, level) {
    // We use The this keyword will refer to the new instance that is created
    this.name = name;
    this.level = level;
}
// Warrior Constructor
function Warrior (name, level, weapon) {
    Hero.call(this, name, level);  // Call the parent constructor

    this.weapon = weapon; // Add a new property
}
// Healer Constructor
function Healer (name, level, spell) {
    Hero.call(this, name, level);  // Call the parent constructor
    this.spell = spell; // Add a new property
}

// Set the prototype of the child constructor to an instance of the parent constructor
// Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
// Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// Add greet method to the Hero prototype
Hero.prototype.greet = function() {
    return `${this.name} says hello.`;
}
// Add attack method to the Warrior prototype
Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}.`;
}
// Add heal method to the Healer prototype
Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
}

const hero1 = new Warrior("Bjorn", 1, "axe");
const hero2 = new Healer("Maria", 1, "Healing Light");

console.log(hero1.greet());
