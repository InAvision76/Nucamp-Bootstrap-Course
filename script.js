/****************************** Challenge 1 ******************************/
const getInitials = (firstName, lastName) => firstName[0] + lastName[0];
console.log(getInitials("Charlie", "Brown")); // this should console.log "CB"


/****************************** Challenge 2 ******************************/
function getStudentGrade(finalExamPoints, assignmentsPoints) {
  const percent = ((finalExamPoints + assignmentsPoints) / 300) * 100; 
  let grade = "Unknown";
  if (percent >= 90) {
    grade = "A";
  }
  if (percent >= 80 && percent < 90) {
    grade =  "B";
  } 
  if (percent >= 70 && percent < 80) {
    grade =  "C";
  } 
  if (percent >= 60 && percent < 70) {
    grade =  "D";
  } 
  if (percent < 60) {
    grade =  "F";
  }
  return grade;
}
console.log(getStudentGrade(70, 180)); // this should console.log "B"


/****************************** Challenge 3 ******************************/
function digitToWord(digit) {
  switch (digit) {
    case 0: return "zero";
    case 1: return "one";
    case 2: return "two";
    case 3: return "three";
    case 4: return "four";
    case 5: return "five";
    case 6: return "six";
    case 7: return "seven";
    case 8: return "eight";
    case 9: return "nine";
    default: return "unknown";
  }
}
const word = digitToWord(5);
console.log("5 is " + word); // This should console.log "5 is five"


/****************************** Challenge 4 ******************************/
function hasTreat(treat) {
  const treatsArr = ['cookie', 'cake', 'muffin', 'pie', 'ice cream'];
  if (treatsArr.indexOf(treat) !== -1) {
    return true;
  }
  return false;
}
if (hasTreat("cookie")) { // You should have a cookie. 
  console.log("You have a cookie!");
} else {
  console.log("You have no cookie."); // This is wrong. You should have a cookie. 
}


/****************************** Challenge 5 ******************************/
const randomValue = (min, max) => { 
  const val = Math.random() * (max - min) + min;
  return val;
};
console.log(randomValue(2,6)) // should return a random numeric value between 2 and 6. 
// For an explanation of Math.random, see: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_number_between_two_values