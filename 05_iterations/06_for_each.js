//for each loop
//callback function(dosent have name) because its running inside array
const coding=["Vs code","sublime","eclipse","intelij"];

// coding.forEach(function (item) {
//     console.log(item);
// })
//'Vs code'
// 'sublime'
// 'eclipse'
// 'intelij'

coding.forEach((item) => {
    //console.log(item);
})

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme);
//we can print like this also


coding.forEach((item ,index ,arr) => {
    //console.log(item,index,arr);
})
//we can print item ,index, and whole array by using this


const myCars=[
    {
        cname:"aulto",
        price:300000
    },
    {
        cname:"aura",
        price:800000
    },
    {
        cname:"bolleno",
        price:1000000
    }
]

myCars.forEach((item) => {
    console.log(item.cname);
})
//easy to iterate array of different object
