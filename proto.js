
function Pet(name, species) {
    this.name = name;
    this.species = species;
}
Pet.prototype.view = function pet_view() {
    return this.name + " is a " + this.species + "!";
}

function Dog(name) {
	//Dog.prototype = new Pet();
    Pet.call(this, name, "dog");
}
Dog.prototype = new Pet();
Dog.prototype.bark = function dog_bark() {
    alert("Woof!");
}

class PetClass {
	constructor(name, species) {
		this.name = name;
		this.species = species;
		this.bob = "bob";
	}

	view() {
		return this.name + " is a " + this.species;
	}
	
	static petf() {}
}

class DogClass extends PetClass {
	constructor(name) {
		super(name, "dog");
	}

	bark() {
		return "Woof!";
	}

	static dogf() {}
}
