// let book = {
//   "main title": "JavaScript", // These property names include spaces,
//   "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
//   for: "all audiences", // for is reserved, but no quotes.
//   author: {
//     // The value of this property is
//     firstname: "David", // itself an object.
//     surname: "Flanagan",
//   },
// };
// // let surname = book&& book.author && book.author.surname;
// let surname = book?.author?.surname;
// console.log(surname);


// Other reasons to use accessor properties include sanity checking of 
//property writes and returning different values on each property read: 

// This object generates strictly increasing serial numbers 
const serialnum = { 
    // This data property holds the next serial number. 
    // The _ in the property name hints that it is for internal use only. 
    _n: 0, 
    // Return the current value and increment it 
    get next() { return this._n++; },
    // Set a new value of n, but only if it is larger than current 
    set next(n) {
      if (n > this._n) this._n = n; 
      else throw new Error("serial number can only be set to a larger value");
     }};
    serialnum.next = 10; // Set the starting serial number 
    serialnum.next // => 10 
    serialnum.next // => 11: different value each time we get next