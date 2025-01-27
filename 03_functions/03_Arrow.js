const usr={
    usrName:"Sayali",
    age:23,

welcomemsg: function(){
console.log(`${this.usrName}, welcome`);
console.log(this);

}
}
// usr.welcomemsg();
// usr.usrName="Sayu";
// usr.welcomemsg();
//took current context

//console.log(this);//{} because context us local not global
// function test(){
//     let usr ="Sayali";
//     console.log(this);//this is not used in function only can used in object
// }
// test();

// arrow function ()=>
// const test=()=>{
//     let usr ="Sayali";
//   console.log(this.usr);
// }
// test();

// const sum=(n1,n2)=>{
//     return n1+n2;
// }
// console.log(sum(1,2));

//const sum=(n1,n2)  => n1+n2;//we can write like this also
//const sum=(n1,n2) => (n1+n2) //implicit return

const sum =(n1,n2) =>({usrname:"sayali"})//can return this instead of sum
console.log(sum(4,5));//{ usrname: 'sayali' }

const arr=[2,5,7,9,11];

//arr.forEach(function(){});
arr.forEach(()=>{});