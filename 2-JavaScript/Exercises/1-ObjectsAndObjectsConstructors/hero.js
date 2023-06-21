// This is an example of Prototype of an Object
// First of all We need to create a constructor
function Hero (name, level) {
    // We use The this keyword will refer to the new instance that is created
    this.name = name;
    this.level = level;
}

Hero.prototype.greet = () => {
    return `${this.name} says hello.`;
}

const hero1 = new Hero("Jose", 1);
console.log(hero1.greet());