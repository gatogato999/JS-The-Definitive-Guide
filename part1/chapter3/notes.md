# chapter 3 : Types, Values, and Variables

## 1. Overview
* **JavaScript types can be divided into two categories**:
    - **primitive types** :
        * numbers.
        * strings
        * booleans
        * null (sole member of its own special type).
        * undefined (sole member of its own special type).
    - **object types**.
        * basic:
            - Object :  is a collection of properties where each property has a name and a value
            - arrays.
        * others :
            - Set
            - Map
            - Various "typed array"
            - RegExp
            - Date
            - Error

* **JavaScript differs from more static languages in**: 
    - functions and classes are not just part of the language syntax
    - they are themselves values that can be manipulated by JavaScript programs. 
    - Like any JavaScript value that is not a primitive value, 
    - functions and classes are a specialized kind of object.
    

* JavaScript’s object types are mutable and its primitive types are immutable.

## 2. Numbers :

### 2.1 Integer Literals
- JavaScript does not make a distinction between integer values and floating-point values.
-  All numbers in JavaScript are represented as floating-point values.
- it can represent numbers as large as 
    ±1.7976931348623157E+308 
- and as small as ±5E−324
- A hexadecimal literal begins with 0x or 0X, followed by a string of hexadecimal digits.
- ``` js    
    0xff // => 255: (15*16 + 15) 
    0xBADCAFE // => 195939070
    ```
- you can also express integers in binary (base 2) or octal (base 8) using the prefixes 0b and 0o (or 0B and 0O) instead of 0x:
- ``` js
    0b10101 // => 21: (1*16 + 0*8 + 1*4 + 0*2 + 1*1) 
    0o377 // => 255: (3*64 + 7*8 + 7*1) 
    ```
### 2.2 Floating-Point Literals
- Floating-point literals may also be represented using exponential notation: 
a real number followed by the letter e (or E), followed by an optional plus or minus sign, followed by an integer exponent.
- ``` js
    // [digits][.digits][(E|e)[(+|-)]digits]
    3.14 
    2345.6789 
    .333333333333333333 
    6.02e23 // 6.02 × 10²³ 
    1.4738223E-32 // 1.4738223 × 10⁻³²
  ```

- You can use underscores within numeric literals to break long literals up into chunks that are easier to read:
- ``` js 
    let billion = 1_000_000_000; // Underscore as a thousands separator. 
    let bytes = 0x89_AB_CD_EF; // As a bytes separator. 
    let bits = 0b0001_1101_0111; // As a nibble separator. 
    let fraction = 0.123_456_789; // Works in the fractional part, too.
    ```

### 2.3 Arithmetic in JavaScript

* #### basic operation :
    - \+ for addition, 
    - \- for subtraction, 
    - \* for multiplication, 
    - / for division,
    - % for modular
    - ** for exponentiation.

* #### complex operations:
    - ``` js
         Math.pow(2,53) // => 9007199254740992: 2 to the power 53 
        Math.round(.6) // => 1.0: round to the nearest integer 
        Math.ceil(.6) // => 1.0: round up to an integer 
        Math.floor(.6) // => 0.0: round down to an integer 
        Math.abs(-5) // => 5: absolute value 
        Math.max(x,y,z) // Return the largest argument 
        Math.min(x,y,z) // Return the smallest argument 
        Math.random() // Pseudo-random number x where 0 <= x < 1.0 
        Math.PI // π: circumference of a circle / diameter 
        Math.E // e: The base of the natural logarithm 
        Math.sqrt(3) // => 3**0.5: the square root of 3 
        Math.pow(3, 1/3) // => 3**(1/3): the cube root of 3 
        Math.sin(0) // Trigonometry: also Math.cos,Math.atan..
        Math.log(10) // Natural logarithm of 10 
        Math.log(100)/ Math.LN10 // Base 10 logarithm of 100 
        Math.log(512)/ Math.LN2 // Base 2 logarithm of 512 
        Math.exp(3) // Math.E cubed
        ```
    - those are defined by ES6:

    - ``` js 
        Math.cbrt(27) // => 3: cube root 
        Math.hypot(3, 4) // => 5: square root of sum of squares of all arguments 
        Math.log10(100) // => 2: Base-10 logarithm 
        Math.log2(1024) // => 10: Base-2 logarithm 
        Math.log1p(x) // Natural log of (1+x); accurate for very small x 
        Math.expm1(x) // Math.exp(x)-1; the inverse of Math.log1p() 
        Math.sign(x) // -1, 0, or 1 for arguments <, ==, or > 0 
        Math.imul(2,3) // => 6: optimized multiplication of 32-bit integers 
        Math.clz32(0xf) // => 28: number of leading zero bits in a 32-bit integer 
        Math.trunc(3.9) // => 3: convert to an integer by truncating fractional part 
        Math.fround(x) // Round to nearest 32-bit float number 
        Math.sinh(x) // Hyperbolic sine. Also Math.cosh(), Math.tanh() 
        Math.asinh(x) // Hyperbolic arcsine. Also Math.acosh(), Math.atanh()
        ```
    -   When the result of a numeric operation is larger than the largest representable number (overflow), the result is a special infinity value, **Infinity**.
    - If underflow occurs from a negative number, JavaScript returns a special value known as “negative zero.”
    - Division by zero is not an error in JavaScript: it simply returns infinity or negative infinity.
    - js have special not-a-number value **NaN** it arise from:
        * zero divided by zero
        * divide infinity by infinity
        * square root of a negative number
        * use arithmetic operators with non-numeric operands that cannot be converted to numbers.
    - Number object properties:
        ``` js
            Infinity // A positive number too big to represent 
            Number.POSITIVE_INFINITY // Same value 1/0 // => Infinity 
            Number.MAX_VALUE * 2 // => Infinity; overflow 

            -Infinity // A negative number too big to represent 
            Number.NEGATIVE_INFINITY // The same value 
            -1/0 // => -Infinity 
            -Number.MAX_VALUE * 2 // => -Infinity 
            
            NaN // The not-a-number value 
            Number.NaN // The same value, written another way 
            0/0 // => NaN 
            Infinity/Infinity // => NaN

            Number.MIN_VALUE/2 // => 0: underflow 
            -Number.MIN_VALUE/2 // => -0: negative zero 
            -1/Infinity // -> -0: also negative 0 -0

            // The following Number properties are defined in ES6 
            Number.parseInt() // Same as the global parseInt() function 
            Number.parseFloat() // Same as the global parseFloat() function 

            Number.isNaN(x) // Is x the NaN value? 
            Number.isFinite(x) // Is x a number and finite?
            Number.isInteger(x) // Is x an integer? 
            Number.isSafeInteger(x) // Is x an integer -(2**53) < x < 2**53? 

            Number.MIN_SAFE_INTEGER // => -(2**53 - 1) 
            Number.MAX_SAFE_INTEGER // => 2**53 - 1 
            Number.EPSILON // => 2**-52: smallest difference between numbers
        ```
    - The **not-a-number** value has one unusual feature in JavaScript: 
        * it does not compare equal to any other value, including itself. 
        * This means that you can’t write x === NaN to determine whether the value of a variable x is NaN.
        *  Instead, you must write x != x or Number.isNaN(x).

### 2.5 Arbitrary Precision Integers with BigInt

- bigint is a new numeric type 
- BigInt literals are written as a string of digits followed by a lowercase letter n.
- BigInt() as a function for converting regular js numbers or strings to BigInt values.
- js don't allow mix BigInt and other type.
- ``` js 
    1234n // A not-so-big BigInt literal 
    0b111111n // A binary BigInt 
    0o7777n // An octal BigInt 
    0x8000000000000000n // => 2n**63n: A 64-bit integer
    6n + 7 // => will raise a TypeError
    ```
### 2.6 Dates and Times
- timestamp that specifies the number of elapsed milliseconds since January 1, 1970: 
- ```js 
    let timestamp = Date.now(); // The current time as a timestamp (a number). 
    let now = new Date(); // The current time as a Date object. 
    let ms = now.getTime(); // Convert to a millisecond timestamp. 
    let iso = now.toISOString(); // Convert to a string in standard format.
    ```
## 3. **text**

### 3.1 string literal

- string in js is enclosed characters within a matched pair of single or double quotes or backticks (' or " or `).
- you can break a string literal across multiple lines by ending each line but the last with a backslash (\\).
- If you need to include a newline character in a single-quoted or double-quoted string literal, use the character sequence \n
- backtick syntax allows strings to be broken across multiple lines, and in this case, the line terminators are part of the string literal
- ``` js
    // A string representing 2 lines written on one line: 
    'two\nlines'
    // A one-line string written on 3 lines: 
    "one\
    long\
    line" 
    // A two-line string written on two lines: 
    `the newline character at the end of this line
        is included literally in this string`
    ```

### 3.2 Escape Sequences in String Literals
- the backslash character (\\)  represents a character that is not otherwise representable within the string.
- 
    | Sequence | Character represented | 
    | ------- | ------- |
    | \0 | The NUL character (\u0000) | 
    | \b | Backspace (\u0008) |
    | \t | Horizontal tab (\u0009) |
    | \n | Newline (\u000A) |
    | \v | Vertical tab (\u000B) |
    | \f | Form feed (\u000C) |
    | \r | Carriage return (\u000D) |
    | \\" | Double quote (\u0022) |
    | \\' | Apostrophe or single quote (\u0027) |
    | \\\ | Backslash (\u005C) |
    | \xnn | The Unicode character specified by the two hexadecimal digits nn |
    | \unnnn | The Unicode character specified by the four hexadecimal digits nnnn |
    | \u{n } | The Unicode character specified by the codepoint n, where n is one to six hexadecimal digits between 0 and 10FFFF (ES6) |

### 3.3 Working with strings 

- ```js
    // Start with some text. 
    let s = "Hello, world"; 

    // Obtaining portions of a string 
    s.substring(1,4) // => "ell": the 2nd, 3rd, and 4th characters. 
    s.slice(1,4) // => "ell": same thing 
    s.slice(-3) // => "rld": last 3 characters 
    s.split(", ") // => ["Hello", "world"]: split at delimiter string 

    // Searching a string 
    s.indexOf("l") // => 2: position of first letter l 
    s.indexOf("l", 3) // => 3: position of first "l" at or after 3 
    s.indexOf("zz") // => -1: s does not include the substring "zz" 
    s.lastIndexOf("l") // => 10: position of last letter l 

    // Boolean searching functions in ES6 and later 
    s.startsWith("Hell") // => true: the string starts with these 
    s.endsWith("!") // => false: s does not end with that 
    s.includes("or") // => true: s includes substring "or" 
    
    // Creating modified versions of a string 
    s.replace("llo", "ya") // => "Heya, world" 
    s.toLowerCase() // => "hello, world" 
    s.toUpperCase() // => "HELLO, WORLD" 
    s.normalize() // Unicode NFC normalization: ES6 
    s.normalize("NFD") // NFD normalization. Also "NFKC", "NFKD" 
    
    // Inspecting individual (16-bit) characters of a string 
    s.charAt(0) // => "H": the first character 
    s.charAt(s.length-1) // => "d": the last character 
    s.charCodeAt(0) // => 72: 16-bit number at the specified position 
    s.codePointAt(0) // => 72: ES6, works for codepoints >16 bits 
    
    // String padding functions in ES2017 
    "x".padStart(3) // => "   x": add spaces on the left to a length of 3 
    "x".padEnd(3) // => "x   ": add spaces on the right to a length of 3 
    "x".padStart(3, "*") // => "**x": add stars on the left to a length of 3 
    "x".padEnd(3, "-") // => "x--": add dashes on the right to a length of 3 
    
    // Space trimming functions. trim() is ES5; others ES2019 
    "   test   ".trim() // => "test": remove spaces at start and end 
    " test ".trimStart() // => "test ": remove spaces on left. Also trimLeft
    " test ".trimEnd() // => " test": remove spaces at right. Also trimRight 
    
    // Miscellaneous string methods 
    s.concat("!") // => "Hello, world!": just use + operator instead 
    "<>".repeat(5) // => "<><><><><>": concatenate n copies. ES6
    ```

### 3.4 Template Literals

- Everything between the ${ and the matching } is interpreted as a JavaScript expression. 
- Everything outside the curly braces is normal string literal text. 
- The expression inside the braces is evaluated and 
- then converted to a string and inserted into the template
- A template literal may include any number of expressions.
- ES6 has one built-in tag function: String.raw(). It returns the text within backticks without any processing of backslash escapes

### 3.5 Pattern Matching 
- JavaScript defines a datatype known as a regular expression (or RegExp) for describing and matching patterns in strings of text.
- ``` js
    /^HTML/; // Match the letters H T M L at the start of a string 
    /[1-9][0-9]*/; // Match a nonzero digit, followed by any # of digits 
    /\bjavascript\b/i; // Match "javascript" as a word, case- insensitive
    pattern.test(text) // => true: a match exists 
    text.search(pattern) // => 9: position of first match text.match(pattern) // => ["1", "2", "3"]: array of all matches 
    text.replace(pattern, "#") // => "testing: #, #, #" 
    text.split(/\D+/) // => ["","1","2","3"]: split on nondigits
    ```
### 3.4 boolean
- The following values convert to, and therefore work like, false: 
    * undefined 
    * null 
    * 0
    * -0
    * NaN 
    * "" // the empty string

### 3.5 null and undefined

- null:
    * a special value that is usually used to indicate the absence of a value (that indicates “no object”). 
    * Using the typeof operator on null returns the string “object” .
- undefined :
    * It is the value of variables that have not been initialized 
    * and the value you get when you query the value of an object property or array element that does not exist.
- The equality operator == considers them to be equal. (Use the strict equality operator === to distinguish them.)

### 3.9 Type Conversions

- ``` js
    10 + " objects" // => "10 objects": Number 10 converts to a string 
    "7" * "4" // => 28: both strings convert to numbers 
    let n = 1 - "x"; // n == NaN; string "x" can't convert to a number 
    n + " objects" // => "NaN objects": NaN converts to string "NaN"
    ```
-   Conversion to numbers is just a little trickier.
- Strings that can be parsed as numbers convert to those numbers. 
- Leading and trailing spaces are allowed, 
- but any leading or trailing nonspace characters that are not part of a numeric literal cause the string-to-number conversion to produce NaN. 
- Some numeric conversions may seem surprising: 
    * true converts to 1, and 
    * false and the empty string convert to 0.
-   | Value | to String  | to Number  | to Boolean  |
    |-----|-----|-----|-----|
    |  undefined | "undefined" | NaN | false |
    | null | "null" | 0 | false | 
    | true | "true" | 1 | false | "false" |  0 |
    |   "" (empty string) | | 0 | false | 
    | "1.2" (nonempty, numeric) |  | 1.2 | true | 
    | "one" (nonempty, non-numeric) |  | NaN | true | 
    | 0 | "0" |  |  false |  
    | -0 | "0" |  | false |  
    | 1 (finite, non-zero) | "1" |  | true |  
    | Infinity | "infinity" |  | true |  
    | -Infinity | "-infinity" |  | true |  
    | NaN | "NaN" |  | false |  
    | {} (any object) |  |  | true |  
    | [] (empty array) | "" | 0 | true |  
    | [9] (one numeric element) | "9" | 9 | true |  
    | ['a'] (any other array) | use join() method | NAN | true |  
    | function(){} (any function) |  | NAN | true |  
    ||||

- **Explicit Conversions** : 
    * **for Strings**
    * ``` js 
        let n = 17; 
        let binary = "0b" + n.toString(2); // binary == "0b10001" 
        let octal = "0o" + n.toString(8); // octal == "0o21" 
        let hex = "0x" + n.toString(16); // hex == "0x11"

        let n = 123456.789; n.toFixed(0) // => "123457" 
        n.toFixed(2) // => "123456.79" 
        n.toFixed(5) // => "123456.78900" 
        n.toExponential(1) // => "1.2e+5" 
        n.toExponential(3) // => "1.235e+5" 
        n.toPrecision(4) // => "1.235e+5" 
        n.toPrecision(7) // => "123456.8" 
        n.toPrecision(10) // => "123456.7890"
      ```
    * **for numbers** 
    *  ``` js
        parseInt("3 blind mice") // => 3 
        parseFloat(" 3.14 meters") // => 3.14 
        parseInt("-12.34") // => -12 
        parseInt("0xFF") // => 255 
        parseInt("0xff") // => 255 
        parseInt("-0XFF") // => -255 
        parseFloat(".1") // => 0.1 
        parseInt("0.1") // => 0 
        parseInt(".1") // => NaN: integers can't start with "." 
        parseFloat("$72.47") // => NaN: numbers can't start with "$"

        parseInt("11", 2) // => 3: (1*2 + 1) 
        parseInt("ff", 16) // => 255: (15*16 + 15) 
        parseInt("zz", 36) // => 1295: (35*36 + 35) 
        parseInt("077", 8) // => 63: (7*8 + 7) 
        parseInt("077", 10) // => 77: (7*10 + 7)
       ```

### 3.10 Variable Declaration and Assignment

* ``` js
    let i = 0, j = 0, k = 0; 
    let x = 2, y = x*x; // Initializers can use previously declared variables
    let [x,y] = [1,2]; // Same as let x=1, y=2 
    [x,y] = [x+1,y+1]; // Same as x = x + 1, y = y + 1 
    [x,y] = [y,x]; // Swap the value of the two variables 
    [x,y] // => [3,2]: the incremented and swapped values

    let [x,y] = [1]; // x == 1; y == undefined 
    [x,y] = [1,2,3]; // x == 1; y == 2 
    [,x,,y] = [1,2,3,4]; // x == 2; y == 4

    let [x, ...y] = [1,2,3,4]; // y == [2,3,4]

    let [a, [b, c]] = [1, [2,2.5], 3]; // a == 1; b == 2; c == 2.5

    let points = [{x: 1, y: 2}, {x: 3, y: 4}]; // An array of two point objects 
    let [{x: x1, y: y1}, {x: x2, y: y2}] = points; // destructured into 4 variables. 
    (x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) // => true

    let points = { p1: [1,2], p2: [3,4] }; // An object with 2 array props 
    let { p1: [x1, y1], p2: [x2, y2] } = points; // destructured into 4 vars 
    (x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) // => true
    ```

