// comentarios de una sola línea
/* comentarios de dos
o más líneas */


// function reverses the order of characters in a word
function rev(w){
	var revw = "";
	//loops over the characters in reverse order
   for (var i = w.length - 1; i >= 0; i--) {
      // adds characters to a new word
     revw = revw.concat(w[i]);
   }
   return revw;
}


//Quiz
/*
 * Programming Quiz: Converting Tempatures (2-2)
 *
 * Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
 *
 *     F = C x 1.8 + 32
 *
 * Log the fahrenheit variable to the console.
 *
 */

 var celsius = 12;
 var fahrenheit = celsius * 1.8 + 32; /* convert celsius to fahrenheit here */
 var result = fahrenheit
 console.log( result ); /* print out result here */


//Strings

var name = "James";
name[0];

var quote = "Stay awhile and listen!";
console.log(quote[6]);
