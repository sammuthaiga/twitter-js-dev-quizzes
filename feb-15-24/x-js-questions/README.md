# JavaScript Code Explanation
<p>
This result might be surprising, but it's due to how JavaScript compares objects. In the if and else if conditions, you are comparing the data object with another object {age: 18} using strict equality (=== and ==).

In JavaScript, when you use the === (strict equality) operator to compare objects, it checks if the references to the objects are the same, not if the object structures are identical. In this case, the data object and {age: 18} object have different references in memory, even though their structures are the same. Hence, the strict equality comparison (===) evaluates to false.

Similarly, when using the loose equality operator ==, JavaScript performs type coercion before the comparison. However, for objects, it still compares references, so the loose equality comparison (==) also evaluates to false.

As a result, the code falls into the else block, and the message "Hmm, You don't have an age" is printed to the console.
</p>

## N/B : This example contains a bug put on purpose to indicate that objects compares references.
## 