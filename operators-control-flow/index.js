

// question 3
const studentName = "Bola"
let classGroup = "Arts"

if (classGroup === "Science") {
  console.log(`hi ${studentName}, you would be taking the following subjects : Physics, Chemistry, Biology, Technical Drawing, English, Mathematics`);
} else if (classGroup === "Social Science") {
  console.log(`hi ${studentName}, you would be taking the following subjects : Accounting, Commerce, Marketing, Geography, English, Mathematics`);
} else if (classGroup === "Arts") {
  console.log(`hi ${studentName}, you would be taking the following subjects : Government, Economics, Literature, History, English, Mathematics`);
} else {
  console.log("Invalid class group. General subjects: English, Mathematics");
}

//question 5
function findNearestPowerOfTwo(num) {
  
  let pwr = 1;
  
    while (pwr < num) {
      pwr *= 2;
    }
  
    if (pwr - num > num - pwr/2) {
      pwr /= 2;
    }
  
    return console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);
  }
  
  
  // Example usage:
  
  findNearestPowerOfTwo(40)
  findNearestPowerOfTwo(20)
  