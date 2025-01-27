//Nullish Coalescing Operator (??):null undefined

let val1;
//val1=null ?? 10;
//??==> when we call it by db the response is not get directlyy,sometimes its empty so its difficult to  handle so thats why we are using ??
var1=undefined?? 15;

console.log(var1);//15
//?? => only for null & undefined

val1=null ?? 10 ?? 20
console.log(val1);


//terniary operator
//condition ?true :false

const price=100;

console.log(price <=80 ?"greater than 50":"less than 2")