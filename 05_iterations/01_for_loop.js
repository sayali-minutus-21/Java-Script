//for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element==5) {
//         console.log("5 is best");//first it will printed then 5 will print
//     }
//     console.log(element);
// }

//nested for loop
// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop : ${i}`);
//    for (let j = 0; j < 10; j++) {
//     console.log(`inner value : ${j} outer loop value:${i}`);
    
//    }
// }//one iteration of outer loop equals to complete iteration of inner loop

//table printing
for (let i = 1; i < 10; i++) {
    ///console.log(`outer loop : ${i}`);
   for
    (let j = 1; j < 10; j++) {
    //console.log(`inner value : ${j} outer loop value:${i}`);
    //console.log(i+' * '+ j+' = '+i*j);
   }
}
//if you give array lenght more than defined it will give undefined
let array=["Java","c++","javascript"]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    //console.log(element);
}

//keywords
//break,continue
for (let i = 0; i <=20; i++) {
    if (i==5) {
        console.log("detected 5");
        //break;//stops the iteration of loop
        continue;//skips the current iteration and start the remaining iterations
    }
    console.log(`value of i is ${i}`);
}



