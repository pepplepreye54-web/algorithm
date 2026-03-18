// // FUNTION

// function greet(name, engine) {
//   console.log(`MERCEDES ${name}, ${engine}`);
// }

// greet("AMG GT63", "V8");

// const person = {
//   name: "NELSON",
//   age: "19",
//   greet: function () {
//     console.log("Another function" + " " + this.name + " " + this.age);
//   },
// };
// person.greet();

// // for loops

// for (let num = 0; num <= 10; num++) {
//   console.log(num);
// }

// const places = ["jerry", "adam", "john", "peace"];
// for (place of places) {
//   console.log(place);
// }

// const student = {
//   name: "jason",
//   age: 20,
//   location: "lekki",
// };
// for (key in student) {
//   console.log(key + "_" + student[key]);
// }

// /*loops*/

// let num = 10;
// // while loop
// while (num <= 10) {
//   console.log(num);
//   num++;
// }
// // do whileloop
// do {
//   console.log(num);
//   num++;
// } while (num <= 15);

// /*operators 4 types*/

// /*arithmetic*/

// /*addition +
// subtraction -
// multiplication * 
// division /
// modulus or remainder %
// increment ++
// decrement --
// exponentiation ** */

// /*assignment */
// /*assignment =
//  add and assign +=
//  subtract and assign -=
//  multiply and assign *=
//  divide and assign /=
//  remainder and assign %= */

// /*logical*/

// /* and &&
//  or ||
//  not or reverse ! */

// /*comparison*/
// /*greater than >
// less than <
// greater than or equa to >=
// less than or equal to <=
// equals to ==
// strictly equals to ===
// not equal to !=
// strictly not equal to */

// /*dot operator (used to access a method)*/

// tenairy operator 

// // console.log(5 !== "5")

// /*logical statements*/
// /*if, if else, else if */

// /*if,if else*/
// const weather = "Rain";
// if (weather == "Rainy") {
//   console.log("it is rainy");
// } else {
//   console.log("no need for umbrella");
// }

// const season = "sunny";
// if (season == "sunny") {
//   console.log("it is sunny");
// } else if (season != "sunny") {
//   console.log("it is rainy");
// }

// const wifi = false;
// const cellular = false;

// if (wifi && cellular) {
//   console.log("Device is connected through wifi and cellular");
// } else if (cellular) {
//   console.log("Device is connected through cellular");
// } else if (wifi) {
//   console.log("Device is connected throught wifi");
// } else {
//   console.log("Device is not connected to internet");
// }

// let day = 1;
// 2;
// 3;

// switch (day) {
//   case 1:
//     console.log("sunday");

//   case 2:
//     console.log("monday");

//   case 3:
//     console.log("tuesday");
//     break;
// }


// arrow funtico
const getleapyear = year => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? console.log(`${year} is a leap year`):console.log(`${year}is not a leap year`)

getleapyear(4032)

function add(a,b){
    return console.log(a + b)
}
add(10,20)

// name funtion
const addition = (a,b) =>{
    console.log(a+b);
    console.log("the numbers have been added")
};
addition(3,13)

const greet = name =>console.log("my name is " + name)

greet("daniella")

const getoddnum = num => num % 2 === 0 ? console.log(`${num} is a even number`):console.log(`${num} is an odd number`)

getoddnum(39)


function oddnumber(number){
    if (number % 2 === 0){
        console.log(`${number} is an even number`)
    }else {
        console.log (`${number} is an odd number`)
    }
    }
oddnumber(31)

// for loop

for ( let a = 0; a <= 115; a +=5){
    console.log(a,)
}

// for off loop

const students = ["falcon","jay","rick","joy"]

for( student of students){
    console.log(student)
}

// for in loop

const car ={
    name : "mercedes",
    model : "AMG 6T63",
    year : 2018
}

for (key in car){
    console.log(key + " : " + car[key])
}

// do while loop + while loop
let num = 10;
while (num <= 10) {
   console.log(num);num++;}
   do {
  console.log(num);
  num+=3;
 } while (num <= 30);

// assignment function to return the type of data

 function datatype(shit){
    return typeof shit;
 }

 console.log(datatype("hello"));
 console.log(datatype(42));
 console.log(datatype([49,60]))

 //today

 const dataType = data => console.log(`${data} is a ${typeof data}`)

 dataType("hello")
 dataType(900)
 dataType(48n)
 dataType()