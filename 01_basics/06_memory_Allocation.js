//Stack(primitive), Heap(Non-Primitive)

let myEmail="sayalitippe2001gmail.com"
let another=myEmail;
 another="sayugmail.com";

console.log(myEmail);//gives different mails because it maked copy of each 
console.log(another);


let usrOne={
    email:"sayu@gmail.com",
    desig:"software Engineer",
}

let usrTwo=usrOne;
usrTwo.email="sayali@gmail.com";
console.log(usrOne.email);//"sayali@gmail.com"
console.log(usrTwo.email);//"sayali@gmail.com"...reference..changes done in original object


