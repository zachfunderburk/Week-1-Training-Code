
//ES5
var name='Zach' + '/n'
            +'Funderburk';
console.log(name);

//ES6 Allows for Template Literals using Back Ticks (Tidle Key)
var lName=`Josh
            Funderburk`;
console.log(lName);

//The First, Last, and Age data is the JS OBJECTS
var person={firstName: 'Zach', lastName: 'Funderburk', age:'24'};
console.log(person.firstName, person.lastName, person.age);


// Hoisting allows for the use a variable when the declaration happens later on
x=10;
console.log(x);
//Even if the below declaration is not in use, the program will still find the 
//declaration. Variables should always be declared before used, however
var x;



//JS Array Information

//Var = Global Scope
//Let = Block


//The rest operator (ES6 feature) allow for multiple paramaters to be entered 
//when the function is called
//Rest Operator converts a number of values into an Array, and is used in a definition
function add(...num) //rest operator
{
    sum=0;
    for(i=0;i<num.length;i++)
    {
        sum=sum+num[i];
    }
    return sum;
}
//Whatever arguments that are passed are collected in an Array, making Num an 
//array. With the array, the For loop above will run and pick up each new Value
//in the argument
console.log(add(10,20));

console.log(Math.max(3,2,5)); //Math.max will find the max value in an Array

let arr = [30,50,10];
console.log(Math.max(arr)); // This parameter will not take in an Array
console.log(Math.max(...arr)); // This is a Spread Operator. This converts an Array in a list of arguments, used when calling a function