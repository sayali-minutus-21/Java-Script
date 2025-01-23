//two ways to declare object
//1.Singleton-Object made by constructor
//2.literals

//Symbol declaration
const symb=Symbol("key");
//object literals
const user={
    name:"Sayali"
    ,age:23,
    "fname":"Sayu",
    [symb]:"mykey",//[symb] is used to define symbol
    location:"Kolhapur",
    email:"sayu@gmail.com",
    isLoggedin:false,
    lastLogedIN:["fRIDAY"]
}

// console.log(user.email);
// console.log(user["email"]);

// console.log(user["fname"]);

// console.log(user[symb]);

// user.email="Sayalitippefmail.com";
// console.log(user.email);

// Object.freeze(user);//restricting modification
// user.email="Sayu@gmail";
// console.log(user.email);
// console.log(user);
// {
//     name: 'Sayali',
//     age: 23,
//     fname: 'Sayu',
//     location: 'Kolhapur',
//     email: 'Sayalitippefmail.com',
//     isLoggedin: false,
//     lastLogedIN: [ 'fRIDAY' ],
//     [Symbol(key)]: 'mykey'
//   }

user.greet=function(){
    console.log("Hello from grret");
}

user.gretting=function(){
    console.log(`Hello ,${this.name}`);
}
//console.log(user.grret);//[Function (anonymous)]

user.greet();
user.gretting();