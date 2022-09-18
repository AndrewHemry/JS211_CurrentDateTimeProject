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

const convertNumberToString = () => {
  let basicNumber = prompt ('Enter a Number here');
  let numberFromString = basicNumber.toString();
  let typeOfConvert = typeof numberFromString;
  console.log(`The type is now: ${typeOfConvert}, and your number is: ${basicNumber}`)
  const outputDisplay = `The type is now: ${typeOfConvert}, and your number is: ${basicNumber}`
  document.getElementById("convertNumberToString-element").innerHTML = outputDisplay;
}

// Write a JavaScript program to convert a string to the number.

const convertStringToNumber = () => {
  let basicString = prompt ('Enter a number here, but in a string');
  let convertString = +basicString
  let typeOfConvert = typeof convertString;
  const outputDisplay = `The type is now: ${typeOfConvert}, and your number is: ${convertString}`
  document.getElementById("convertStringToNumber-element").innerHTML = outputDisplay;
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
const typeOfChecker = () => {
  let initialValue = prompt ('Enter a number that is 1 through 6')
  const convertInitialValue = +initialValue
  const booleanType = typeof false
  const nullType = null
  let x;
  const numberType = typeof 131
  const stringType = typeof 'This is a string'

  switch (convertInitialValue) {
    case 1:
      initialValue = 1
      alert(booleanType)
      break
    case 2:
      initialValue = 2
      alert(nullType)
    break
    case 3:
      initialValue = 3
      alert(x)
      break
    case 4:
      initialValue = 4
      alert(numberType)
      break
    case 5:
      initialValue = 5
      function sanitise(x) {
        if (isNaN(x)) {
          return NaN;
        }
      }
      alert(sanitise('NotANumber'));
      break
    case 6:
      initialValue = 6
      alert(stringType)
      break
  }
  // let basicVariableTypeOFConverter = typeof basicVariable
  // const outputDisplay = `The type is now: ${basicVariableTypeOFConverter}, and your original message was: ${basicVariable}`
  // document.getElementById("typeOfChecker-element").innerHTML = outputDisplay;
}

// Write a JavaScript program that adds 2 numbers together.

const additionFunction = () => {
  let num1 = prompt ('Enter the first number to add.')
  let num2 = prompt (`Enter second number to add.`)
  const finalNumbers = +num1 + +num2;
  const addTypeOf = typeof finalNumbers
  const outputDisplay = `The type is now: ${addTypeOf}, and your original numbers were: ${num1} & ${num2}. The output is ${finalNumbers}.`
  document.getElementById("additionFunction-element").innerHTML = outputDisplay;
}

// Write a JavaScript program that runs only when 2 things are true.

const doubleTrueChecker = () => {
  let num1 = prompt ('Enter the first variable to add (number, text, whatever you want).')
  let num2 = prompt ('Enter the second variable to add (number, text, whatever you want).')
  const finalNumbers = +num1 + +num2;
  const outputDisplayTrue = `Failed! Either ${num1} or ${num2} was not an integer. The output is unable to display`
  const outputDisplayFalse = `Success! Both ${num1} & ${num2} were actual integers. The output is ${finalNumbers}`
  if (isNaN(finalNumbers)) {
    document.getElementById("doubleTrueChecker-element").innerHTML = outputDisplayTrue;
  } else {
    document.getElementById("doubleTrueChecker-element").innerHTML = outputDisplayFalse;
  }

  // THIS WORK TOO BUT DIFFERENT WAY TO SAME OUTCOME
  // if (typeof convertString1 && typeof convertString2 === 'number') {
  //   console.log(`This is the outputted number`, convertString1 + convertString2)
  // } else {
  //   console.log("Please Enter Numbers")
  // }
}
// doubleTrueChecker(12, 15)

// Write a JavaScript program that runs when 1 of 2 things are true.

const singleTrueChecker = () => {
  alert("Enter two numbers, where one is greater than the other.")
  let num1 = prompt ('Enter the first number.')
  let num2 = prompt ('Enter the second number.')
  const convertNum1 = +num1
  const convertNum2 = +num2
  const finalNumbers = convertNum1 + convertNum2
  const outputDisplayFalse = `Failed! ${num1} is less than ${num2}, ${num2} is zero, or either number is not an integer. Please try again`
  const outputDisplayTrue = `Success! ${num1} is greater than ${num2}. The output is ${finalNumbers}`
  if (convertNum1 >= convertNum2 && convertNum2 > 0) {
    document.getElementById("singleTrueChecker-element").innerHTML = outputDisplayTrue
  } else {
    document.getElementById("singleTrueChecker-element").innerHTML = outputDisplayFalse
  }
}

// singleTrueChecker(10, 3)


// Write a JavaScript program that runs when both things are not true.  

const doubleFalseChecker = () => {
  const num1 = 2
  const num2 = 3
  alert("This is a double false checker. It compares two numbers and if both things are not true, it'll do 'something'.")
  const outputDisplayTrue = `One of the things was true! ${num1} is greater than ${num2}, and ${num1} is greater than zero, so the function ran.`
  const outputDisplayFalse = `Success! Both things were not true - ${num1} is not greater than ${num2}, and ${num1} is not equal to zero.`
  if (num1 >= num2 && num1 > 0) {
    document.getElementById("doubleFalseChecker-element").innerHTML = outputDisplayTrue
  } else {
    document.getElementById("doubleFalseChecker-element").innerHTML = outputDisplayFalse
  }
}

// document.getElementById("doubleFalseChecker_ID").addEventListener("click", doubleFalseChecker(5, 1));
// doubleFalseChecker(5, 1)


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
