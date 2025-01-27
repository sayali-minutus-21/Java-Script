//immediately Invoked Function Expression(IIFe)

((){
    console.log(`Db connected`);
})();//;used to end iife

//()();//we use iife to avoid global scope pollution
//but it dont know where to stop so we need to end this execution

//named iife
(function test(){
    console.log(`from test`);
})();

//passing prameters
((name) => {
    console.log(`db 2 connected ${name}`);
})('sayali');
//when we want to give parameters
