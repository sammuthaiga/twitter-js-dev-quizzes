function getPersonInfo(one, two, three) {
  console.log(one)
  console.log(two)
  console.log(three)
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`;

// What will the code above output?
// A: "Lydia" 21 ["", " is ", " years old"]
// B: ["", " is ", " years old"] "Lydia" 21
// C: "Lydia" ["", " is ", " years old"] 21

// The getPersonInfo function is a tagged template literal. This is a more advanced way of using template literals, and is not used very often. The benefit of using a tag, is that you can modify the output of the template literal. First, let's talk about the arguments of a tag function.

// A tag function gets an array of string values, and an array of values that are in the string. In this case: 

// Strings: ["", " is ", " years old"]  


