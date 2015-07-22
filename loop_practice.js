// console.log("test")

// var number = 0
// while(number <= 500){
// 	console.log(number);
// 	number = number+100;

// }

// var number = 1
// while(number <= 64) {
// 	console.log(number);
// 	number = number*2;

// }

// for(var i = 0; i <= 10; i = i + 2) {
// 	console.log(i);
// }

// for (var i = 3; i <= 15; i = i + 3) {
// 	console.log(i);
// }





// Rafael's Lecture pm JUNE 22

// var days = ["monday", "Tuesday", [1, 2, 3]
// you can put arrays inside of an arrays
// console.log(days.length)
// // access individual elements with bracket notation
// How do you access Tuesday from the array above?
// console.log(days[1])  will get you Tuesday
// Think of arrays as lockers with numbers that you can 
// open up and look inside.  You might want to perform
// a piece of logic on every element within an array

// for ( var i = 0; i < days.length; i++) {
// colnsole.log(days[i])


// }


// The first part above is the initializer var i = 0
// runs once

// The second part is the loop conditional.  Tells 
// whether or not a statement is true, which would make 
// it keep looping.

// The third part is the incrementer
// Second and third parts keep running until the first 
// part is false.

// i++
// i+=1
// i = i + 1
// These all say the same thing, increment by one

// for ( var i = 0; i< days.length; i++ ) {
// 	if ( days[i]==="Saturday" {
// 		alert ("Party!")
// 	}
// }
// else if ( days[i]) ==="Sunday"{
// alert("Take a nap")

// }

// else {
// 	alert("work...work...work")

// }

// If you want to change information in an array...
// Treat an array like a list.  They are ordered and 
// usually that is for a reason.  

// To add new elements, use an array method called 
// PUSH.  PUSH is a property of an array but its also 
// a function

// days.push();

// will end an element to the end of the array

// Ex. days.push("RaphaelDay");

// now list of weekdays above would show RaphaelDay 
// the end of the list

// You do not need to know the length of an element
// to add to the array

// To take off values you use POP
// Pop will REMOVE  the LAST element

// ex. days.pop();

// days.pop()
// days.pop()
// days.pop()

// will just keep taking of the last values

// OBJECTS can hold other values
// Like a row of lockers with names on them but not 
// with numbers.  
// OBJECTS have a literal notation
// var movie = {}  the curly bracket denotes an empty 
// object

// You will hear the term name:value pair or key: 
// value pair

// var movie = {
// 	title : "Sharknado II",
// 	genre : "Science Fiction",
// 	rating: 8,
// }

// on each line we have one property (a key and a 
// 	value together are a property)
// The value above is Sharknado II

// The properties above are strings

// movie["title"]

// Use brackets to access a property

// console.log(movie.genre)  You can use dot
// notation instead of quotation marks

// var property = prompt("Which property do we
// 	want to check?")
// console.log(movie["property"]);

// Dot notation may be more convenient but bracket 
// notation is the only way to look up dynamic 
// properties on an object 

// To add new properties to an object
//  movie.year = 2013;
//  or 
//  movie["year"] = 2013 

//  These will do the same thing

//  It is often useful to loop over OBJECTS
//  You can use a 

//  for (var key in movie ) {
//  	console.log("The " + key = " of the movie is ")
//  	+ movie[key]
// 	+ ".");
// }

// Key above is an arbitrary label but good to use
// In the example above: title, genre, rating and 
// year are all keys

// Arrays are ordered; objects are unordered
// Objects are only identified by their key

// var HTTM = {
// 	title : "Hot Tub Time-Machine",
// 	genre : "Historical Autobiography",
// 	rating : 11,


// var movies = [];

// END OF RAFAEL'S LECTURE JUNE 22

// var repeatThree = " ";
// var i, j, m;



// for (i = 1; i <= 3; i++){
// 	for (j = 1; j <=3; j++) {
// 		console.log(i)
// 	}
// }



// i doesn't change until the parent loop is ready 
// for it's next iteration

// The outer loop controls everything
// The outer loop executes the code inside ofit every 
// iteration.  When you have a for-loop i side a fffor-loop
// the inside for loop will complete itself before
// the outer loop starts its next iteration

// Looking at console in dev tools...
// The outer loop (i)
// shows on the left and the inner loop (j)
// shows on the right (for above)

// for (var i = 3; i <= 15; i = i + 3) {
// 	console.log(i);
// }

// for (var i = 9; i >=1; i -= 1){
// 	console.log(i);
// }

<<<<<<< HEAD

// Loop Practice 1
// Problem 1

// for(var i = 0; i <= 500; i = i + 100){
// 	console.log(i);
// }

// Problem 2
// for (var i = 1; i <=64; i = i*2){
// 	console.log(i)
// }

// Problem 3

// for (var i = 1; )

// Problem 4

// for (var i = 1; i <= 3; i++){
// 	for (var j = 1; j <= 3; j++){
// 		console.log(i, j)
// 		}
// }

// Problem 5

// for (var i = 0; i <= 10; i = i + 2){
// 	console.log(i)
// }

// Problem 6

// for (var i = 3; i <= 15; i = i + 3){
// 	console.log(i)
// }

// for (var i = 9; i >= 0; i--)
// 	console.log(i)

// for (var i = 0; i <= 3; i++){
// 	for (var j = 0; j <= 3; j++){
// 		console.log(j)


// 	}
// }

// LOOP PRACTICE #2

// USE FILTER to grab certain items from an array and "get rid" of the 
// rest (ex.  you want to make a new array of only even numbers from a mixed 
// array of numbers)

// FILTER
// Useful for filtering things out.  Most useful when working with an arrayof items;  like
// items that have different properties (ex list of dogs with properties of breed and
// temperament). Each fruit in the list below is an object

// var fruits = [
// 	{
// 		name : "pineapple",
// 		growsOnTree : false
// 	},

// 	{ 	name : "banana",
// 		growsOnTree : true

// 	}

// ]

// var treeFruit = function(fruit) {
// 	return fruit.growsOnTree
// }

// The treeFruit function is our callback for filter
// filter is a method on an array

// fruits.filter(treeFruit) (Could get rid of this line or set it to a variable)
// console.log(fruits.filter(treeFruit))

var animals = ["rat", "cat", "butterfly", "marmot", "ocelot"];
// for (var i=0; i<animals.length; i++) {
// 	console.log(animals[i]);
// }

var animals = [
	{
		name : "rat",
		onlyInWild : false,
		startsWithVowel : false,
	},
	
	{
		name : "cat",
	    onlyInWild : false,
	    startsWithVowel : false,
	},

	
	{	name : "butterfly",
		onlyInWild : false,
		startsWithVowel : false,
	},

	{  name : "marmot",
	   onlyInWild : true,
	   startsWithVowel : false,
	
	},

	{  name : "ocelot",
	   onlyInWild : true,
	   startsWithVowel : true,
	}

]

		

// Problem 1	
// var vowelFirst = function(eachAnimal) {
// 	return !eachAnimal.startsWithVowel

// }

// console.log(animals.filter(vowelFirst))



// Problem 2
		

		// for (var i = 0; i < animals.length; i += 2) {
		// 	console.log(animals[i])
		// }

// SQUARE BRACKETS LET US GET INTSO AN ARRAY AND GRAB VALUES
	


// Problem 3	
// 
// console.log (animals.reverse())
// or

	for (var i = animals.length; i >= 0; i--) {
		console.log(animals[i])

	}


// Problem 4

 console.log (animals.push)


    
=======
for (var i = 0; i <= 3; i++) {
	for (var j = 0; j <= 3; j++){
		console.log(j)
	}
}







>>>>>>> 2576873e233ff01965c15972f5dcd4e242cf8bb3











