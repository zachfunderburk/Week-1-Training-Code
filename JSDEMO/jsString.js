//JaveScript Strings
let carName1='Car Name 1'
console.log(carName1);
console.log(carName1.length)

//3 types of String Methods
//Slice Methods extract specified values within the String
console.log(carName1.slice(4,8)); //The paramaters here are the Start and End positions of the Extraction
console.log(carName1.slice(-4)); //Omitting the end Paramater will exptract all content past the Start position

//Substring is similar, but will not accept Negative Values
console.log(carName1.substring(4,8)); //Entering in a Negative will move that many positions back from the end of the string

//the Substr method will replace the End Position with the 
//slice length
console.log(carName1.substr(2,3)); 

//String content can be adjusted with the Replace method
//This is done by returning a new string, rather tham updating the called string
//By Default, Replace will only replace the first instance of the value, and
//is case sensitive
let text=" Car Name";
console.log(text);
let newText= text.replace('Car', 'Book');
console.log(newText);

//Upper and Lowercase can change the content to the respective Case
console.log(carName1.toUpperCase());
console.log(carName1.toLowerCase());

//Concat will join 2 strings
console.log(carName1.concat(newText));

//charAt() and charCodeAt() will retunr the string character at 
//a specified Index/position (charCode will retunr that char's
//unicode)
console.log(carName1.charAt(2)); //Returns the character's Placement Number
console.log(carName1.charCodeAt(7)); // Returns the character's Unicode

//String Search methods can be used to find and return the specific
//string characters
//If the text is not in the string, the result will be -1
console.log(carName1.indexOf('Name')); // The result will pull the position of the character of the first Occurance in the text

let carName4='Car Name 1 is the Name';
console.log(carName4.lastIndexOf('Name')); // The result will pull the position of the character of the last Occurance in the text

//the String.includes() method will return True/False, 
//depending on if the text appears in the string
console.log(carName1.includes('Name'));

//That startsWith/endsWith will work the same as Includes, but the string
//text will need to Start/End with the requested text
console.log(carName1.startsWith('Car'));
console.log(carName1.endsWith('Car'));