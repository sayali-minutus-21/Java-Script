//high order array loops

//for of 
// ["","",""];
// [{},{},{}]

const arr=[1,2,3,4,5];
//using array obj
for (const n of arr) {
    //console.log(n);
}

//using string obj
const grreting="Hello world";
for (const g of grreting) {
    //console.log(`each char in greeting ${g}`);
    
}

//Maps
//object (key value pair
//follows insertion order
//keys are unique

const map=new Map();

map.set('IN',"India");
map.set('USA',"America");
map.set('fr','france');
//map.set('IN',"India");//it cant take duplicate

//console.log(map);

for (const [key,value] of map) {
    //console.log(key, ':-',value);
}



