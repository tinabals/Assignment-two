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
