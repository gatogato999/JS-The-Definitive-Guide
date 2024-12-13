# Arrays
-  JavaScript arrays are ```untyped```: 
   -  an array element may be of any type, 
   -  and different elements of the same array may be of different types. 
   -  Array elements may even be objects or other arrays.
-  JavaScript arrays are ```dynamic```: 
   -  they grow or shrink as needed, 
   -  and there is no need to declare a fixed size for the array when you create it 
   -  or to reallocate it when the size changes. 
-  JavaScript arrays may be ```sparse```: 
   -  the elements need not have contiguous indexes, 
   -  and there may be gaps.
-  Arrays inherit properties from ```Array.prototype```, which defines a rich set of array manipulation methods
----------
  
1. ## Creating Arrays
   1.  ### Array Literals
      ```javascript
            // simply a comma-separated list of array elements within square brackets.
            let empty = []; // An array with no elements 
            let primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements 
            let misc = [ 1.1, true, "a", ]; // 3 elements of various types + trailing comma

            // they may be arbitrary expressions
            let base = 1024; let table = [base, base+1, base+2, base+3];

            // can contain object literals or other array literals: 
            let b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];

            let count = [1,,3]; // Elements at indexes 0 and 2. No element at index 1 
            // Array literal syntax allows an optional trailing comma
            let undefs = [,,]; // An array with no elements but a length of 2
      ```
   
      2. ### The Spread Operator
      ```javascript
            let a = [1, 2, 3]; let b = [0, ...a, 4]; // b == [0, 1, 2, 3, 4]
            // The spread operator is a convenient way to create a (shallow) copy of an array: 
            let original = [1,2,3]; 
            let copy = [...original]; copy[0] = 0; // Modifying the copy does not change the original 
            original[0] // => 1

            // The spread operator works on any iterable object
            let digits = [..."0123456789ABCDEF"]; 
            digits // => ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E", "F"]

            //  easy way to remove duplicate elements from an array is to 
            // convert the array to a set and then immediately convert the set back to an array
            let letters = [..."mississippi"];
            letters; // => ['m', 'i', 's', 's','i', 's', 's', 'i','p', 'p', 'i' ]
            [...new Set(letters)]; // => [ 'm', 'i', 's', 'p' ]
      ```
   3. ### The Array() Constructor     
         ```javascript
                  // Call it with no arguments: 
                        let a = new Array();
                        // specify a length: 
                        let a = new Array(10);
      ```
        

   4. ### Array.of()
       ```javascript
            // because Array() constructor cannot be used to create an array with a single numeric element we use array.of()
            Array.of() // => []; returns empty array with no arguments 
            Array.of(10) // => [10]; can create arrays with a single numeric argument 
            Array.of(1,2,3) // => [1, 2, 3]
      ```    
   5. ### Array.from()
       ```javascript
            // Array.from(iterable) works like the spread operator[...iterable] does.
            // it makes a true-array copy of an array-like object. 
            // It is also a simple way to make a copy of an array: 
            let copy = Array.from(original);
      ```
2. ## Reading and Writing Array Elements
      ```javascript
            // You access an element of an array using the [] operator.
            let a = ["world"]; // Start with a one-element array 
            let value = a[0]; // Read element 0 a[1] = 3.14; // Write element 1 
            let i = 2; a[i] = 3; // Write element 2 
            a[i + 1] = "hello"; // Write element 3 
            a[a[i]] = a[0]; // Read elements 0 and 2, write element 3

            a.length // => 4

            let a = [true, false]; // This array has elements at indexes 0 and 1
            a[2] // => undefined; no element at this index. 
            a[-1] // => undefined; no property with this name.
      ```

3. ## Sparse Arrays
   - one in which the elements do not have contiguous indexes starting at 0.
   -  If the array is sparse, the value of the length property is greater than the number of elements.
   -  Sparse arrays can be created with 
      -  the Array() constructor or 
      -  simply by assigning to an array index larger than the current array length.

4. ## Array Length
     ```javascript
            a = [1,2,3,4,5]; // Start with a 5-element array. 
            a.length // => 5

            a.length = 3; // a is now [1,2,3]. 
            a.length = 0; // Delete all elements. a is []. 
            a.length = 5; // Length is 5, but no elements, like new Array(5)
    ``` 

5. ## Adding and Deleting Array Elements
      ```javascript
            //  just assign values to new indexes
            let a = []; // Start with an empty array. 
            a[0] = "zero"; // And add elements to it. 
            a[1] = "one";

            // using push() method 
            let a = []; // Start with an empty array 
            a.push("zero"); // Add a value at the end. a = ["zero"] 
            a.push("one", "two"); // Add two more values. a = ["zero", "one", "two"]

            // use delete operator
            // using delete on an array element does not alter the length property and 
            // does not shift elements with higher indexes down to fill in the gap that is left by the deleted property.
            let a = [1,2,3]; 
            delete a[2]; // a now has no element at index 2 
            2 in a // => false: no array index 2 is defined 
            a.length // => 3: delete does not affect array length
      ```
6. ## Iterating Arrays
      - the easiest way to loop through each of the elements of an array (or any iterable object) is with the ```for/of loop```.
      - Another good way to iterate arrays is with ```forEach()```.

7. ## Multidimensional Arrays
      - JavaScript does not support true multidimensional arrays, but you can approximate them with arrays of arrays.
   
8. ## Array Methods
   1. ### Array Iterator Methods
       1. #### FOREACH()
            - it iterates through an array, invoking a function you specify for each element.
            - it does not provide a way to terminate iteration before all elements have been passed to the function.
            - ```javascript
                  let data = [1,2,3,4,5], sum = 0; 
                  // Compute the sum of the elements of the array 
                  data.forEach(value => { sum += value; }); // sum == 15
                  // Now increment each array element 
                  data.forEach(function(v, i, a) { a[i] = v + 1; }); // data == [2,3,4,5,6]
            ```
       2. #### MAP() 
          -  it passes each element of the array on which it is invoked to the function you specify and 
          -  returns an array containing the values returned by your function
          -  (it will have the same length and the same missing elements of the original.).
          -  ```javascript
                  let a = [1, 2, 3]; 
                  a.map(x => x*x) // => [1, 4, 9]: the function takes input x and returns x*x
          ```
       3. #### FILTER() 
          -  returns an array containing a subset of the elements of the array on which it is invoked. 
          -  The function you pass to it should be predicate: a function that returns true or false.
          -   ``` js
                        let a = [5, 4, 3, 2, 1]; a.filter(x => x < 3) // => [2, 1]; values less than 3 
                        a.filter((x,i) => i%2 === 0) // => [5, 3, 1]; every other value
                        //  to close gaps and remove undefined and null elements
                        a = a.filter(x => x !== undefined && x !== null);
                  ```
       4. #### FIND() and FINDINDEX()
          -  they iterate through your array looking for elements for which your predicate function returns a truthy value.
          -  they stop iterating the first time the predicate finds an element. When that happens:
             -  find() returns the matching element, and 
             -  findIndex() returns the index of the matching element
          -  If no matching element is found, 
             -  find() returns undefined and 
             -  findIndex() returns -1
          -  ```javascript
                  let a = [1,2,3,4,5]; a.findIndex(x => x === 3) // => 2; the value 3 appears at index 2 
                  a.findIndex(x => x < 0) // => -1; no negative numbers in the array 
                  a.find(x => x % 5 === 0) // => 5: this is a multiple of 5 
                  a.find(x => x % 7 === 0) // => undefined: no multiples of 7 in the array
          ```
       5. #### EVERY() and  SOME()
           - those methods are array predicates: they apply a predicate function you specify to the elements of the array, then return true or false. 
           - The ```every()``` method is like the mathematical “for all” quantifier ```∀```
           - The ```some()``` method is like the mathematical “there exists” quantifier ```∃```
           - ```javascript
                  let a = [1,2,3,4,5]; 
                  a.every(x => x < 10) // => true: all values are < 10. 
                  a.every(x => x % 2 === 0) // => false: not all values are even.
                  a.some(x => x%2===0) // => true; a has some even numbers. 
                  a.some(isNaN) // => false; a has no non-numbers.
                  //TODO : know why it behave this way
                  let emptyArray = []; 
                  emptyArray.some(x=> x > 4);// => false
                  emptyArray.every(x=> x > 4)// => true
                  // HACK : its says by mathematical convention 
           ```
       6.  #### REDUCE() and REDUCERIGHT()
           -  ```reduce()``` : combine the elements of an array, using the function you specify, to produce a single value.
           - **it's better for you read their documentation (that will you save time)** .
           -  ```reduceRight()``` : works just like reduce(), except that it processes the array from highest index to lowest (right-to-left)
           -  ```javascript
                  let a = [1,2,3,4,5]; 
                  a.reduce((x,y) => x+y, 0) // => 15; the sum of the values 
                  a.reduce((x,y) => x*y, 1) // => 120; the product of the values 
                  a.reduce((x,y) => (x > y) ? x : y) // => 5; the largest of the values

                  // Compute 2^(3^4). Exponentiation has right-to-left precedence 
                  let a = [2, 3, 4]; 
                  a.reduceRight((acc,val) => Math.pow(val,acc)) // => 2.4178516392292583e+24
           ```

   2.  ### Flattening arrays 
        1.  #### flat()  
            - it creates and returns a new array that contains the same elements as the array it is called on, except that any elements that are themselves arrays are “flattened” into the returned array. 
            - ```javascript
                  [1, [2, 3]].flat() // => [1, 2, 3] 
                  [1, [2, [3]]].flat() // => [1, 2, [3]]
                  // with arg
                  let a = [1, [2, [3, [4]]]]; 
                  a.flat(1) // => [1, 2, [3, [4]]] 
                  a.flat(2) // => [1, 2, 3, [4]] 
                  a.flat(3) // => [1, 2, 3, 4] 
                  a.flat(4) // => [1, 2, 3, 4]
            ```
        2.  #### flatMap()
            - the returned array is automatically flattened as if passed to flat(). 
            - That is, calling ```a.flatMap(f)``` is the same as (but more efficient than) ```a.map(f).flat()```
            - ```javascript
                  let phrases = ["hello world", "the definitive guide"]; 
                  let words = phrases.flatMap(phrase => phrase.split(" ")); 
                  words // => ["hello", "world", "the", "definitive", "guide"];
                  ```

    3.  ### Adding arrays with concat()
        - ```javascript
            let a = [1,2,3]; 
            a.concat(4, 5) // => [1,2,3,4,5] 
            a.concat([4,5],[6,7]) // => [1,2,3,4,5,6,7]; arrays are flattened 
            a.concat(4, [5,[6,7]]) // => [1,2,3,4,5,[6,7]]; but not nested arrays 
            a // => [1,2,3]; the original array is unmodified
          ```  

    4.  ### Stacks and Queues with : push(), pop(), shift(), unshift()
      -    ```javascript
                  let stack = []; // stack == [] 
                  stack.push(1,2); // stack == [1,2]; 
                  stack.pop(); // stack == [1]; returns 2 
                  stack.push(3); // stack == [1,3] 
                  stack.pop(); // stack == [1]; returns 3 
                  stack.push([4,5]); // stack == [1,[4,5]] 
                  stack.pop() // stack == [1]; returns [4,5] 
                  stack.pop(); // stack == []; returns 1

                  demander.push(...suppler); // push all elements of one array to another

                  let q = []; // q == [] 
                  q.push(1,2); // q == [1,2] 
                  q.shift(); // q == [2]; returns 1 
                  q.push(3) // q == [2, 3] 
                  q.shift() // q == [3]; returns 2 
                  q.shift() // q == []; returns 3

                  let a = []; // a == [] 
                  a.unshift(1) // a == [1] 
                  a.unshift(2) // a == [2, 1] 
                  a = []; // a == [] 
                  a.unshift(1,2) // a == [1, 2]
            ```  
    5.  ### Subarrays with slice(), splice(), fill() , copyWithin()
        -  ```javascript
                  let a = [1,2,3,4,5]; a.slice(0,3); // Returns [1,2,3] 
                  a.slice(3); // Returns [4,5] 
                  a.slice(1,-1); // Returns [2,3,4] 
                  a.slice(-3,-2); // Returns [3]

                  let a = [1,2,3,4,5,6,7,8]; 
                  a.splice(4) // => [5,6,7,8]; a is now [1,2,3,4]
                  a.splice(1,2) // => [2,3]; a is now [1,4] 
                  a.splice(1,1) // => [4]; a is now [1]

                  let a = [1,2,3,4,5]; 
                  a.splice(2,0,"a","b") // => []; a is now [1,2,"a","b",3,4,5] 
                  a.splice(2,2,[1,2],3) // => ["a","b"]; a is now [1,2, [1,2],3,3,4,5]

                  let a = new Array(5); // Start with no elements and length 5
                  a.fill(0) // => [0,0,0,0,0]; fill the array with zeros 
                  a.fill(9, 1) // => [0,9,9,9,9]; fill with 9 starting at index
                   1 a.fill(8, 2, -1) // => [0,9,8,8,9]; fill with 8 at indexes 2, 3

                   let a = [1,2,3,4,5]; 
                   a.copyWithin(1) // => [1,1,2,3,4]: copy array elements up one 
                   a.copyWithin(2, 3, 5) // => [1,1,3,4,4]: copy last 2 elements to index 2 
                   a.copyWithin(0, -2) // => [4,4,3,4,4]: negative offsets work, too
        ```
     6.  ### Array Searching and Sorting Methods
         1.  #### INDEXOF() AND LASTINDEXOF()
             - ```javascript
                        let a = [0,1,2,1,0]; 
                        a.indexOf(1) // => 1: a[1] is 1 
                        a.lastIndexOf(1) // => 3: a[3] is 1 
                        a.indexOf(3) // => -1: no element has value 3
             ```  
         2.  #### INCLUDES()
             - It does not tell you the index of the value, only whether it exists.  
             - ```javascript
                        let a = [1,true,3,NaN]; 
                        a.includes(true) // => true 
                        a.includes(2) // => false 
                        a.includes(NaN) // => true 
                        a.indexOf(NaN) // => -1; indexOf can't find NaN
             ```
         3.  #### SORT()
             - ```javascript
                        let a = ["banana", "cherry", "apple"]; 
                        a.sort(); // a == ["apple", "banana", "cherry"]

                        let a = [33, 4, 1111, 222]; 
                        a.sort(); // a == [1111, 222, 33, 4]; alphabetical order 
                        a.sort(function(a,b) { // Pass a comparator function 
                              return a-b; // Returns < 0, 0, or > 0, depending on order 
                        }); // a == [4, 33, 222, 1111]; numerical order 
                        a.sort((a,b) => b-a); // a == [1111, 222, 33, 4]; reverse numerical order
             ``` 
         4.  #### REVERSE()
             - ```javascript
                        let a =[1,2,3];
                        a.reverse(); // => a = [3,2,1]
             ``` 
     7.  ### Array to String Conversions
         -  ```join()``` method converts all the elements of an array to strings and concatenates them, returning the resulting string.
         -  ```javascript
                  let a = [1, 2, 3]; 
                  a.join() // => "1,2,3" 
                  a.join(" ") // => "1 2 3" 
                  a.join("") // => "123" 
                  let b = new Array(10); // An array of length 10 with no elements 
                  b.join("-") // => "---------": a string of 9 hyphens
         ```
     8.  ### Static Array Functions
         - Array.of().
         - Array.from().
         - Array.isArray(). 
         - ```javascript
                  Array.isArray([]) // => true 
                  Array.isArray({}) // => false
         ```

9.  ## Array-Like Objects
    -  Since array-like objects do not inherit from Array.prototype, you cannot invoke array methods on them directly.
    -   You can invoke them indirectly using the Function.call method, however
    -  ```javascript
            let a = {"0": "a", "1": "b", "2": "c", length: 3}; // An array-like object 
            Array.prototype.join.call(a, "+") // => "a+b+c" 
            Array.prototype.map.call(a, x => x.toUpperCase()) // => ["A","B","C"] 
            Array.prototype.slice.call(a, 0) // => ["a","b","c"]: true array copy 
            Array.from(a) // => ["a","b","c"]:
    ```
10. ## Strings as Arrays
    - Keep in mind that strings are immutable values,
        -  so when they are treated as arrays, they are read-only arrays. 
        -  Array methods like push(), sort(), reverse(), and splice() modify an array in place and do not work on strings. 
        -  Attempting to modify a string using an array method does not, 
        -  however, cause an error: it simply fails silently. 
     -  ```javascript
            let s = "test"; 
            s.charAt(0) // => "t" 
            s[1] // => "e"
            Array.prototype.join.call("JavaScript", " ") // => "J a v a S c r i p t"
      ```
