

// Problem 1

// Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
// getName({ name: 'Luisa', age: 25 }) should return 'Luisa':

// var personalInfo = {name : "Luisa", age : 25 };
// console.log(personalInfo.name);

// GOT IT

// Problem 2
// Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
// totalLetters(['javascript', 'is', 'awesome']) should return 19
// totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24


// var testArray = ["javascript", "is", "awesome"];

// var makeString = testArray.join("");

// var lettersOnly = makeString.length;

// 	console.log(lettersOnly)


// var totalLetters = function(length)
// (above you will find the length of the array)

// Got it




// Problem 3
// Write a function called 'keyValue' which takes two arguments and returns a new object with a key of the first argument and the value of the second argument.
// 
// Example given: keyValue('city', 'Denver') should return Object {city: "Denver"}
   
// var keyValue = function(key, value) {
// 	var objectIMade = {};  
// 	objectIMade[key] = value;
// 	return objectIMade;

// }

// console.log(keyValue ("dog", "Murphy"))

// 	FIRST CREATE THE VARIABLE YOU NEED

// 	USE BRACKET NOTATION WHEN YOU ARE NOT SURE WHAT THE KEY WILL BE CALLED AND YOU WANT TO PASS A VARIABLE THROUGH IT

//  we create an empty object literal above on line 50 witih the curly brackets  


// Problem 4

// Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.
// negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
// negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'

// var negativeIndex = function(array, index){
// console.log(array, index)
// 	var   positiveIndex = array.length + index
// 	 return array[positiveIndex]
// }
// console.log(negativeIndex(["chipmunk", "sqirrel", "gopher", "rabbit"], -3))

// Expressions evaluate to a value;  above the expression is what is inside of the
// second console log

// GOT IT

// 	Arrays have a length and each element is at a certain index
// 	think about how the length, the positive index, and the negative index are  targeting
// 	the object we want to get.  The length of the above array is 4. Squirrel is at index
// 	1.  OUr negative index is negative 3.  

// If we add the index to the length of the array we will get back the normal/positve index

// 	
// Problem 5
// 
// Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function won't actually modify
// removeM('family') should return 'faily'
// removeM('memory') should return 'eory'

// var removeM = function(string){

// 	var removeM = string.split("m");

// 	 return removeM.join("");


// }
//  console.log(removeM("meaty"))
//  console.log(removeM("memory"))


// GOT IT




// Problem 6
// Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format KEY IS VALUE on separate lines.
// printObject({ a: 10, b: 20, c: 30 }) 
// // // a is 10
// // // b is 20
// // // c is 30

// var printObject = function(key, value) {
	

// 	console.log(key + " is " + value)

// }




// // printObject({ firstName: 'pork', lastName: 'chops' }) should print:
// // firstName is pork
// // lastName is chops


// // Problem 7

// // Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.
// // vowels('alabama') should return ['a', 'a', 'a', 'a']
// // vowels('What evil odd ducks!') should return ['a', 'e', 'i', 'o', 'u']

// // Problem 8
// // Write a function called 'twins' which takes an array and returns true if every adjacent pair of items in the array is the same.
// // twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true
// // twins(['a', 'a', 'b', 'c', 'd', 'd']) should return false
// // twins(['a', 'a', 'b', 'z']) should return false
// // twins(['a', 'a', undefined]) should return false


// // if length of array is modulus 2
// // go thru each element and check the index i +=2

// // Problem 9
// // Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. If you find an item that is true, the function should return true immediately and not continue checking further values.
// // or([false, false, true, false]) should return true
// // or([false, false, false]) should return false
// // or([]) should return false



// // Problem 10
// // Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).
// // unique(['a', 'b', 'a', 'c', 'd', 'd']) should return ['a', 'b', 'c', 'd']
// // unique(['todd', 'avery', 'maria', 'avery']) should return ['todd', 'avery', 'maria']


var Person = function (firstName) {
	this.firstName = firstName;
	console.log("Person instantiated")

};

















