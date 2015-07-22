console.log("hello")
// 
// $(document).on("ready", function()) {
	

var allQuotes = function(quote, author, rating) {

	this.quote = quote
	this.author = author
	this.rating = rating

}

var quote2 = new allQuotes("Art washes away from the soul the dust of everyday life", 'Pablo Picasso', 5);

var quote1 = new allQuotes("The face of a child can say it all, especially the mouth part of the face", "Jack Handy", 3);


var quote3 = new allQuotes("Change must come through the barrel of a gun.", "Mao Tse Tung", 1);



allQuotes.prototype.toString = function() {
		
	return this.quote + "\n" 
	+ "by: " + this.author + "\n"
	+ "rating: " + this.rating + "\n"

		 

}

console.log(quote1.toString())