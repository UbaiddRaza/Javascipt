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


function calculatePercentage(chemMarks, phyMarks, comMarks, engMarks){
    console.log((chemMarks + phyMarks + comMarks + engMarks)/400 *100)
}

calculatePercentage(40, 50 , 80, 40)

