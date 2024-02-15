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

