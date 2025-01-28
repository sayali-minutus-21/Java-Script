//filter operation
//for each loop not return anything

const nums=[1,2,3,4,5,6,7,8,9,10];

//const newNums=nums.filter((num) =>());

//console.log(newNums);

// const newNums=nums.filter((num) => {
//     return num;
// })

//console.log(newNums);


//taking empty array
// const newNums=[];

// nums.forEach((num)=>{
//     if (num>4) {
//         newNums.push(num)
//     }
// })
// //for storing values in empty array
// console.log(newNums);


const myCars=[
    {
        cname:"aulto",
        price:300000,
        type:"4 Wheeler",
        color:"black"
    },
    {
        cname:"aura",
        price:800000,
        type:"4 Wheeler",
        color:"black"
    },
    {
        cname:"bolleno",
        price:1000000,
        type:"4 Wheeler",
        color:"blue"
    }
]

const carcolor=myCars.filter((car) => car.color==="black");

//console.log(carcolor);

//by giving condition to take specific values
const cartype=myCars.filter((car) => {
    return car.price>=800000 && car.color==="black"
})
 //console.log(cartype);
 
