//If Statements will return a True/False response based on
//the entered parameters
const time=new Date().getHours();
console.log(time);
if(time < 10)
    console.log('Good Morning');

else if (time < 20)
    console.log('Good Afternoon')

else
    console.log('Good Evening');

//Switch Statements can be used to achieve multiple Condition
//statements.
//The break statements ends the current execution
const day=new Date().getDay();
console.log(day)
switch(day)
{
    case 0:
        console.log('Sunday')
        break;
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
}

//For Loops is used for repetative Tasks
// i++ equates to i+1
for(i=0; i < 10; i++)
{
    console.log('Hello ' + i);
}
    
//While loops work like For loops, but will run repeatedly while a variable 
//equals a specific value. If the parameter is not met, the function will 
//not execute
j=0
while(j < 5)
{
    console.log('j' + j);
    j++;
}

//Do While loops will similarly to while loops, but will execute atleast Once
k=0;
do
{
    console.log('do while');
    k++;
}while(k<=3)