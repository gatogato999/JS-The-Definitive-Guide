# Chapter 5. Statements
- JavaScript programs are nothing more than a sequence of statements to execute.
- By default, the JavaScript interpreter executes these statements one after another in the order they are written.
- we use some statements / control structure to alter this default order of execution.
## 5.1 Expression Statements
- The simplest kinds of statements in JavaScript are expressions that have side effects.
## 5.2 Compound and Empty Statements
- A statement block :
    * is simply a sequence of statements enclosed within curly braces.
    * a statement block combines multiple statements into a single compound statement.
    * statement block does not end with a semicolon.
- The empty statement is the opposite: 
    * it allows you to include no statements where one is expected.
    * it just an empty line except a ```;``` in it.
    *  useful when you want to create a loop that has an empty body
    * ``` for(let i=0;start<end+1; a[i] = start,i++,start++) ;```
    * accidental inclusion of a semicolon after the right parenthesis of a for loop, while loop, or if statement can cause frustrating bugs that are difficult to detect.
    * ``` js
            if ((a === 0) || (b === 0)); // Oops! This line does nothing... 
            o = null; // and this line is always executed.
        ```
    * When you intentionally use the empty statement, it is a good idea to comment your code.

## 5.3 Conditionals
- Conditional statements execute or skip other statements depending on the value of a specified expression.
- ``` js 
    if (expression) statement 

    if (expression) statement1 else statement2 

    switch(expression) { statements } 
    // The matching case is determined using the === identity operator
    ```

### 5.4 Loops :

- ``` js
    while (expression) statement // while(true) : create an infinite loop
    
    do statement while (expression); // body of the loop is always executed at least once

    for(initialize ; test ; increment) statement // usually this form

    for(expression;expression;expression)statement // u may not write those expression => infinite loop (unless break is used)
    
    ```

- ES6 defines a new loop statement: for/of :
    * it works with iterable objects.
    * ``` js
        let a = [1,2,3,4];
        for(let e of a) console.log(++e);// => 2,3,4,5
        
        let o = { x: 1, y: 2, z: 3 }; 
        for(let element of o) { // Throws TypeError because o is not iterable 
        console.log(element); }

        // u can use Object.keys() method
        let o = { x: 1, y: 2, z: 3 }; let keys = ""; 
        for(let k of Object.keys(o)) { keys += k; }
        keys // => "xyz"

        // or get the corresponding values with Object.values()
        let o = { x: 1, y: 2, z: 3 }; let values = "";
        for(let v of Object.values(o)){ values += v; }
        console.log(values) // => "123"

        // or  Object.entries() to get both 
        let pairs = ""; 
        for(let [k, v] of Object.entries(o)){ pairs += k+v; }
        pairs // => "x1y2z3"

        // u can use it with strings
        let frequency = {}
        for (let letter of "mississippi"){
            if (frequency[letter]){frequency[letter]++;}
            else{ frequency[letter]=1;}
        }
        console.log(frequency);// => {m: 1, i: 4, s: 4, p: 2}
        ```
    * **Note that strings are iterated by Unicode codepoint, not by UTF-16 character**. 
        -The string “I ♥🐈” has a .length of 5 (because the two emoji characters each require two UTF-16 characters to represent). But if you iterate that string with ```for/of```, the loop body will run three times, once for each of the three code points “I”, “♥”, and “🐈”
- **for/await** :
    * ES2018 introduces a new kind of iterator, known as an asynchronous iterator,
    * and a variant on the for/of loop,
    * known as the ```for/await``` loop that works with asynchronous iterators.
    * i'll attend to it in next chapters.(little complex);

- **for/in** : 
    * for/in loop works with any object after the ```in```. The ```for/of``` loop is new in ES6, but ```for/in``` has been part of JavaScript since the very beginning (which is why it has the more natural sounding syntax)

### 5.5 Jumps
- As the name implies, these cause the JavaScript interpreter to jump to a new location in the source code. 
   
#### 5.5.1 Labeled Statements

- Any statement may be labeled by preceding it with an identifier and a colon: ``` identifier: statement ```
- By labeling a statement, you give it a name that you can use to refer to it elsewhere in your program.
- You can label any statement, although it is only useful to label statements that have bodies, such as loops and conditionals.
- ``` js
    mainloop: while(token !== null) { 
        // Code omitted... 
        continue mainloop; // Jump to the next iteration of the named loop 
            // More code omitted... 
    }
    ```

#### 5.5.2 **break**

 - The ```break``` statement makes the interpreter jump to the end of a loop or other statement. 
- used alone, 
- causes the innermost enclosing loop or switch statement to exit immediately. 
- Its syntax is simple: ```break;```.
- You need the labeled form of the break statement when you want to break out of a statement that is not the nearest enclosing loop or a switch.
- A newline is not allowed between the ```break``` keyword and the labelname;

#### 5.5.3 **continue**

- ```continue``` makes the interpreter skip the rest of the body of a loop and jump back to the top of a loop to begin a new iteration.
- restarts a loop at the next iteration.
- similar to the break statement.
- syntax : ``` continue; ```
-  can also be used with a label: ```continue labelname;```
- line breaks are not allowed between the continue statement and its labelname.

#### 5.5.4 **return**
- The ```return``` statement makes the interpreter jump from a function invocation back to the code that invoked it and also supplies the value for the invocation.
- syntax: ``` return expression; ```
- ``` js
        // A function that has a return statement
        function square(x) { return x*x; } 
        square(2) // => 4
    ```
- With no return statement, 
    * a function invocation simply executes each of the statements in the function body
    * in turn until it reaches the end of the function and 
    * then returns to its caller. In this case, 
    * the invocation expression evaluates to undefined.
- a function returns to its caller when a return statement is executed, even if there are other statements remaining in the function body.
- The return statement can also be used without an expression to make the function return undefined to its caller.
- you cannot include a line break between the return keyword and the expression that follows it.

#### 5.5.5 yield

- its used to produce the next value in the generated sequence of values without actually returning
- ``` js
        // A generator function that yields a range of integers
        function* range(from, to) { 
            for(let i = from; i <= to; i++) { 
                yield i; 
                } 
            }
    ```

#### 5.5.6 throw

- The ```throw``` statement is a kind of interim return from a generator function.
- An **exception** is a signal that indicates that some sort of exceptional condition or error has occurred. 
- To **throw an exception** is to signal such an error or exceptional condition. 
- To **catch an exception** is to handle it —to take whatever actions are necessary or appropriate to recover from the exception. 
- In JavaScript, exceptions are thrown 
    * whenever a runtime error occurs and 
    * whenever the program explicitly throws one using the throw statement.
- The Error class and its subclasses are used when the JavaScript interpreter itself throws an error, and you can use them as well.
- ``` js
        function factorial(x) { // If the input argument is invalid, throw an exception! 
            if (x < 0) throw new Error("x must not be negative"); // Otherwise, compute a value and return normally 
            let f; for(f = 1; x > 1; f *= x, x--) /* empty */ ; return f; 
        }
        factorial(4) // => 24
    ```

#### 5.5.7 **try/catch/finally**

- The try/catch/finally statement : 
    * is JavaScript’s exception handling mechanism. 
    * The ```try``` clause of this statement simply defines the block of code whose exceptions are to be handled. 
    * The try block is followed by a ```catch``` clause, which is a block of statements that are invoked when an exception occurs anywhere within the try block.
    * The catch clause is followed by a ```finally``` block containing cleanup code that is guaranteed to be executed, regardless of what happens in the try block.
    * Both the catch and finally blocks are optional, but a try block must be accompanied by at least one of these blocks.
- the catch keyword is generally followed by an identifier in parentheses.
    * This identifier is like a function parameter.
    * When an exception is caught, 
        * the value associated with the exception (an Error object, for example) is assigned to this parameter.

- ``` js
        try {
                // Ask the user to enter a number 
                let n = Number(prompt("Please enter a positive integer", ""));
                // Compute the factorial of the number, assuming the input is valid 
                let f = factorial(n); // Display the result alert(n + "! = " + f); 
            }catch(ex) { 
                // If the user's input was not valid, we end up here 
                alert(ex); // Tell the user what the error is 
                }
    ```
- If a finally clause issues a return statement, the method returns normally, even if an exception has been thrown and has not yet been handled.
-  In ES2019 and later, you can omit the parentheses and the identifier and use the catch keyword bare in this case.

### 5.6 Miscellaneous Statements

#### 5.6.1 with 
- The with statement runs a block of code as if the properties of a specified object were variables in scope for that code. 
- avoid using it (should be deprecated)

#### 5.6.2 debugger
- The debugger statement normally does nothing. If, however, a debugger program is available and is running, then an implementation may (but is not required to) perform some kind of debugging action.

#### 5.6.3  “use strict”
-  is a directive introduced in ES5. Directives are not statements (but are close enough that).
- differences between the "use strict" directive and regular statements:
    *  It does not include any language keywords: the directive is just an expression statement that consists of a special string literal (in single or double quotes).
    * It can appear only at the start of a script or at the start of a function body, before any real statements have appeared
- Strict mode is a restricted subset of the language that fixes important language deficiencies and provides stronger error checking and increased security.
- The purpose of a "use strict" directive is to indicate that the code that follows (in the script or function) is strict code.

### 5.7 Declarations
- The keywords ```const```, ```let```, ```var```, ```function```, ```class```, ```import```, and ```export``` are not technically statements, but they look a lot like statements