/** 
    Create a multidimensional array 
    let table = new Array(10); // 10 rows of the table 
    for(let i = 0; i < table.length; i++) {
        table[i] = new Array(10); // Each row has 10 columns 
        }
        // Initialize the array 
        for(let row = 0; row < table.length; row++) {
            for(let col = 0; col < table[row].length; col++) { 
                table[row][col] = row*col; 
            } 
        }
        // Use the multidimensional array to compute 5*7 
        table[5][7] // => 35
        console.log(table);
        console.log(table[5][7]);
*/

/*
    let emptyArray = [];
    console.log(emptyArray.some(x=>x>8),emptyArray.every(x=>x<9));
*/

/*
    let a = [1,2,3,4,5]; 
    a.reduce((x,y) => x+y, -15) // => 15; the sum of the values 
    a.reduce((x,y) => x*y, 1) // => 120; the product of the values 
    a.reduce((x,y) => (x > y) ? x : y) // => 5; the largest of the values
    console.log(a.reduce((x,y) => x + x, 0));
*/

/*
    // Compute 2^(3^4). Exponentiation has right-to-left precedence 
    let a = [2, 3, 4]; 
    console.log(a.reduceRight((acc,val) => Math.pow(val,acc))) // => 2.4178516392292583e+24
    console.log(Math.pow(2, Math.pow(3,4)));
*/

/* 
    let n = 'mohammad';
    console.log(n.split("").join(" ").toUpperCase());
*/

function isArrayLike(o) { 
    if (o && // o is not null, undefined, etc. 
        typeof o === "object" && // o is an object 
        Number.isFinite(o.length) && // o.length is a finite number 
        o.length >= 0 && // o.length is non- negative
        Number.isInteger(o.length) && // o.length is an integer 
        o.length < 4294967295) 
        { // o.length < 2^32 - 1 
            return true; // Then o is array- like.
            } else { return false; // Otherwise it is not.
                }
 }

 let a = {"0": "a", "1": "b", "2": "c", length:3 };
//  let a = {"0": "a", "1": "b", "2": "c", length: 3n};
// let a = new Object();
// let a = new Array();
// let a = "string";
 console.log(isArrayLike(a));
 console.log(a);
 a.length = 1;
 console.log(isArrayLike(a));
 