# Chapter 6 Objects

## 6.1 Introduction to Objects
- An object is a composite value: it aggregates multiple values (primitive values or other objects) and allows you to store and retrieve those values by name.

## 6.2 Creating Objects

### 6.2.1 Object Literals
- simplest form, an object literal is a comma- separated list of colon-separated name:value pairs, enclosed within curly braces.
- ``` js
        let empty = {}; // An object with no properties 

        let point = { x: 0, y: 0 }; // Two numeric properties 

        let p2 = { x: point.x, y: point.y+1 }; // More complex values 

        let book = { 
            "main title": "JavaScript", // These property names include spaces, 
            "sub-title": "The Definitive Guide", // and hyphens, so use string literals. 
            for: "all audiences", // for is reserved, but no quotes. 
            author: {
                 // The value of this property is 
                 firstname: "David", // itself an object. 
                 surname: "Flanagan" 
                 } 
                 };
    ```

### 6.2.2 Creating Objects with new
- The new operator creates and initializes a new object.
- The new keyword must be followed by a function invocation.
- A function used in this way is called a **constructor** and serves to initialize a newly created object.
- ``` js
        let o = new Object(); // Create an empty object: same as {}. 
        let a = new Array(); // Create an empty array: same as []. 
        let d = new Date(); // Create a Date object representing the current time 
        let r = new Map(); // Create a Map object for key/value mapping 
    ```

### 6.2.3 Prototypes
- Almost every JavaScript object has a second JavaScript object associated with it. 
- This second object is known as a prototype, and the first object inherits properties from the prototype.
- objects created by ```new Object()``` inherits from ```Object.prototype```, just as the object created by ```{}``` does. Similarly, the object created by ```new Array()``` uses ```Array.prototype``` as its prototype.
- ```Object.prototype``` is one of the rare objects that has no prototype: it does not inherit any properties.

### 6.2.4 Object.create()
- ``` js
        let o1 = Object.create({x: 1, y: 2}); // o1 inherits properties x and y. 
        o1.x + o1.y // => 3

        let o2 = Object.create(null); // o2 inherits no props or methods.

        let o3 = Object.create(Object.prototype); // o3 is like {} or new Object().

        let o = { x: "don't change this value" }; library.function(Object.create(o)); // Guard against accidental modifications
    ```

## 6.3 Querying and Setting Properties
- To obtain the value of a property, use the dot (```.```) or square bracket(```[]```) operators.
-  If using square brackets, the value within the brackets must be an expression that evaluates to a string(or a value that can be converted to a string or to a Symbol) that contains the desired property name.
- ``` js
        let author = book.author; // Get the "author" property of the book. 
        let name = author.surname; // Get the "surname" property of the author. 
        let title = book["main title"]; // Get the "main title" property of the book.

        book.edition = 7; // Create an "edition" property of 
        book. book["main title"] = "ECMAScript"; // Change the "main title" property.
    ```

### 6.3.1 Objects As Associative Arrays
- javaScript objects are associative arrays (an array indexed by strings rather than by numbers.)
- using array notation offers flexibility to access properties of an object with string expressions.
- ``` js
        function addstock(portfolio, stockname, shares) {
            portfolio[stockname] = shares; 
        }

        function computeValue(portfolio) { 
            let total = 0.0; 
            for(let stock in portfolio) { // For each stock in the portfolio: 
                let shares = portfolio[stock]; // get the number of shares 
                let price = getQuote(stock); // look up share price 
                total += shares * price; // add stock value to total value 
                }
            return total; // Return total value. 
        }
    ```
### 6.3.2 Inheritance
- Property assignment examines the prototype chain only to determine whether the assignment is allowed.
- ``` js 
        let o = {}; // o inherits object methods from Object.prototype 
        o.x = 1; // and it now has an own property x.

        let p = Object.create(o); // p inherits properties from o and Object.prototype 
        p.y = 2; // and has an own property y. 
        
        let q = Object.create(p); // q inherits properties from p, o, and... 
        q.z = 3; // ...Object.prototype and has an own property z. 

        let f = q.toString(); // toString is inherited from Object.prototype 

        q.x + q.y // => 3; x and y are inherited from o and p
    ```
- The fact that inheritance occurs when querying properties but not when setting them is a key feature of JavaScript because it allows us to selectively override inherited properties.
- ``` js
        let unitcircle = { r: 1 }; // An object to inherit from 
        let c = Object.create(unitcircle); // c inherits the property r
        c.x = 1; c.y = 1; // c defines two properties of its own 
        c.r = 2; // c overrides its inherited property 
        unitcircle.r // => 1: the prototype is not affected
    ```

### 6.3.3 Property Access Errors
- An attempt to set a property ```p``` of an object ```o``` fails in these circumstances: 
    * **```o``` has an own property ```p``` that is read-only**: it is not possible to set read-only properties.
    * **```o``` has an inherited property ```p``` that is read-only**: it is not possible to hide an inherited read-only property with an own property of the same name.
    * **```o``` does not have an own property ```p```**; ```o``` does not inherit a property ```p``` with a setter method, and ```o’s``` extensible attribute  is false. Since ```p``` does not already exist in ```o```, and if there is no setter method to call, then ```p``` must be added to ```o```. But if ```o``` is not extensible, then no new properties can be defined on it.
- ``` js 
        book.subtitle // => undefined: property doesn't exist
        let len = book.subtitle.length; // !TypeError: undefined doesn't have length
    ```

## 6..4 Deleting Properties
- The delete operator removes a property from an object ( own properties, not inherited ones).
- ``` js
        delete book.author; // The book object now has no author property. 
        delete book["main title"]; // Now it doesn't have "main title", either.
    ```
- A delete expression evaluates to true if
    * the delete succeeded or
    * if the delete had no effect (such as deleting a nonexistent property). 
    * when used (meaninglessly) with an expression that is not a property access expression.
- ``` js
        let o = {x: 1}; // o has own property x and inherits property toString 
        delete o.x // => true: deletes property x 
        delete o.x // => true: does nothing (x doesn't exist) but true anyway 
        delete o.toString // => true: does nothing (toString isn't an own property) 
        delete 1// => true: nonsense, but true anyway
    ```
- In strict mode, attempting to delete a non- configurable property causes a TypeError. In non-strict mode, delete simply evaluates to false
- ``` js
        // In strict mode, all these deletions throw TypeError instead of returning false 
        delete Object.prototype // => false: property is non- configurable 
        var x = 1; // Declare a global variable 
        delete globalThis.x // => false: can't delete this property 
        function f() {} // Declare a global function 
        delete globalThis.f // => false: can't delete this property either
    ```
- When deleting configurable properties of the global object in non-strict mode, you can omit the reference to the global object and simply follow the delete operator with the property name
- ``` js
        globalThis.x = 1; // Create a configurable global property (no let or var) 
        delete x // => true: this property can be deleted
    ```
- In strict mode, however, delete raises a SyntaxError if its operand is an unqualified identifier like x, and you have to be explicit about the property access:
- ``` js
        delete x; // SyntaxError in strict mode delete 
        globalThis.x; // This works
    ```
    
## 6.5 Testing Properties (of object)
- **```in``` operator** :  It returns true if the object has an own property or an inherited property by that name
- ``` js    
        let o = { x: 1 }; "x" in o // => true: o has an own property "x" 
        "y" in o // => false: o doesn't have a property "y" 
        "toString" in o // => true: o inherits a toString property
    ```
-  **```hasOwnProperty()```** method of an object tests whether that object has an own property with the given name. It returns false for inherited properties
- ``` js    
        let o = { x: 1 }; o.hasOwnProperty("x") // => true: o has an own property x 
        o.hasOwnProperty("y") // => false: o doesn't have a property y 
        o.hasOwnProperty("toString") // => false: toString is an inherited property
    ```
- **``` propertyIsEnumerable()```** It returns true only if the named property is an own property and its enumerable attribute is true.
- ``` js    
        let o = { x: 1 }; o.propertyIsEnumerable("x") // => true: o has an own enumerable property x 
        o.propertyIsEnumerable("toString") // => false: not an own property 
        Object.prototype.propertyIsEnumerable("toString") // => false: not enumerable
    ```
- it is often sufficient to simply query the property and use !== to make sure it is not undefined.
- ``` js    
        let o = { x: 1 }; o.x !== undefined // => true: o has a property x 
        o.y !== undefined // => false: o doesn't have a property y 
        o.toString !== undefined // => true: o inherits a toString
    ```
- in can distinguish between properties that do not exist and properties that exist but have been set to undefined.
- ``` js
        let o = { x: undefined }; // Property is explicitly set to undefined 
        o.x !== undefined // => false: property exists but is undefined
        "x" in o // => true: the property exists
    ```

## 6.6 Enumerating Properties
- To guard against enumerating inherited properties with for/in, you can add an explicit check inside the loop body 
- ``` js 
        for(let p in o) { 
            if (!o.hasOwnProperty(p)) continue; // Skip inherited properties 
        }
        for(let p in o) { 
            if (typeof o[p] === "function") continue; // Skip all methods 
            }
    ```

- ES6 formally defines the order in which the own properties of an object are enumerated. 
    * Object.keys(), 
    * Object.getOwnPropertyNames(),
    * Object.getOwnPropertySymbols(), 
    * Reflect.ownKeys().

## 6.7 Extending Objects
-  to copy the properties of one object to another
- ```Object.assign()```
    * expects two or more objects as its arguments.
    * It modifies and returns the first argument, which is the target object,
    * but does not alter the second or any subsequent arguments, which are the source objects.
- ``` js
        Object.assign(o, defaults); // overwrites everything in o with defaults

        o = Object.assign({}, defaults, o);
    ```

## 6.8 Serializing Objects
- Object serialization is the process of converting an object's state to a string from which it can later be restored.
- The functions JSON.stringify() and JSON.parse() serialize and restore JavaScript objects.
- Objects, arrays, strings, finite numbers, true, false, and null are supported and can be serialized and restored. 
- NaN, Infinity, and -Infinity are serialized to null.
- Date objects are serialized to ISO-formatted date strings
- ``` js
        let o = {x: 1, y: {z: [false, null, ""]}}; // Define a test object 
        let s = JSON.stringify(o); // s == '{"x":1,"y":{"z": [false,null,""]}}' 
        let p = JSON.parse(s); // p == {x: 1, y: {z: [false, null, ""]}}
    ```

## 6.9 Object Methods

#### 6.9.1 toString():
- takes no arguments;
- it returns a string that somehow represents the value of the object on which it is invoked.
- many classes define their own versions of toString()

#### 6.9.2  toLocaleString()
- return a localized string representation of the object.

#### 6.9.3 valueOf()
-  convert an object to some primitive type other than a string—typically, a number.

#### 6.9.4  toJSON()

## 6.10 Extended Object Literal Syntax

#### 6.10.1 Shorthand Properties
- ``` js 
        let x = 1, y = 2; 
        let o = { x, y }; 
        o.x + o.y // => 3
    ```

#### 6.10.2 Computed Property Names
- ``` js 
        const PROPERTY_NAME = "p1"; 
        function computePropertyName() { 
            return "p" + 2; 
            }

        let p = { 
            [PROPERTY_NAME]: 1,
            [computePropertyName()]: 2 
            };
        p.p1 + p.p2 // => 3
    ```

#### 6.10.3 Symbols as Property Names
- ``` js 
        const extension = Symbol("my extension symbol"); 
        let o = { [extension]: { /* extension data stored in this object */ }
        };
        o[extension].x = 0; // This won't conflict with other properties of o
    ```

#### 6.10.4 Spread Operator
- if you find yourself using ```...``` within a loop 
    * or recursive function as a way to accumulate data into one large object, 
    * you may be writing an inefficient O(n^2) algorithm that will not scale well as n gets larger.
- ``` js 
        let position = { x: 0, y: 0 }; 
        let dimensions = { width: 100, height: 75 }; 
        // objects are “spread out” into the rect object literal
        let rect = { ...position, ...dimensions }; // as if they had been written literally inside
        rect.x + rect.y + rect.width + rect.height // => 175

        // the value of that property will be the one that comes last
        let o = { x: 1 }; let p = { x: 0, ...o }; 
        p.x // => 1: the value from object o overrides the initial value 
        let q = { ...o, x: 2 }; 
        q.x // => 2: the value 2 overrides the previous value from o.

        // only spreads the own properties of an object, not any inherited ones: 
        let o = Object.create({x: 1}); // o inherits the property x 
        let p = { ...o }; 
        p.x // => undefined
    ```

#### 6.10.5 Shorthand Methods
- When you write a method using this shorthand syntax,
- the property name can take any of the forms that are legal in an object literal: in addition to a regular JavaScript identifier
- ``` js 
        let square = { 
            area() {return this.side * this.side; },
            side: 10 
            };

        square.area() // => 100
    ```

#### 6.10.6 Property Getters and Setters
- they look like ordinary methods defined using the ES6 shorthand 
- except that getter and setter definitions are prefixed with get or set.
- ``` js 
        let o = { 
            // An ordinary data property 
            dataProp: value, 
            // An accessor property defined as a pair of functions. 
            get accessorProp() { return this.dataProp; }, 
            set accessorProp(value) { this.dataProp = value; } 
        };
    ```