// console.log("Hello JavaScript");




// var username = ("ubaid raza")
// var birthDate = 30_05_2006
// var thisIs = "This is"
// var space = ("_")

// console.log(username + space + thisIs + space + birthDate)



// alert("This is an alert");
// var name = prompt("Enter your name")
// console.log(name)


// var username = ("Abdullah")
// var age = 21

// console.log("my name is" , username , ("and my age is") , age )




// num1 = 20
// num2 = 30
// var num3 = 0
// num3 += num1 + num2
// console.log(num3)



// console.log(20 != 20) // data type not check not equal to
// console.log(20 !== "20") // data type check not equal to
// console.log(20 == "20") // data type not check equal to
// console.log(20 === "20") // data type check equal to

// console.log(10 < 5 && 10 < 5 )



// console.log(20>20 || 10<=10 && 20>20)


// alert("welcome to this website")
// alert("error, please enter a valid password")

// alert("welcome to JS land" , "happy coding")



// var name = ("Ubaid")
// var username = ("ubaidraza")
// var lastname = ("raza")

// console.log(name , username, lastname)



// legal names
// var name11 = ("Ubaid")
// var name21 = ("Ubaid")
// var nam31 = ("Ubaid")
// var name22 = ("Ubaid")
// var name_ = ("Ubaid")
// illegal names
// var 12name = ("Ubaid")
// var 22name = ("Ubaid")
// var name& = ("Ubaid")
// var name-last = ("Ubaid")
// var name) = ("Ubaid")



//  CLASS 3 




// control flow (if else)
// GRADE GAME 
// var grade = prompt("Enter your grade: ")
// if(grade >= 80){
//     console.log("A+")
// } else if(grade >= 70){
//     console.log("B")
// }else if(grade >= 60){
//     console.log("C")
// }else if(grade >= 50){
//     console.log("D")
// }else if(grade >= 40){
//     console.log("E")
// }else{
//     console.log("Fail")
// }

// GYM GAME
// var age = prompt("Enter your age: ")

// if (age <= 15){
//     console.log("admission nahi milega bachey")
// } else if(age > 15 && age <=18){
//     console.log("admission miljayga but 500 extra")
// }  else if(age > 18 && age <=50){
//     console.log("admission miljayga")
// } else{
//     console.log("admission nahi milega")
// }

// NUMBER GAME 
// var number = prompt("enter number between 1 to 10:")
// if (number == 7){
//     console.log("maalik jeet gaye ho")
// } else if(number == 6){
//     console.log("qareeb ho")
// }  else if(number == 8){
//     console.log("qareeb ho")
// } else if(number == 9){
//     console.log("galat jawaab")
// } else if(number <=5){
//     console.log("galat jawaab")
// } else{
//     console.log("number 10 se chota do"
//     )
// }

//    PERCENTAGE GAME 
// var totalMarks = 400
// var maths = Number(prompt("enter ur marks for maths"))
// var english = Number(prompt("enter ur marks for english"))
// var urdu = Number(prompt("enter ur marks for urdu"))
// var islamiat = Number(prompt("enter ur marks for islamiat"))
// var totalObtained = (maths + english + urdu + islamiat)

// console.log((totalObtained/totalMarks) * 100 )


// function hello(){
//     console.log("hello world")
// }

// hello()


// function userage(username , age){
//     console.log(username + age)
// }
//     userage("ubaid" , 18)


// function addition(num1, num2){
//   console.log(num1 + num2)
// }


// var result = addition(20, 30)

// console.log(result)


// function calculatePercentage(chemMarks, phyMarks, comMarks, engMarks){
//     console.log((chemMarks + phyMarks + comMarks + engMarks)/400 *100)
// }

// calculatePercentage(40, 50 , 80, 40)


// var head = document.querySelector("#headTag")
// console.log(head.innerHTML)

// head.innerHTML = 20


// if else 
// if else if
// nested if
// functions 
// dom manipulation 
// var city = "lahore"
// if(city=="karachi"){
//     console.log("you are in karachi")

// }else{
//     console.log("you are not in karachi")
// }

// var num = 2;

// if(num >= 20){
//     console.log("number bara haa..");
// } else if(num > 15){
//     console.log("number bara ha 15 saa");
// }else {
//     console.log('else chal rha ha');
    
// }

// if(10 > 5){
//     console.log("if chal rha ha");
//     if(20 < 50){
//         console.log('nested if');
//     }
// }else{
//     console.log('else chal rha ha');
    
// }

// function hello() {
//     console.log("hello world");
//     console.log("hello world");
//     console.log("hello world");
//     console.log("hello world");
// }

// hello()


// function greetUser (username){ //parameter receive krna
//     console.log('hello ' + username);
// }
// greetUser("abdullah") //argument pass krna


// var h1 = document.querySelector("#class")

// function changeText(){
//     h1.innerHTML = "changed through javascript"
// }

// var fullname = document.querySelector("#fullname")
// var password = document.querySelector("#password")
// var email = document.querySelector("#email")

// function callFunction(){
//     console.log(fullname.value)
//     console.log(password.value)
//     console.log(email.value)
    

// }

// var num1 = document.querySelector("#num1");
// var num2 = document.querySelector("#num2");
// var result = document.querySelector("#result");

// function addValue() {
//   var addition = +num1.value + +num2.value
//   console.log(addition)
//   result.innerHTML = "sum is " + addition
// }

// function clears() {
//     num1.value = "";
//     num2.value = "";
//     result.innerHTML = "";
// }


// var fruits = ["apple" , "orange" , "mango" , "banana" ]
// fruits.splice(2, 1, "nashpati")
// console.log(fruits)

// Pop
// push

// for(var i = 0; i < 10; i++){
//     console.log("hello world");
// }
//  var num = 2 

//  for(var i = 1; i < 10; i++){
//     console.log(num * i )
//  }

// for(var i = 1; i < 10; i++){
//     console.log("outer loop" )

//     for(var j = 1; j < 10; j++){
//         // console.log("inner loop" )
//         console.log("i * j")
//      }
//  }





