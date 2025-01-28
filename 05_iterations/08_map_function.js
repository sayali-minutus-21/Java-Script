//map function
//returns values on different conditions

const num=[1,2,3,4,5,6,7,8,9];
// const nums=num.map((num)=>{
//     return num+10;
// })
//console.log(nums);


const newNum=num.map((num)=> num*10).map((num)=>num+1).filter((num)=>num>=40);
//for multiple conditions we use map chaining
console.log(newNum);

//map().map().map().filter()