const { CURSOR_FLAGS } = require("mongodb");

//string
let fname = "Bronco";
let lname = "CPP";
let fullName = `${fname} ${lname}`;


console.log(fullName);

//boolean
let hasTicket = true;
let passExam = false;
console.log(typeof hasTicket);


//underfined
let index;

//null

//constant
const secretKey = Symbol();
console.log(secretKey);
let userCustomizedChoice = "customized username";

// ----- Object type ----- 
let cppCourse = {
    "name" : 'CS 2250',
    "hour" : 3,
    semester : 2250,
    "School name" : "Cal Poly",
    [userCustomizedChoice]: "User name",
}

console.log(cppCourse.name);
console.log(cppCourse["hour"]);
console.log(cppCourse[userCustomizedChoice]);

cppCourse["Location"] = "Building 9";
console.log(cppCourse);

delete cppCourse.Location;
console.log(cppCourse);



cppCourse.name = "Web Development"; 



