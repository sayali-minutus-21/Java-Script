const name="Sayali";
const age="23";

//console.log(name +age +"Value");

//console.log(`My name is ${name} my age is ${age}`);

//string declaration
const myName=new String('Sayali_tippe');

// console.log(myName[0]);
// console.log(myName.__proto__.String);

//console.log(myName.length);//11

//console.log(myName.toUpperCase());

//console.log(myName.charAt(2));character on that position

//console.log(myName.indexOf('t'));//position of character

// const newName=myName.substring(0,6);//starts with first position and ends before the last position doesont consider last place
// console.log(newName);

// const sliceStr=myName.slice(-2,0);
// console.log(sliceStr);

// const trimStr="    Sayali   ";
// console.log(trimStr);
// console.log(trimStr.trim());//removed spaces from the string
// console.log(trimStr.trimEnd());//removed spaces from end 
// //trimstart()..removed spaces from start

const url="https://sayali.com/Sayali%21tippe";
console.log(url.replace('%21','_'));//replace the mentioned part

console.log(url.includes('say'));//boolean 

const str="my name is sayali";
console.log(str.split(''));
