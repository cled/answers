/**
 * Created by whitehawk on 2014-04-04.
 */

/**
 * Describes an animal
 * @constructor
 */
var Animal = function() {

};

/**
 * Animal can eat
 */
Animal.prototype.eat = function() {
  console.log("eats");
};

/**
 * Animal can sleep
 */
Animal.prototype.sleep = function() {
    console.log("sleeps");
};


// A constructor for defining new lions
function Lion( options ) {

  // defaults
  this.says = options.says || 'roarz';

}

// A constructor for defining new horses
function Horse( options ){
  // defaults
  this.says = options.says || 'neeez';

}

// A constructor for defining new goats
function Goat( options ){
  // defaults
  this.says = options.says || 'baaaz';

}

// A constructor for defining new cats
function Cat( options ){
  // defaults
  this.says = options.says || 'meowz';

}

//assign animal prototype to these animal types
Lion.prototype = new Animal();
Horse.prototype = new Animal();
Goat.prototype = new Animal();
Cat.prototype = new Animal();

// skeleton animal factory
function Zoo() {}

Zoo.prototype.pokeAnimals = function(){
  var lionSays = 'Lion Says '+lion.says+', ';
  var catSays = 'Cat Says '+cat.says+', ';
  var horseSays = 'Horse Says '+horse.says+', ';
  var goatSays = 'Goat Says '+goat.says+', ';

  var pokeRes = lionSays + catSays + horseSays + goatSays;
  console.log(pokeRes)
}

// Our Factory method for creating new Zoo instances
Zoo.prototype.createAnimal = function ( options ) {

  switch(options.animalType){
    case "lion":
      this.animalClass = Lion;
      break;
    case "horse":
      this.animalClass = Horse;
      break;
    case "goat":
      this.animalClass = Goat;
      break;
    case "cat":
      this.animalClass = Cat;
      break;
  }

  return new this.animalClass( options );

};

// Create an instance of our factory that makes lions
var lionFactory = new Zoo();
var lion = lionFactory.createAnimal( {
            animalType: "lion",
            color: "yellow",
            says: 'roar' } );

// Create an instance of our factory that makes horses
var horseFactory = new Zoo();
var horse = horseFactory.createAnimal( {
            animalType: "horse",
            color: "blue",
            says: 'neee' } );

// Create an instance of our factory that makes goats
var goatFactory = new Zoo();
var goat = goatFactory.createAnimal( {
            animalType: "goat",
            color: "green",
            says: 'baaa' } );

// Create an instance of our factory that makes cats
var catFactory = new Zoo();
var cat = catFactory.createAnimal( {
            animalType: "cat",
            color: "yellow",
            says: 'meow' } );




