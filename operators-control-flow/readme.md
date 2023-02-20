Answet to question 1 and 2
Arithmetic Operators:
Addition: +
Example 1: let sum = 4 + 5; // sum will be 9
Example 2: let result = 3 + 4 + "5"; // result will be "75" (since the addition is performed left to right, 3+4 is evaluated first and then concatenated with "5")
Subtraction: -
Example 1: let difference = 8 - 3; // difference will be 5
Example 2: let result = 10 - 2.5; // result will be 7.5
Multiplication: *
Example 1: let product = 6 * 7; // product will be 42
Example 2: let result = 2 * "3"; // result will be 6 (since the string "3" is coerced into a number)
Division: /
Example 1: let quotient = 10 / 2; // quotient will be 5
Example 2: let result = 12 / 5; // result will be 2.4
Modulus: %
Example 1: let remainder = 15 % 4; // remainder will be 3
Example 2: let result = 7 % 3; // result will be 1
Assignment Operators:

Assignment Operators :
Assignment: =
Example 1: let x = 5; // x is assigned the value 5
Example 2: let name = "John"; // name is assigned the string "John"
Addition assignment: +=
Example 1: let x = 3; x += 2; // x will be 5
Example 2: let str = "Hello"; str += " world"; // str will be "Hello world"
Subtraction assignment: -=
Example 1: let x = 8; x -= 3; // x will be 5
Example 2: let y = 10; y -= "3"; // y will be 7 (since the string "3" is coerced into a number)
Multiplication assignment: *=
Example 1: let x = 5; x *= 2; // x will be 10
Example 2: let y = 3; y *= "4"; // y will be 12 (since the string "4" is coerced into a number)
Division assignment: /=
Example 1: let x = 10; x /= 2; // x will be 5
Example 2: let y = 8; y /= "2"; // y will be 4 (since the string "2" is coerced into a number)


Comparison Operators:
Equality: ==
Example 1: let x = 5; let y = "5"; console.log(x == y); // logs true (since the string "5" is coerced into a number and 5 == 5)
Example 2: let a = null; let b = undefined; console.log(a == b); // logs true (since both null and undefined are falsy values and are considered equal with ==)
Inequality: !=
Example 1: let x = 5; let y = "5"; console.log(x != y); // logs false (since the string "5" is coerced into a number and 5 == 5)
Example 2: let a = null; let b = undefined; console.log(a != b); // logs false (since both null and undefined are falsy values and are considered equal with ==)
Strict equality: ===
Example 1: let x = 5; let y = "5"; console.log(x === y); // logs false (since the types of x and y are different)
Example 2: let a = null; let b = undefined; console.log(a === b); // logs false (since null and undefined have different types)
Strict inequality: !==
Example 1: let x = 5; let y = "5"; console.log(x !== y); // logs true (since the types of x and y are different)
Example 2: let a = null; let b = undefined; console.log(a !== b); // logs true (since null and undefined have different types)
Greater than: >
Example 1: let x = 10; let y = 5; console.log(x > y); // logs true
Example 2: let a = "5"; let b = 3; console.log(a > b); // logs true (since "5" is coerced into a number and is greater than 3)
Less than: <
Example 1: let x = 10; let y = 5; console.log(x < y); // logs false
Example 2: let a = "5"; let b = 8; console.log(a < b); // logs true (since "5" is coerced into a number and is less than 8)
Greater than or equal to: >=
Example 1: let x = 10; let y = 5; console.log(x >= y); // logs true
Example 2: let a = "5"; let b = 5; console.log(a >= b); // logs true (since "5" is coerced into a number and is equal to 5)
Less than or equal to: <=
Example 1: let x = 10; let y = 5; console.log(x <= y); // logs false
Example 2: let a = "5"; let b = 7; console.log(a <= b); // logs true (since "5" is coerced into a number and is less than 7)

Logical Operators:
Logical AND: &&
Example 1: let x = 5; let y = 10; console.log(x < 10 && y > 5); // logs true
Example 2: let a = false; let b = true; console.log(a && b); //

Logical OR: ||
Example 1: let x = 5; let y = 10; console.log(x < 5 || y > 5); // logs true
Example 2: let a = false; let b = true; console.log(a || b); // logs true
Logical NOT: !
Example 1: let x = 5; console.log(!(x == 5)); // logs false (since x is equal to 5, and !(x == 5) is equivalent to (x != 5))
Example 2: let a = false; console.log(!a); // logs true


Bitwise Operators:
Bitwise AND: &
Example 1: let x = 5; let y = 3; console.log(x & y); // logs 1 (which is the result of the bitwise AND operation on 0101 and 0011)
Example 2: let a = 7; let b = 11; console.log(a & b); // logs 3 (which is the result of the bitwise AND operation on 0111 and 1011)

Bitwise OR: |
Example 1: let x = 5; let y = 3; console.log(x | y); // logs 7 (which is the result of the bitwise OR operation on 0101 and 0011)
Example 2: let a = 7; let b = 11; console.log(a | b); // logs 15 (which is the result of the bitwise OR operation on 0111 and 1011)
Bitwise XOR: ^
Example 1: let x = 5; let y = 3; console.log(x ^ y); // logs 6 (which is the result of the bitwise XOR operation on 0101 and 0011)
Example 2: let a = 7; let b = 11; console.log(a ^ b); // logs 12 (which is the result of the bitwise XOR operation on 0111 and 1011)
Bitwise left shift: <<
Example 1: let x = 5; console.log(x << 1); // logs 10 (which is the result of left-shifting the binary representation of 5 by 1 bit)
Example 2: let a = 7; console.log(a << 2); // logs 28 (which is the result of left-shifting the binary representation of 7 by 2 bits)
Bitwise right shift: >>
Example 1: let x = 5; console.log(x >> 1); // logs 2 (which is the result of right-shifting the binary representation of 5 by 1 bit)
Example 2: let a = 7; console.log(a >> 2); // logs 1 (which is the result of right-shifting the binary representation of 7 by 2 bits)

Question 4
The for loop solution of the code 
for(let i=1; i<20; i+=7){
     console.log(i)
}
1
8
15