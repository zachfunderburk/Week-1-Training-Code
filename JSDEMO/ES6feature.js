
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