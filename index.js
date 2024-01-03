let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Ages:", ages);
let minusAge = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAge);

ages.push(100);
console.log("Ages after pushing a new value", ages);
let minusAgePush = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAgePush);

//Declare a variable thats equal to zero.
let sumOfAges = 0;

for(let i = 0; i < ages.length; i++) {
    console.log(i, "Index");
    sumOfAges += ages[i];
    console.log("index:", i, "sumOfAges:", sumOfAges);
}
console.log("Total Sum", sumOfAges);
//Going to the average we need to divide the sum by the numbers of the ages we have listed.
let average = sumOfAges / ages.length;
console.log("Average", average);

//Question 2a:
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalLetters = 0; //starting at zero due to not know the total number of letters.

for (let i = 0; i < names.length; i++) {
    console.log(i, 'Index');
     totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log(averageLetters);
 
//Question 2b: 
 //allows us to know whats happening to the concat names string each time the loop iterates.
 let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
concatenatedNames += names [i] + ' ';
}
console.log (concatenatedNames)

//Question 3:
console.log(ages[ages.length - 1]); //to access the last element of the array, "ages.length -1"
//always refrence the last element.

//Question 4:
console.log("First element of ages array:", ages[0]); //zero is always the first element of any array.

//Question 5:  Created a loop by adding the 
//length of each name to the name lengths array.
let nameLengths = [];
for( let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
    console.log("Name lengths array:", nameLengths);
    console.log (i)
    console.log(names[i]);
}

//Question 6: Created a loop to iterate over nameLengths by
//caculatting the sum of all elements in the array.
let charsTotal = 0;
for(let i=0; i < nameLengths.length; i++) {
charsTotal += nameLengths[i];
console.log("CharsTotal:", charsTotal);
}

//Question 7: Created a function that takes two parameters.
//"word" and "n" are used as arguments and returned to concatenated.
function concatWords(word, n) {
console.log("Word Par:", word, "n Par:", n);
let concat = word.repeat(n);
console.log(concat);
}
concatWords("Hello", 3);

//Question 8:Created a function that takes two parameters, firstName and
//lastName to return a full name. The result will be "first" and "last" name 
//with a space in between.
function fullName(firstName, lastName){
    let fullName = firstName + ' ' + lastName;
    console.log(fullName);
}
fullName("Whittney", "Rudolph");

//Question 9:
let numbers1 = [100,200,300,400]
let numbers2 = [1,2,3,4]

function sumNumbersArray(array){
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
        console.log("Total:", total);
    }

    if (total > 100) {
        console.log("Total:", total, true);
        return true;
    } else {
console.log("Total:", total, false);
return false;
    }
}
sumNumbersArray(numbers2);

//Question 10:Creates a function that takes an array of numbers
// and returns the average of all the elements in the array.
function calculateNumbersAverage(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i];
        console.log("calculate Function, total:", total);
    }
    let average = total / array.length;
    console.log("Average of numbers:", average);
    return average;
}
calculateNumbersAverage(numbers1);

//Question 11: I created a function that takes two arrays of numbers
//to return to true.The first array is greater than the average of the elements
//in the second array. 
let numbers3 = [100, 100, 50];
let numbers4 = [100, 100, 101];

function twoAverages(array1, array2) {
    console.log("Parameters:", array1, array2);
    let total1 = 0;
    let total2 = 0;
    for (const number of array1) {
      total1 += number;
      console.log("Current number loop1:", number, "Total:",
       total1);
    }
    for (const number of array2) {
    total2 += number;
    console.log("Current number loop2:", number, "Total2:", total2);
    }
    let average1 = total1 / array1.length;
    let average2 = total2 / array2.length;

    console.log("Averages", average1, average2);
    if (average1> average2) {
        console.log(true);
        return true
    }else if (average1 < average2) {
        console.log(false);
        return false;
    }else {
        console.log("Numbers are equal");
}
}
twoAverages(numbers3, numbers4);

//Question 12:I created a funtion called "willBuyDrink" that takes a boolean
//isHotOutside, and a number moneyInPocket, and returns true if it is hot outside
//or if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    console.log ("Parameters", isHotOutside, moneyInPocket);
    let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
    console.log("Buy a drink?", buyDrink);
return buyDrink;
}
willBuyDrink(true, 5);