//var c=300;//var is function scoped we can use it on outside of loop 
let a=20;
if(true){
    //local scope(block scope)
    let a=10;
    const b=20;
    var c=30;
    //console.log("inner :",a);
    //block scoped
}
// console.log(a);// a is not defined
// console.log(b); //b is not defined
//console.log(c);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }
//scope is different for browser and node

//one(); we can use it before initialization (hoisting)
//nested  scope
function one() {
    const usrname="Sayali";

    function two(){
        const web="google.com";
        console.log(usrname);
    }
    //console.log(web);//web is not defined
    //execution done line by line
    two();//each function has seperate calltag
    //child component can access parent components but parent does not because of block level scope
}
//one();

if (true) {
    const usrname="sayu";
    if (usrname==="sayu") {
        const web="google.com";
        console.log(usrname+`  `+web);
    }
    //console.log(web);//web is not defined block level scope
    
}   //**************** */

//console.log(sum(2));//cannot access sum before initialization
//exxpression
const sum=function addNum(num) {
    return num +1;
}
console.log(sum(2));
