//const user=new Object();//{} sINGLETON OBJECT
 
const user={};//{} literal

user.id="1234ab";
user.name="Sau";
user.isPresent=true;

//console.log(user);

const regUser={
    email:"comapny@.com",
    userinfo:{
        fname:{
            name:"Sayali",
            lname:"Tippe"
        },
        fage:23
    }
}
//console.log(regUser);

console.log(regUser.userinfo?.fname.name);

const obj1={1:"ab",2:"cd"};
const obj2={3:"ef",4:"gh"};

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2);//combines two object and return single

const obj3={...obj1,...obj2};
//console.log(obj3);//{ '1': 'ab', '2': 'cd', '3': 'ef', '4': 'gh' }

const users=[
    {
        name:"Sayali",
        age:23
    },
    {
        name:"Sayali",
        age:23
    },
    {
        name:"Sayali",
        age:23
    },
]

users[1].age;

console.log(Object.keys(regUser));//store all keys in an array

console.log(Object.values(regUser));
console.log(Object.entries(regUser));

console.log(regUser.hasOwnProperty('email'));
