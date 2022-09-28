// Vinay Maurya14:33
// const studentName = "Ankur";

// const mathMarks = 55;
// const EngMarks = 70;
// const sceincemarks = 45;

// console.log("2022-09-04 --> 1 -->");

// My name is Ankur Maurya. I got marks in math is 55, in science is 45 and in English is 70




//  My name is (studentname). I got marks in math is (mathmarks), in science is (sceinemarks) and in English is 70




//  function studentData(name, math, hindi, eng, phy, chem){
// console.log( `1. here students ${studentData}  and  here total marks ${total} and percentage ${percentage}`)
//  }
function studentData(name, math, hindi, eng, phy, chem) {
    console.log(`my name is ${name}. i got marks is math is ${math}, in phy is ${phy}, in chem is ${chem}, in hindi is ${hindi} and is eng ${eng} `)
    
    
    const obtainedMarks = math + hindi + eng + phy + chem ;
    const total = 500;
    const percentage =( obtainedMarks/total)*100;
    console.log( `${name}'s obtained marks  is  ${obtainedMarks} out od ${total} marks ${ percentage}`
    ) 
}

studentData("anshu", 45, 55, 65, 45, 55);
studentData("ankur", 45, 55, 65, 45, 55);



function studentData(name, math, hindi, eng, phy, chem) {


console.log(`my name is ${name}. i got marks is math is ${math}, in phy is ${phy}, in chem is ${chem},in hindi is ${hindi},and is eng ${eng} `)

const obtainedMarks = math + hindi + eng + phy + chem ;
const total = 500;
const percentage =( obtainedMarks/total)*100;
console.log( `${name}'s obtained marks  is  ${obtainedMarks} out  od ${total} marks ${ percentage}`)

}

studentData("akur", 45 ,52 , 54 , 47 , 62);
studentData("ektaa", 55 ,45 ,66 ,65 , 53);







// ailyclasses/2022-09-05 javascript-6 relational operator/relational.js
console.log("-------------2022-09-05 --------------_");
console.log("-------------Relational Operator --------------");

console.log("-------------== and === --------------");
// == checks only value not datatype
// === checks value and datatypes

console.log("1.--->", "Ram" == "ram"); // false
console.log("2.---->", "Ram" === "ram"); // false

console.log("3.--->", "Ram" == "Ram"); // true
console.log("4.---->", "Ram" === "Ram"); // true

console.log("5.--->", "true" == true); // 'false
console.log("6.---->", "true" === true); // false

console.log("7.--->", "1" == true); // true
console.log("8.---->", "1" === true); // false

console.log("9.--->", 1 == true); // true
console.log("10.---->", 1 === true); // false

console.log("9.--->", 0 == false); // true
console.log("10.---->", 0 === false); // false

console.log("11.--->", "" == false); // true
console.log("12.---->", "" === false); // false

console.log("13.--->", undefined == false); // false
console.log("14.---->", undefined === false); // false

console.log("15.--->", null == false); // false
console.log("16.---->", null === false); // false

// ! === not

console.log("-------------! === not --------------");

console.log("17.--->", !true == false); // true
console.log("18.---->", !true === false); // true

console.log("19.--->", !false == false); // false
console.log("20.---->", !false === false); // false

console.log("------------- != and !== --------------");
console.log("21. --->", 12 != "12"); // false
console.log("22. --->", 12 !== "12"); // true  ?????????????

console.log("------------- (  >  )   greater than --------------");
// left > right
console.log("23. -->", 20 > 5); // true
console.log("24. -->", true > false); // 1 > 0 true
console.log("25. -->", -10 > 0); // false
console.log("26. -->", "a" > "A"); // (according to ASCII codes) true
console.log("27. -->", 45 > 45); // false

console.log(
  "------------- (  >=   )   greater than and equal to --------------"
);
// left > right
console.log("28. -->", 20 >= 10); // true
console.log("29. -->", !true >= false); //  true
console.log("30. -->", !true >= true); //  false
console.log("30. -->", true >= !true); //  true

console.log("31. -->", -10 >= 10); //  false
console.log("32. -->", "a" >= "A"); // (according to ASCII codes) true

const paise = 60000;
const carPrice = 60000;

if (paise >= carPrice) {
  console.log("Congratulations!! you bought a brand new car ");
} else {
  console.log("Sorry!! you can buy only motorcycle ");
}




// 1. Write a function to print your name, hobbies

// 2. Write a function to enter your you favorite avengers and concat with string 
//     Input: entered Ironman from keyboard
//     Output: My favorite avenger is IronMan. I am dying heart fan of IronMan

// 3. Write a program to calculate average of 5 subject entered using keyboard
// 4. Enter 10 numbers from keyboard and Write a program to calculate average of those 10 numbers
// 5. Write a function to find a number(Entered through keyboard) is EVEN || ODD
// 6. Write a function to calculate simple interest. 




console.log(".............Exercise..................")
function studentReportCard ({mathMarks, HindiMarks, physicsMarks, EnglishMarks, chemistryMarks}){

  const math = prompt("Enter math marks");
  const Hindi = prompt("Enter Hindi marks");
  const physics = prompt("Enter phy marks");
  const English = prompt("Enter English marks");
  const chemistry = prompt("Enter chemistry marks");
  
  console.log("Math mark is:", math);
  console.log("hindi mark is:", Hindi);
  console.log("physics  is:", physics);
  console.log("English mark is:", English);
  console.log("chemistry mark is:", chemistry);
}


studentReportCard ({mathMarks:math, HindiMarks:Hindi, physicsMarks:physics, EnglishMarks:English, chemistryMarks:chemistry})
