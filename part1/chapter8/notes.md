#   Chapter 8. Functions

-   A function is a block of JavaScript code that is defined once but may be executed, or invoked, any number of times.
-   If a function is assigned to a property of an object, it is known as a method of that object.
-   Functions designed to initialize a newly created object are called constructors.
-   In JavaScript, functions are objects, and they can be manipulated by programs. 
-   JavaScript can assign functions to variables and pass them to other functions.
-   you can set properties on them and even invoke methods on them.

## 8.1 Defining Functions

### 8.1.1 Function Declarations
-   A function declaration actually declares a variable and assigns a function object to it. 
-   all of the functions declared in a block of JavaScript code will be defined throughout that block, and they will be defined before the JavaScript interpreter begins to execute any of the code in that block.
- ```javascript
        // Print the name and value of each property of o. Return undefined. 
        function printprops(o) { 
            for(let p in o) { 
                console.log(`${p}: ${o[p]}\n`);
            }
        }
        // Compute the distance between Cartesian points (x1,y1) and (x2,y2). 
        function distance(x1, y1, x2, y2) { 
            let dx = x2 - x1; let dy = y2 - y1; 
            return Math.sqrt(dx*dx + dy*dy); 
            }
            // A recursive function (one that calls itself) that computes factorials 
            // Recall that x! is the product of x and all positive integers less than it. 
            function factorial(x) { 
                if (x <= 1) return 1; 
                return x * factorial(x-1); 
            }
    ```

### 8.1.2 Function Expressions
-   A function expression, does not declare a variable:
    - it is up to you to assign the newly defined function object to a constant or variable if you are going to need to refer to it multiple times. 
    - It is a good practice to use const with function expressions so you don’t accidentally overwrite your functions by assigning new values.
-     these functions do not exist until the expression that defines them are actually evaluated.
-   ``` javascript 
        // This function expression defines a function that squares its argument. 
        // Note that we assign it to a variable 
        const square = function(x) { return x*x; }; 
        
        // Function expressions can include names, which is useful for recursion. 
        const f = function fact(x) { 
            if (x <= 1) return 1; 
            else return x*fact(x-1); }; 
            
            // Function expressions can also be used as arguments to other functions: 
            [3,2,1].sort(function(a,b) { return a-b; }); 
            
            // Function expressions are sometimes defined and immediately invoked: 
            let tensquared = (function(x) {return x*x;}(10));
     ```

### 8.1.3 Arrow Functions 
- In ES6, you can define functions using a particularly compact syntax known as “arrow functions.” 
- This syntax is reminiscent of mathematical notation and uses an ```=>``` “arrow” to separate the function parameters from the function body. 
- The function keyword is not used, and, since arrow functions are expressions instead of statements, there is no need for a function name, either.
- If the body of the function is a single return statement, :
    * you can omit the return keyword, 
    * the semicolon that goes with it, 
    * and the curly braces
- if an arrow function has exactly one parameter, you can omit the parentheses around the parameter list.
- an arrow function with no arguments at all must be written with an empty pair of parentheses.
- you must not put a new line between the function parameters and the ```=>``` arrow
- if the body of your arrow function is a single return statement but the expression to be returned is an object literal, 
    * then you have to put the object literal inside parentheses 
    * to avoid syntactic ambiguity between the curly braces of a function body and the curly braces of an object literal
- The concise syntax of arrow functions makes them ideal when you need to pass one function to another function
- Arrow functions differ from functions defined in other ways in : 
    * they inherit the value of the this keyword from the environment in which they are defined rather than defining their own invocation context as functions defined in other ways do.
    * they do not have a prototype property, which means that they cannot be used as constructor functions for new classes
- ``` javascript
        const sum = (x, y) => { return x + y; };
        const sum = (x, y) => x + y;
        const polynomial = x => x*x + 2*x + 3;
        const constantFunc = () => 42;

        const f = x => { return { value: x }; }; // Good: f() returns an object 
        const g = x => ({ value: x }); // Good: g() returns an object 
        const h = x => { value: x }; // Bad: h() returns nothing 
        const i = x => { v: x, w: x }; // Bad: Syntax Error
   ```

### 8.1.4 Nested Functions
- The interesting thing about nested functions is their variable scoping rules: they can access the parameters and variables of the function (or functions) they are nested within.
- ```javascript
        function hypotenuse(a, b) {
            function square(x) { 
                return x*x; 
            } 
            return Math.sqrt(square(a) + square(b)); 
        }
    ```


## 8.2 Invoking Functions

### 8.2.1 Function Invocation
- An invocation expression consists of a function
expression that evaluates to a function object followed by an open parenthesis, a comma-separated list of zero or more argument expressions, and a close parenthesis.
- ``` javascript
        printprops({x: 1}); 
        let total = distance(0,0,2,1) + distance(2,1,3,5); 
        let probability = factorial(5)/factorial(13);
    ```
- In ES2020 you can insert ```?.``` after the function expression and before the open parenthesis in a function invocation in order to invoke the function only if it is not null or undefined. That is, the expression``` f?.(x)``` is equivalent (assuming no side effects) to: ```(f !== null && f !== undefined) ? f(x) : undefined```

``` javascript

```
### 8.2.2 Method Invocation
- A method is nothing more than a JavaScript function that is stored in a property of an object.
- ``` javascript
        function f(){ return "i return string";};
        let o = {x:1, y:2, m(a,b){ return a + b}};

        o.m(o.x,4) // => 5
        o.m(o.x,o.y) // => 3
        o.a = f;
        o.a() // => "i return string"
        o["m"](x,y); // Another way to write o.m(x,y).
    ```
- When you write a method that does not have a return value of its own, 
    * consider having the method return this. 
    * If you do this consistently throughout your API, you will enable a style of programming known as method chaining1 
    * in which an object can be named once and then multiple methods can be invoked on it: 
    * example ```new Square().x(100).y(100).size(50).outline("red").fill("blue").draw();```

### 8.2.3 Constructor Invocation
- A constructor invocation creates a new, empty object that inherits from the object specified by the prototype property of the constructor. 
- Constructor functions are intended to initialize objects, 
- and this newly created object is used as the invocation context, so the constructor function can refer to it with the ```this``` keyword.
