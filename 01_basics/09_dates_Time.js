//Dates

// let currentDate=new Date();
// console.log(currentDate.toString());//Wed Jan 22 2025 14:19:08 GMT+0530 (India Standard Time)
// console.log(currentDate.toDateString());//Wed Jan 22 2025
// console.log(currentDate.toLocaleString());//22/1/2025, 2:19:08 pm
// console.log(typeof currentDate);//22/1/2025, 2:19:08 pm

//for specific date
// let myDate=new Date(2023,0,21);
// console.log(myDate.toString());//Sat Jan 21 2023 00:00:00 GMT+0530 (India Standard Time)

// let myDate=new Date(2023,0,21,5,3);
// console.log(myDate.toString());//Sat Jan 21 2023 05:03:00 GMT+0530 (India Standard Time)

// let myDate=new Date("01-14-2024");
// console.log(myDate.toString());//Sun Jan 14 2024 00:00:00 GMT+0530 (India Standard Time)

let myDate=new Date("2024-02-14");
// console.log(myDate.toString());//Wed Feb 14 2024 05:30:00 GMT+0530 (India Standard Time)

//time Stamp
let mytimeStamp=Date.now();
// console.log(mytimeStamp);//1737536202698
// console.log(myDate.getTime());

console.log(Math.floor(Date.now()/1000));


