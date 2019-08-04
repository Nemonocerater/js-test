
function Animal(species, name) {
	this.species = species;
	this.name = name;
}
Animal.prototype.details = function Animal_details() {
	return this.name + " the " + this.species;
}

function Gorilla(name) {
	Animal.call(this, "Gorilla", name);
}
Object.setPrototypeOf(Gorilla, Animal);
Object.setPrototypeOf(Gorilla.prototype, Animal.prototype);
Gorilla.prototype.powerMove = function Gorilla_powerMove() {
	return this.name + " beats their chest!";
}