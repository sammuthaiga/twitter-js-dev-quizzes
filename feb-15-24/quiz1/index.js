// When comparing objects using === or ==, it checks object references, not structures.

// The conditions (data === {age: 18}) and (data == {age: 18}) both evaluate to false.

// Therefore, the code falls into the else block, resulting in the output "Hmm, You don't have an age."

// Example:

function checkAge(data) {
    if (data === {age: 18}) {
        console.log('You are an adult!');
    } else if (data == {age: 18}) {
        console.log('You are still an adult.');
    } else {
        console.log(`Hmm, You don't have an age`);
    }
}

checkAge({age: 18});

// What is the output of the above javascript code?

// A: You are an adult!
// B: You are still an adult.
// C: Hmm, You don't have an age

// Answer: C: Hmm, You don't have an age


// Correct  way to do this is to compare the properties of the objects.

// Example:

function checkAge(data) {
    if (data.age === 18) {
        console.log('You are an adult!');
    } else {
        console.log(`Hmm, You don't have an age`);
    }
}

checkAge({age: 18});
