//Array.reduce()

const myNum=[1,2,3];
//to print the sum of all numbers
// const total=myNum.reduce(function (acc,curval){
//     console.log(`acc: ${acc} , current value ${curval}`);
//     return acc+curval;
// },0)//starting the accumulator

// 0+1=1 first iteration
// 1+2=3 second iteration
// 3+3=6  third iteration
//console.log(total);//6

const total=myNum.reduce((acc,cur)=> acc+cur,0)
//console.log(total);

const shopCart=[
    {
        itemName:"Bottle",
        price:40
    },
    {
        itemName:"tiffin",
        price:140
    },
    {
        itemName:"cup",
        price:60
    }
]

const price=shopCart.reduce((acc,item)=>acc+item.price,0);
console.log(price);


