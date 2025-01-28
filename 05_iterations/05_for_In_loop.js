//for in loop
//we can use it to iterate object

const myobj={
    usr1:"Sayali",
    usr2:"Sonali",
    usr3:"Shivani"
}

for (const key in myobj) {
    //console.log(`${key} is for ${myobj[key]}`);
}

//can we use for in with aray=yes

const language=["js","java","c++"];

for (const key in language) {
   //console.log(key);
   //prints keys
   //console.log(`${key} =${language[key]}`);
}

//with map=we cant use forin loop for map
//because we cant iterate over map
const map=new Map();

map.set('IN',"India");
map.set('USA',"America");
map.set('fr','france');

for (const key in map) {
    console.log(key);
    
}