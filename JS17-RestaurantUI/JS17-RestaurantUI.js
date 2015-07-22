// JS16-KM.js
// We uppercase class conventions in title-case (FoodItem)

var FoodItem = function(name, calories, vegan, glutenFree, citrusFree)  {

// vegan is a reference to the actually value we will pass in
	// properties

	// name - string
	// calories - number
	// vegan - yes / no
	// glutenFree - yes / no
	// citrusFree - yes / no

this.name = name;
this.calories = calories;
this.vegan = vegan;
this.glutenFree = glutenFree;
this.citrusFree = citrusFree;


}

var chicken = new FoodItem("Roasted Chicken", 300, false, true, true);

var carrots = new FoodItem("Steamed Carrots", 80, true,
	true, true);

var lemonCake = new FoodItem("Lemon Cake", 650, true, false, false);

var tofu = new FoodItem("Grilled Tofu", 150, true, true, true)

var blackBeans = new FoodItem("Black Beans", 200, true, true, true)

var chocolatePudding = new FoodItem("Vegan Chocolate Pudding", 230, true, true, true)

var broccoli = new FoodItem("Lemon Pepper Broccoli", 90, true, true, false)

var margaritaBase = new FoodItem("Secret Margarita Mix", 350, true, true, false)

var tequila = new FoodItem("Patron Tequila", 100, true, true, true)

// Define a method for the FoodItem prototype
// so all our food items will have access to items

FoodItem.prototype.toString = function() {
	return this.name + "\n" 
	+ "calories: " + this.calories + "\n"
	+ "vegan: " + this.vegan + "\n"
	+ "gluten-free: " + this.glutenFree + "\n"
	+ "citrus-free: " + this.citrusFree + "\n"

}

// console.log(chicken.toString())
// console.log(carrots.toString())
// console.log(lemonCake.toString())
// // when chicken calls toString on itself, "this" refers to chicken.  "This" refers to the class instance that calls it.  You can think FoodItem as a class and chicken as an instance of that class.  
// // aBove we are crating an instance of our FoodItem class called checken

// // PART II //////////////////////////////////////////


var Drink = function(name, description, price, ingredients)  {



this.name = name;
this.description = description;
this.price = price;
this.ingredients  = ingredients;

}
Drink.prototype.toString = function() {

var stringIngredients = this.ingredients.map(function (ingredient) {
	return ingredient.toString()

}).join(", ")
// console.log(stringIngredients)
return this.name + "\n" 
	+ "description: " + this.description + "\n"
	+ "price:  $" + this.price + "\n"
	+ "ingredients: " + stringIngredients + "\n"
}

var margaritaDrink = new Drink ("Magical Margarita", "a healthy juice with alcohol added, just for fun", 8, [margaritaBase, tequila])

var chickenSmoothie = new Drink ("Chicken Meal Smoothie", "a delicious blend of a main dish, a side dish, and a dessert all in one handy smoothie. Ideal for people in a hurry.", 7, [chicken, carrots, lemonCake]);


	
// console.log(chickenSmoothie.toString())
// console.log(margaritaDrink.toString())
///////////////////////////////////////////////////////////

var Plate = function(name, description, price, ingredients) {

this.name = name;
this.description = description;
this.price = price;
this.ingredients = ingredients;


}
Plate.prototype.toString = function() {
	
	var stringIngredients = this.ingredients.map(function (ingredient) {
		return ingredient.toString()
	}).join(", ")
	// console.log(stringIngredients)
	return this.name + "\n"
	+ "description: " + this.description + "\n"
	+ "price: " + this.price + "\n"
	+ "ingredients: " + stringIngredients + "\n"

}
var veganPlate = new Plate ("Vegan Special", "a complete meal, including dessert!", 10, [tofu, blackBeans, chocolatePudding]);

var chickenVegPlate = new Plate("Bok Bok Delight", "chicken paired with two vegetables", 12, [chicken, carrots, broccoli]);

var burritoPlate = new Plate("Burrito Plate", 10, [chicken, broccoli, blackBeans]);

var guacamolePlate = new Plate("Guacamole Plate", 8, [tofu, blackBeans]);


///////////////////////////////////////////////////////


var Menu = function(plateDrinkArray) {

	this.plateDrinkArray = plateDrinkArray

}

Menu.prototype.toString = function() {

	var stringPlateDrinkArray = this.plateDrinkArray.map(function(plateDrink) {
		return plateDrink.toString()
	}).join()
	// console.log(stringPlateDrinkArray)

	return "menuItems: " + stringPlateDrinkArray + "\n"



}
var latestMenu = new Menu ([veganPlate, chickenVegPlate, chickenSmoothie, margaritaDrink]);


// // Menu will report on plates

console.log(veganPlate.toString())
console.log(chickenVegPlate.toString())
console.log(latestMenu.toString())


// ////////////////////////////////////////////////////

var Restaurant = function(name, latestMenu) {

	this.name = name
	this.latestMenu = latestMenu


}

Restaurant.prototype.toString = function() {

	return this.name + "\n" +
	this.latestMenu.toString();

	}
// }
  var latestRestaurant = new Restaurant("Mex-it-Up!", latestMenu);

console.log(latestRestaurant)
console.log(latestRestaurant.toString())

//////////////////////////////////////////////////////////////

Plate.create(Plate.prototype= function() {
	var menuItem = $("<div id=" + "description: " + this.description + "\n"
	+ "price: $" + this.price + "\n"
	+ "ingredients: " + stringIngredients + "\n"
	return menuItem;



}

// Restaurant.prototype.toString = function() {
      

// }

// console.log(latestRestaurant.name, latestRestaurant.Menu)



// Restaurant is a class and the latestRestaurant is an instance of that class

// like a rubber stamp;  the stamp is the class and everytime you make an image that is an instance of the stamp /class.


