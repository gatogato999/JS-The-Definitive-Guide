# chapter 01 : hint of what lies ahead : 

* JavaScript was created at Netscape in the early days of the Web, and technically, “JavaScript” is a trademark licensed from Sun Microsystems (now Oracle) used to describe Netscape’s (now Mozilla’s) implementation of the language.

# 1. **Core JavaScript** :

## comments :
```js
// Anything following double slashes is a comment.
// Read the comments : they explain the code.
/* this is multi line comment */
```

## Types, Values, and Variables,
```js
// variable is a symbolic name for a value.
// Variables are declared with the var keyword:
 var x; // Declare a variable named x.
// Values can be assigned to variables with an = sign
x = 0; // Now the variable x has the value 0
x // => 0: A variable evaluates to its value.
// JavaScript supports several types of values
x = 1; // Numbers.
x = 0.01; // Just one Number type for integers
x = "hello world"; // Strings in quotation marks.
x = 'JavaScript'; // Single quote also delimit strings.
x = true; // Boolean values.
x = false; // The other Boolean value 
x = null; // a special value that means "no value".
x = undefined; // Undefined is like null. 
 ```

## Objects 
 ```js
// JavaScript's most important data type is the object.
// An object is a collection of name/value pairs, or a string to value map.
var book = { // Objects are enclosed in curly braces.
    topic: "JavaScript", // The property "topic" has value "JavaScript".
    fat: true // The property "fat" has value true.
}; // The curly brace marks the end of the object.
// Access the properties of an object with . or []:
book.topic // => "JavaScript"
book["fat"] // => true: another way to access property values.
book.author = "Flanagan"; // Create new properties by assignment.
book.contents = {}; // {} is an empty object with no properties.
 ```

 ## Arrays
```js
// JavaScript also supports arrays (numerically indexed lists) of values:
var primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [ and ].
primes[0] // => 2: the first element (index 0) of the array.
primes.length // => 4: how many elements in the array.
primes[primes.length-1] // => 7: the last element of the array.
primes[4] = 9; // Add a new element by assignment.
primes[4] = 11; // Or alter an existing element by assignment.
var empty = []; // [] is an empty array with no elements.
empty.length // => 0
```

## Array of objects and Objects of Arrays
```js 
// Arrays and objects can hold other arrays and objects:
var points = [ // An array with 2 elements.
    {x:0, y:0}, // Each element is an object.  
    {x:1, y:1}
];
var data = { // An object with 2 properties
    trial1: [[1,2], [3,4]], // The value of each property is an array.
    trial2: [[2,3], [4,5]] // The elements of the arrays are arrays.
};
```
* **An expression is a phrase of JavaScript that can be evaluated to produce a value.**
## Arithmetic operators
```js
// Operators act on values (the operands) to produce a new value.
// Arithmetic operators are the most common:
3 + 2 // => 5: addition
3 - 2 // => 1: subtraction
3 * 2 // => 6: multiplication
3 / 2 // => 1.5: division
points[1].x - points[0].x // => 1: more complicated operands work, too
"3" + "2" // => "32": + adds numbers, concatenates strings
```

## shorthand arithmetic operators
```js
// JavaScript defines some shorthand arithmetic operators
var count = 0; // Define a variable
count++; // Increment the variable
count--; // Decrement the variable
count += 2; // Add 2: same as count = count + 2;
count *= 3; // Multiply by 3: same as count = count * 3;
count // => 6: variable names are expressions, too.
```

## Equality and relational operators
```js
// Equality and relational operators test whether two values are equal,
// unequal, less than, greater than, and so on. They evaluate to true or false.
var x = 2, y = 3; // These = signs are assignment, not equality tests
x == y // => false: equality
x != y // => true: inequality
x < y // => true: less-than
x <= y // => true: less-than or equal
x > y // => false: greater-than
x >= y // => false: greater-than or equal
"two" == "three" // => false: the two strings are different
"two" > "three" // => true: "tw" is alphabetically greater than "th"
false == (x > y) // => true: false is equal to false
```

## Logical operators
```js
// Logical operators combine or invert boolean values
(x == 2) && (y == 3) // => true: both comparisons are true. && is AND
(x > 3) || (y < 3) // => false: neither comparison is true. || is OR
!(x == y) // => true: ! inverts a boolean value
```

* **A function is a named and parametrized block of JavaScript code that you define once,
and can then invoke over and over again.**

## Functions
```js
// Functions are parameterized blocks of JavaScript code that we can invoke.
    function plus1(x) { // Define a function named "plus1" with parameter "x"
    return x+1; // Return a value one larger than the value passed in
} // Functions are enclosed in curly braces
plus1(y) // => 4: y is 3, so this invocation returns 3+1
    var square = function(x) { // Functions are values and can be assigned to vars
    return x*x; // Compute the function's value
}; // Semicolon marks the end of the assignment.
square(plus1(y)) // => 16: invoke two functions in one expression
```

## Functions inside Objects
```js
// When functions are assigned to the properties of an object, we call
// them "methods". All JavaScript objects have methods:
var a = []; // Create an empty array
a.push(1,2,3); // The push() method adds elements to an array
a.reverse(); // Another method: reverse the order of elements
// We can define our own methods, too. The "this" keyword refers to the object
// on which the method is defined: in this case, the points array from above.
points.dist = function() { // Define a method to compute distance between points
     var p1 = this[0]; // First element of array we're invoked on
     var p2 = this[1]; // Second element of the "this" object
    var a = p2.x-p1.x; // Difference in X coordinates
    var b = p2.y-p1.y; // Difference in Y coordinates
    return Math.sqrt(a*a + // The Pythagorean theorem
 b*b); // Math.sqrt() computes the square root
};
points.dist() // => 1.414: distance between our 2 points
```
# 2. **Client-Side JavaScript**

## embedding JS within HTML files (external method)
```html
<head>
<script src="library.js"></script> <!-- include a library of JavaScript code -->
</head>
```

## embedding JS within HTML files (internal method)
```html
<p>This is a paragraph of HTML</p>
<script>
// And this is some client-side JavaScript code
// literally embedded within the HTML file
</script>
<p>Here is more HTML.</p>
</body>
```

## The window object
```js
<script>
function moveon() {
 // Display a modal dialog to ask the user a question
 var answer = confirm("Ready to move on?");
 // If they clicked the "OK" button, make the browser load a new page
 if (answer) window.location = "http://google.com";
}
// Run the function defined above 1 minute (60,000 milliseconds) from now.
setTimeout(moveon, 60000);
</script>
```
## Scripting Documents
```js
// Display a message in a special debugging output section of the document.
// If the document does not contain such a section, create one.
function debug(msg) {
 // Find the debugging section of the document, looking at HTML id attributes
 var log = document.getElementById("debuglog");
 
 // If no element with the id "debuglog" exists, create one.
 if (!log) {
 log = document.createElement("div"); // Create a new <div> element
 log.id = "debuglog"; // Set the HTML id attribute on it    
 log.innerHTML = "<h1>Debug Log</h1>"; // Define initial content
 document.body.appendChild(log); // Add it at end of document
 }
 // Now wrap the message in its own <pre> and append it to the log
 var pre = document.createElement("pre"); // Create a <pre> tag
 var text = document.createTextNode(msg); // Wrap msg in a text node
 pre.appendChild(text); // Add text to the <pre>
 log.appendChild(pre); // Add <pre> to the log
}
```
## Scripting CSS
```js
function hide(e, reflow) { // Hide the element e by scripting its style
 if (reflow) { // If 2nd argument is true
 e.style.display = "none" // hide element and use its space
 }
 else { // Otherwise
 e.style.visibility = "hidden"; // make e invisible, but leave its space
 }
}
function highlight(e) { // Highlight e by setting a CSS class
 // Simply define or append to the HTML class attribute.
 // This assumes that a CSS stylesheet already defines the "hilite" class
 if (!e.className) e.className = "hilite";
 else e.className += " hilite";
}
```
## The jQuery Library
```js
// jQuery code is easy to identify because it makes frequent use of a function named $(). Here is what the debug() function used previously looks like when rewritten to use jQuery:
function debug(msg) {
 var log = $("#debuglog"); // Find the element to display msg in.
 if (log.length == 0) { // If it doesn't exist yet, create it...
 log = $("<div id='debuglog'><h1>Debug Log</h1></div>");
 log.appendTo(document.body); // and insert it at the end of the body.
 }
 log.append($("<pre/>").text(msg)); // Wrap msg in <pre> and append to log.
}
```