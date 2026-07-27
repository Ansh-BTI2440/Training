console.log("Hello, World!");
 
var oldste="this is old way of creating variale in js";
 
console.log(oldste);
 
let a=10;
let b=20;
let c=a+b;
let ok=true;
let name="BTI";
var oldste="again assingning a value to this string";// recreating a variable
name="bti,tata is apart of it";
console.log(oldste,c,name);
 
const pi=3.14;
console.log(pi);
console.log(10/0);
let div=0;
 
console.log(a/div);
let val;
console.log(val);
 
const largeInt=836578777878675677795;
let age=98;
let price=900.455;
console.log(largeInt);
console.log(typeof largeInt);
console.log(typeof age);
console.log(typeof price);
let x=45;
let y="20";
console.log(x+y);// directly convert that number into string
 
let employee;
console.log(typeof employee);
 
let emp={//assigning object to the js
    "name":"isha",
    "age":23,
    "email":"isha123"
 
};
let array=[];
let mymap={};
console.log(typeof employee);
console.log(typeof array);
console.log(typeof mymap);
 
let str1="123";
str1=Number(str1)+1;
console.log(str1++);//str1 is automatically converted into number
console.log(typeof str1);
 
{
    var a1=10;
    var b1="10";
    if(a1==b1){// compare only the data but not type
        console.log("both are equal");
    }
    else{
        console.log("both are not equal");
    }
    if(a1===b1){// compare both the data and the type
        console.log("both are equal");
    }
    else{
        console.log("both are not equal");
    }
    if(isNaN(a1)==true){
        console.log("true");
 
    }
    else{
        console.log("false");
    }
 
    str1="3793.44";
    let pf=parseFloat(str1);//converse the string in floating point number
    let pi=parseInt(str1);
    console.log(pf);
    console.log(pi);
    console.log(typeof pf);
 
}



// Task 

let n1 = 10;
let n2 = 20.25;

let n3 = "15";
let n4 = "25.15";

let n5 = true;

let Total = n1 + n2 + Number(n3) + Number(n4) + Number(n5);

console.log(Total.toFixed(2));



 
 
  