// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const ConvertNumberToString = () => {
  let basicNumber = 100;
  let numberFromString = basicNumber.toString();
  console.log(numberFromString)
}

ConvertNumberToString()

// Write a JavaScript program to convert a string to the number.

const ConvertStringToNumber = () => {
  let basicString = "101"
  console.log(+basicString)
}

ConvertStringToNumber()

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
const TypeOfChecker = () => {
  let basicVariable = 27
  console.log(typeof basicVariable)
}

TypeOfChecker()
  
// Write a JavaScript program that adds 2 numbers together.

const AdditionFunction = (num1, num2) => {
  console.log(num1 + num2)
}

AdditionFunction(12, 17)

// Write a JavaScript program that runs only when 2 things are true.

const DoubleTrueChecker = (num1, num2) => {
  if (typeof num1 && typeof num2 === 'number') {
    console.log(num1 + num2)
  } else {
    console.log("Please Enter Numbers")
  }
}
DoubleTrueChecker(12, 15)

// Write a JavaScript program that runs when 1 of 2 things are true.

const SingleTrueChecker = (num1, num2) => {
  console.log("Enter two numbers, where one is greater than the other.")
  if (num1 >= num2 || num1 > 0) {
    console.log("These are your results", num1 + num2)
  } else {
    console.log("Number 2 has to be greater than zero, and number 1 has to be greater than number 2.")
  }
}

SingleTrueChecker(-3, 0)


// Write a JavaScript program that runs when both things are not true.  

const DoubleFalseChecker = (num1, num2) => {
  console.log("Enter two numbers, where one is greater than the other.")
  if (num1 >= num2 || num1 > 0) {
    console.log("These are your results", num1 + num2)
  } else {
    console.log("Number 2 has to be greater than zero, and number 1 has to be greater than number 2.")
  }
}

DoubleFalseChecker(-3, 0)


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
