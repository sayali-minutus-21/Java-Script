const car=["aulto","maruti","Honda"];

const bike=["pleasure","Activa","Dio"];

// car.push(bike);//array can take another array as element
// console.log(car);//[ 'aulto', 'maruti', 'Honda', [ 'pleasure', 'Activa', 'Dio' ] ] 
// console.log(bike);

const car_bike=car.concat(bike);//joins two array and return new array
// console.log(car_bike);

const newvehical=[...car,...bike];//spread operator,joins multiple array
//console.log(newvehical);

const arr1=[1,2,3,[4,5,6],7,[6,7],[4,5]];

const realAray=arr1.flat(Infinity);
//console.log(realAray);//
// [    1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

// console.log(Array.isArray("Sayali"));//false
// console.log(Array.from("Sayali"));//[ 'S', 'a', 'y', 'a', 'l', 'i' ] returns array of giving value

//console.log(Array.from({name:"Sayali"}));//[] gives empty array

let score=100;
let score2=200;
let score3=300;
//console.log(Array.of(score,score2,score3));//combine multipe values and form array



