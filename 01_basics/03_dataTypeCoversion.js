let amount="abc250";


let numamt=300;

let amt=null;

let bolamt=true;

console.log(typeof amount);
console.log(typeof(amount));

//number to number
let numamtInnumber=Number(numamt);//300
console.log(typeof numamtInnumber);
console.log(numamtInnumber);300

//parsing data
//String to number
let amountInnumber=Number(amount)//abc250
console.log(typeof amountInnumber);
console.log(amountInnumber);//Nan not a number

let amtInnumber=Number(amt)//null
console.log(typeof amtInnumber);//number
console.log(amtInnumber);//0

let booleanInnumber=Number(bolamt)//true
console.log(typeof booleanInnumber);//number
console.log(booleanInnumber);//1 ==> true=1, false=0

let isloggedIn="sayu";
//if we give empty string it will give true
//sayu=true
//1=true
//0=false
//""=false
let booleanIsLogIn=Boolean(isloggedIn);//1
console.log(booleanIsLogIn);//true

let sum=21;
let sumNum=String(sum);
console.log(sumNum);//21
console.log(typeof sumNum);//String


