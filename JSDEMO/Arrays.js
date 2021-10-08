//The Array is created within the square braces
var cars = ['Subaru', 'Volvo', 'BMW'];
//The Array variable call will need the Index number of 
//the data that should be shown
console.log(cars);

//to get the whole array, a For loop can be used
//When the function loops, the different values will be shown
for(i=0;i<cars.length;i++)
{
    console.log(cars[i]);
}

//the Push function will add a new Value to the end of the array
cars.push('Bugatti')
console.log(cars);
console.log(cars.length);

//ToString and Join will change the Array into a String
console.log(cars.toString()); //The string will separate the values with a comma
console.log(cars.join("_")); //The string will separate the values with the symbol value in the Join method

//the Pop funtion will remove the Last item from teh array
var myCar=cars.pop();
console.log(myCar);
console.log(cars);

//Shifting will work similar to Popping, but affect the First array value
cars.shift();
console.log(cars);

//Unshift will work similar to Push, adding to the front of the Array
cars.unshift('Camry');
console.log(cars);

//Elements can be deleted from the array using the Delete Operator
delete cars[2];
console.log(cars);
cars.pop();

//To add or remove multiple values to an Array at once, the Spice Function 
//can be used. In the first 2 parameters spots, the First number determines
//how many new values are added, and the second determines how many current
//values are removed
cars.splice(2,0, 'Dodge', 'Bug')
console.log(cars);

//Setting the second parameter to 1 will remove the first array value
cars.splice(0,1);
console.log(cars);

