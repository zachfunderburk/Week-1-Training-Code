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
var myName=fucntion (x,y)
{
    return x+y;
}

//Callback Functions are executed once another function's execution
//has completed. Here, the AlertFinished function will only execute
//once the doHomework has completed
function doHomework(subject, callback)
{
    alert(`Staring my ${subject} homework`);callback();
}
function alertFinished()
{
    alert('Finished my homework');
}
doHomework('math', alertFinished);

//Assignment: Callback Functions
// calculateSum(num1, num2, callback)
//Callback=displaySum

