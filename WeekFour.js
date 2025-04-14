// write a variable that is a string and output to console (hint: it's console.log(variable name))
var string = "Hi There"

console.log(string)

// write a variable that is a number and output to console (hint: it's console.log(variable name))
var number = 7
console.log(number)


// write a variable that takes any two numbers and adds them
var addition = 4+8 
console.log(addition)

// write a variable that takes any two numbers and subtracts them and output to console
var subtraction = 7-2
console.log(subtraction)

// write a variable that takes any two numbers and performs a modulo that has a value of 1  and output to console 
var modulo = 15%2
console.log(modulo)

// write a variable that takes any two numbers and perform an exponential value and output to console
var exponent = 4**3
console.log(exponent) 

// write a statement that is false using a conditional statement and output to console 
let iffy
if(exponent < 100)
{
    iffy ="false"
}
console.log(iffy)


// I have created an object below, output to console the value of "breed" (hint: the structure is ObjectName.value you want to call)
// the keyword "this" is self referencing the object 

let siggy = {
    breed : "cat", 
    baby: "big baby", 
    fluffy: "fluffy", 
    output: function() {

        return `Siggy is a ${this.breed} that is a ${this.fluffy} ${this.baby}`

    }
}

console.log(siggy.breed)

// methods! You call methods the same way you call a function.  I'll call siggy.output() below. 

console.log(siggy.output()); 

// copy + paste the siggy object below and rename the variable from Siggy to an animal or name of your choice 
// then, I want you to change the object to the value of your choosing 

let Zed = {
    nickname : "Zedicus", 
    type: "ferocious kitty", 
    fears: "everything", 
    output: function() {

        return `Zed, otherwise known as ${this.nickname}, is a ${this.type} afraid of ${this.fears}`

    }
}

// console.log the values of that object one by one. 

console.log(Zed.nickname)
console.log(Zed.type)
console.log(Zed.fears)

//a little info about my cat Zed
console.log(Zed.output())

// create an array 
 let MyArray= [8,6,7,5,3,0,9]


// call the value in the 3 position of this array and output to console 

let someArray = ["Ishrat", "Is", "Really", "Proud", "Of", "You"]

console.log(someArray[2])

// call all values in the array using a loop

for (let i = 0; i < someArray.length; i++){
    console.log(someArray[i])
}


// what is the value of the variable ifStatement, leave your answer in the console. 

let ifStatement; 
let value = 5; 

if(value < 5)
{
    ifStatement = true;
}

else{
    ifStatement = false; 
}

console.log("it starts undefined, then the conditional executes and makes the value false bacause 5 is not less than 5")