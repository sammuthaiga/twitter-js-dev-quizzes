//  1. What is the output of the following code?

// "A" - "B": In JavaScript, attempting to subtract one string from another results in NaN (Not a Number) because subtraction is not defined for strings. "A" and "B" are treated as non-numeric, leading to a NaN result.

// NaN + "2": When adding NaN to a string, JavaScript performs a type coercion, converting NaN to the string "NaN". Therefore, the result is the concatenation of "NaN" and "2", giving "NaN2"
console.log("A" - "B" + "2")

// ANSWER: NaN2
