# Chapter 4. Expressions and Operators
- An expression is a phrase of JavaScript that can be evaluated to produce a value.
## 4.1 Primary expressions 
- are constant or literal values, certain language keywords, and variable references.
- really basic and already been dealt with..
## 4.2 Object and array initializers
-  are expressions whose value is a newly created object or array.
- also been dealt with early

## 4.3 Function Definition
- A function definition expression defines a JavaScript function,
- and the value of such an expression is the newly defined function.

## 4.4 Property access expressions
- A property access expression evaluates to the value of an object property or an array element. 
- JavaScript defines two syntaxes for property access: 
    * ```expression . identifier``` 
    * ```expression [ expression ]```  
- With either type of property access expression
    * , the expression before the . or [ is first evaluated. 
    * If the value is null or undefined, the expression throws a TypeError,
    * since these are the two JavaScript values that cannot have properties.
- ``` js
    let o = {x: 1, y: {z: 3}}; // An example object 
    let a = [o, 4, [5, 6]]; // An example array that contains the object 

    o.x // => 1: property x of expression o
    o.y.z // => 3: property z of expression o.y 
    o["x"] // => 1: property x of object o 

    a[1] // => 4: element at index 1 of expression a 
    a[2]["1"] // => 6: element at index 1 of expression a[2]
    a[0].x // => 1: property x of expression a[0]
   ```
### 4.4.1 Conditional Property Access 
- in ES2020 a new kinds of property access expressions added:
    * ```expression ?. identifier ```
    * ```expression ?.[ expression ]```
-  In a regular property access expression using . or [],
    * you get a TypeError if the expression on the left evaluates to null or undefined. 
    * You can use ``` ?.``` and ```?.[]``` syntax to guard against errors of this type.
- property access with ```?.``` is ```“short-circuiting”```: if the sub-expression to the left of ```?.``` evaluates to ```null``` or ```undefined```, then the entire expression immediately evaluates to ```undefined``` without any further property access attempts.
- ```conditional chaining```
    ``` js
    let a ; //  => undefined
    a.b ; // => throw a Type error
    a?.b; //  => undefined
    a?.[b] // => undefined
    a?.b.c.s.f // => undefined
    ```
## 4.5 invocation expressions
- JS’s syntax for calling (or executing) a function or method.
- Every invocation expression includes a pair of parentheses and an expression before the open parenthesis. 
    * If that expression is a property access expression, then the invocation is known as a method invocation.
    * In method invocations, the object or array that is the subject of the property access becomes the value of the this keyword while the body of the function is being executed.

### 4.5.1 Conditional Invocation
- with ES2020 new ```?.()``` invocation syntax, 
    * if the expression to the left of the ?. evaluates to null or undefined, 
    * then the entire invocation expression evaluates to undefined
    * and no exception is thrown.
    * ```?.()``` only checks whether the left-hand side is null or undefined.
    * It does not verify that the value is actually a function.
    * Conditional invocation expressions with ```?.()``` work just as well for methods as they do for functions.
    * ``` js
        let foo = function(num){return num}
        let noo ;
        console.log(foo()); // => undefined
        console.log(foo(5)); // => 5
        console.log(noo(5)); // => throw TypeError : noo is not a func
        console.log(noo?.(5)); // => undefined
        ```

## 4.6 object creation expressions
- An object creation expression creates a new object and invokes a function (called a constructor) to initialize the properties of that object
- if no arguments are passed to the constructor function in an object creation expression, the empty pair of parentheses can be omitted.
- ``` js
    new Object()
    new Object
    ```
## 4.7 JavaScript operators
- some of ones i think i'ved missed :  
    ``` 
    A --> operator associativity
    N --> the number of operands.   
    types -->  the expected type → the result type
    R --> (right-to-left)
    L -->  (left-to- right)
    ```
    | Operator | Operation | A | N | types| 
    |----|----|----|----|----|
    | delete | Remove a property |  R  | 1  | lval→bool | 
    | << | Shift left | L | 2 | int,int→int| 
    | >> | Shift right with sign extension | L | 2 | int,int→int | 
    | >>> | Shift right with zero extension | L | 2 | int,int→int| 
    | instanceof | Test object class | L | 2 | obj,func→bool| 
    |~| Bitwise NOT | L | 1 ||
    | & | Compute bitwise AND | L | 2 | int,int→int|  
    | ^ | Compute bitwise XOR | L | 2 | int,int→int|  
    | \| | Compute bitwise OR | L | 2 | int,int→int|  
    | && | Compute logical AND | L | 2 | any,any→any|  
    | \|\| | Compute logical OR | L | 2 | any,any→any|  
    | ?? | Choose 1st defined operand | L | 2 | any,any→any|  
    | ?: | Choose 2nd or 3rd operand | R | 3 | bool,any,any→any| 
    ||||||
    
    - ``` js
        let a = {foo:"hi foo", goo:"hi goo"};
        console.log(a.foo); // => hi foo
        console.log(delete a.foo); // => true (remove foo from a)
        console.log(a.foo); // => undefined
        ```

- In practice, if you are at all unsure about the precedence of your operators, the simplest thing to do is to use parentheses to make the evaluation order explicit

## 4.8  Arithmetic Expressions
- The bitwise operators perform low-level manipulation of the bits in the binary representation of numbers.
- The bitwise operators expect integer operands and behave as if those values were represented as 32-bit integers rather than 64-bit floating- point values.
- NaN, Infinity, and -Infinity all convert to 0 when used as operands of these bitwise operators.
- All of these bitwise operators except >>> can be used with regular number operands or with BigInt operands.

## 4.9 Relational Expressions
- The === operator 
    * is known as the strict equality operator (or sometimes the identity operator),
    * and it checks whether its two operands are “identical”
    * using a strict definition of sameness. 
- The == operator 
    * is known as the equality operator; 
    * it checks whether its two operands are “equal”
    * using a more relaxed definition of sameness that allows type conversions.
- The != and !== operators test for the exact opposite of the == and === operators.
- For a more robust string-comparison algorithm, try the String.localeCompare() method, which also takes locale- specific definitions of alphabetical order into account.
- The in operator expects a left-side operand that is a string, symbol, or value that can be converted to a string.


## 4.10 logical expression

## 4.11 Assignment Expressions

- you may sometimes see the value of an assignment expression used as part of a larger expression.
- ``` js 
    (a=b) === 0 
    i = j = k = 0; // Initialize 3 variables to 0 
    ```
## 4.12 Evaluation Expressions (useless)

## 4.13  Miscellaneous Operators

### 4.13.1 The Conditional Operator (?:)
- this operator has three operands, 
    * the first goes before the ```?``` 
    * the second goes between the ```?``` and the ```:``` 
    * and the third goes after the ```:```
- The operands of the conditional operator may be of any type. 
    * The first operand is evaluated and interpreted as a boolean. 
        - If the value of the first operand is truthy,
            * then the second operand is evaluated, 
            * and its value is returned. 
        - Otherwise, if the first operand is falsy, 
            * then the third operand is evaluated 
            * and its value is returned. 
    * Only one of the second and third operands is evaluated; never both.
- ``` js
    greeting = "hello " + (username ? username : "there"); 
    //This is equivalent to :
    greeting = "hello "; 
    if (username) { greeting += username; } 
    else { greeting += "there"; }
    ```
### 4.13.2 First-Defined (??)
- ``` js
    let options={timeout: 0,title: "",verbose: false, n:null};
    options.timeout ?? 1000 // => 0: as defined in the object 
    options.title ?? "Untitled" // => "": as defined in the object 
    options.verbose ?? true // => false: as defined in the object 
    options.quiet ?? false // => false: property is not defined 
    options.n ?? 10 // => 10: property is null

    (a ?? b) || c // ?? first, then || 
    a ?? (b || c) // || first, then ?? 
    a ?? b || c // SyntaxError: parentheses are required
    ```
### 4.13.3 The typeof Operator
- ``` js
    typeof(null) // => "object"  
    typeof(NaN) // => "number"
    ```

### 4.13.4 The delete Operator
- ``` js
    let o = { x: 1, y: 2}; // Start with an object 
    delete o.x; // Delete one of its properties 
    "x" in o // => false: the property does not exist anymore 
    let a = [1,2,3]; // Start with an array 
    delete a[2]; // Delete the last element of the array 
    2 in a // => false: array element 2 doesn't exist anymore 
    a.length // => 3: note that array length doesn't change, though

    let o = {x: 1, y: 2}; 
    delete o.x; // Delete one of the object properties; returns true. 
    typeof o.x; // Property does not exist; returns "undefined". 
    delete o.x; // Delete a nonexistent property; returns true. 
    delete 1; // This makes no sense, but it just returns true.
    // Can't delete a variable; returns false, or SyntaxError in strict mode. 
    delete o; // Undeletable property: returns false, or TypeError in strict mode. 
    delete Object.prototype;
    ```
### 4.13.5 The await Operator (not yet)

### 4.13.5 The await Operator (useless)

