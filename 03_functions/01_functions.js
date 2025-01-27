function myName()
{
    console.log("Hii");
    console.log("everyone!");
    
    
}

//myName();

// function sumOfNum(num1,num2){
//    console.log( num1+num2);
// }

// sumOfNum(null,21);21
// sumOfNum("21",21);2121
// sumOfNum(21,"22");2122
// sumOfNum(undefined,21);NaN

//const result=sumOfNum(5,3);

//console.log("result: ",result);
//

function sumOfNum(num1,num2){
    // let result= num1+num2;
    // return result;//must be last statement
    return num1+num2;
 }
 const result=sumOfNum(5,3);
 
 //console.log("result: ",result);

 //parameters
//((usrName="sayu") default value)
function loginUser(usrName="sayu") {
    if (!usrName) {
        //usrName===undefined
        console.log("please enter usrname");
        return;
    }
    return `${usrName} just logged in`;
}

//console.log(loginUser("Sayali"));
//console.log(loginUser());

//... spread & rest operator
function calculateCartPrice(...num1){
    //rest operator
    return num1;
}
 
//console.log(calculateCartPrice(7,8,9));

const usr={
    usrName:"Sayali",
    age:23
};

function handleObjects(obj) {
    console.log(`Username is  ${obj.usrName} and price is ${obj.age}`);
    
}
//handleObjects(usr);
handleObjects({
    usrName:"sayu",
    age:23
});

const arr=[20,30,40,50,60];

function returnSecondValue(arr) {
    return arr[1];
}
//console.log(returnSecondValue(arr));
console.log(returnSecondValue([1,2,3,4]));


