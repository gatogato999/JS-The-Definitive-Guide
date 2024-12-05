// 2.4 Binary Floating-Point and Rounding Errors
/**
 * Because of rounding error, the difference between the approximations 
 * of .3 and .2 is not exactly the same as the difference between 
 * the approximations of .2 and .1.
 *  It is important to understand that this problem is not specific to JavaScript:
 *  it affects any programming language that uses binary floating-point numbers.
 */
// let x = .3 - .2; // thirty cents minus 20 cents 
// let y = .2 - .1; // twenty cents minus 10 cents 
// x === y // => false: the two values are not the same! 
// x === .1 // => false: .3-.2 is not equal to .1
// y === .1 // => true: .2-.1 is equal to .1 (its 0.99999999998).



// Cannot mix BigInt and other types
/**
 * Although the standard +, -, *, /, %, and ** operators work with BigInt,
 *  it is important to understand that you may not mix operands of 
 * type BigInt with regular number operands. 
 * This may seem confusing at first, but there is a good reason for it. 
 * If one numeric type was more general than the other, 
 * it would be easy to define arithmetic on mixed operands to
 * simply return a value of the more general type. 
 * But neither type is more general than the other: BigInt can represent 
 * extraordinarily large values, making it more general than regular numbers. 
 * But BigInt can only represent integers, making the regular JavaScript 
 * number type more general. There is no way around this problem, 
 * so JavaScript sidesteps it by simply not allowing mixed operands to 
 * the arithmetic operators.
 */
// let f = 5n;
// let g = 5;
// console.log(g + f); // => will raise a TypeError

