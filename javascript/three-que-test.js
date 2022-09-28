// 1. The temperature of any city is in fahrenheit degrees is input through the keyboard.
//  write a program to convert this temperature into celsius(centigrade) degrees

const fahrenheit = 55;
function findDegrees (f) {
let far = Number(f);
const cel = (far -32) *(5/9);

return `the converted temperature of ${far}\xB0 fahrenheit is ${cel.toFixed(2)}\xB0 celsius`;

}
console.log( findDegrees ( fahrenheit));


// 2. Enter the length and breadth of any rectangle through keyboard. Find it's area and perimeter.

function lengthWidth ({length, width}){

    console.log(length, width)
    
    let area = length * width;
    console.log(`this is area ${area}`)

    let perimeter =  2* (length + width)
    console.log(`this is perimeter ${perimeter}`)
}

let len = 20;
let wid = 30;

lengthWidth ({length:len, width:wid})



// 3. Enter the radius of any circle through keyboard. Find it's area and perimeter.

function circumference ( {diameter}){

    console.log(diameter)

    let radius = diameter / 2 ;

    let area = 3.14 * radius * radius;
    console.log(`this is area ${area} of circle`)

    let perimeter = 2 * 3.14 * radius ;
    console.log(`this is perimeter ${perimeter.toFixed(2)} of circle`)
}
let dia = 5;

circumference ( {diameter:dia })


 console.log(`Today class question ---------->>`)
//    * Solve this problem
 // 1.  A distance between two cities(in KM) entered through the keyboard. 
 // find a program and function to print the distance in metes, feet, inches and centimeters

 function distanceBwCities (km, m, cm, f, inc) {
  let distance = prompt()
 }
   