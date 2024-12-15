let o = {x:1, y:2, m(a,b){ return a + b}};
function f(){ return "i return string";};

console.log(o.m(o.x,4)) // => 5
o.a = f;
console.log(o.a());
console.log(o["m"](o.x,o.y));
console.log();
