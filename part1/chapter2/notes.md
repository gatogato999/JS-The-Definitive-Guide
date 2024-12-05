# chapter 02 Lexical Structure
--- 
1. ## The Text of a JavaScript Program 
* JavaScript is a case-sensitive language.
* JavaScript ignores spaces that appear between tokens in programs.
* In addition to the regular space character (\u0020), 
* JavaScript also recognizes tabs, assorted ASCII control characters, 
*   and various Unicode space characters as whitespace. 
* JavaScript recognizes newlines, carriage returns, 
*   and a carriage return/line feed sequence as line terminators.
---
2. ## Comments
``` js
// This is a single-line comment. 
/*This is also a comment */ 
// and here is another comment. 
/** This is a multi-line comment. The extra 
 *  characters at the start of
 *  each line are not a required part of the syntax;
 *  they just look cool! 
 */
```
---
3. ## literal
* A literal is a data value that appears directly in a program.
---
4. ## Identifier
* A JavaScript identifier **must** 
    - begin with a letter, an underscore (_), 
    - or a dollar sign ($). 
*  Subsequent characters can be 
    letters, digits, underscores, or dollar signs. 
* Digits are not allowed as the first character so that
    JavaScript can easily distinguish identifiers from numbers.
* reserved words cannot be used as regular identifiers. 

* Js reserved keywords :
``` js
as const export get null target void async continue extends 
if of this while await debugger false import return throw with
break default finally in set true yield case delete for instanceof
static try catch do from let super typeof class else function new 
switch var enum implements interface package private protected public
```     
---
6. ## Optional Semicolon
* JavaScript uses the semicolon (;) to separate statements from one another.
* This is important for making the meaning of your code clear
* without a separator, the end of one statement might appear 
    to be the beginning of the next, or vice versa.
* In JavaScript, you can usually omit the semicolon between two statements 
    if those statements are written on separate lines.
* **return**, **throw**, **yield**, **break**, and **continue** statements
    - are often stand alone, but they are sometimes followed by an identifier 
    or expression. 
    - If a line break appears after any of these words 
    (before any other tokens), 
    - JavaScript will always interpret that line break as a semicolon
    - and your code is likely to fail in a nonobvious way that is difficult to debug.
* same for  the **++** and **−−** operators
* same goes for functions defined using concise “arrow” syntax:
    - the => arrow itself must appear on the same line as the parameter list.
---
