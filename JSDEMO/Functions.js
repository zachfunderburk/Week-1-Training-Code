/*

//This function has been Declared/Defined
function sayHello(name)
{
    return 'Hello '+name
    //console.log('Hello');
}

//Once Defined, functions need to be Invoked
//sayHello();
var retValue=sayHello('');
console.log(retValue);
//And can be called mutliple times
//sayHello();
console.log(sayHello(''));

//Functions can also take in parameters, and pass in Arguments (values)
var x=sayHello('Zach');
console.log(x);
*/

function sum(x,y)
{
    return x+y;
}
console.log(sum(10,20));

//ES6 -- Arrow Functions, which allow for the declaration of a variable
//without needing to set up a function. Helps to keep a function
//compact and readable
let add=(a,b)=>a+b;
console.log(add(10,30));

//Functions can be assigned to Variables, which can be used to perform the 
//function
var mySum=function sum(q,w)
{
    return q+w;
}
console.log(mySum(10,20));


//Anonymous Fucntions can be created without a Name, but must be attached to
//a variable
var myName=function (x,y)
{
    return x+y;
}
console.log(myName(20,20));

//Callback Functions are executed once another function's execution
//has completed. Here, the AlertFinished function will only execute
//once the doHomework has completed
function doHomework(subject, callback)
{
    console.log(`Staring my ${subject} homework`);
    callback();
}
function alertFinished()
{
    console.log('Finished my homework');
}
doHomework('math', alertFinished);





//Assignment Complete: Callback Functions
//calculateSum(num1, num2, callback)
//Callback=displaySum

//THe Higher-Order function sets the Numbers for the calculation, and calls
//the Callback function to pass a Sum
function calculateSum(num1, num2, callback)
{
    let sum = num1 + num2;
    callback(sum);
}

//The Callback Function gets the sum from the Calculate function, and performs
//the console log
function displaySum(sum)
{
    console.log('Calculation sum is ' + sum);
}
//This line calls the Calculate Function, which processes the calculation then 
//calls the Callback function (displaySum)
calculateSum(50,20,displaySum);

