// "use strict";

// const ageCheck = (age) => {
//   if (age < 21) {
//     console.log("No drinks for you!")
//   } else {
//     console.log("PARTAY!!!!")
//   }
// }

// ageCheck(12)
// ageCheck(21)

// const lengthOutput = (strang) => {
//   return strang.length
// }

// console.log(lengthOutput([1,2,3,4,5,6,7]));

// const quoteFinder = (testString) => {
//   return "winter is coming".indexOf(testString)
// }

// console.log(quoteFinder("is"));
// // logs 7 because that is where "is" starts in the string

const employee = {
    firstName: "Dana",
    lastName: "Pham",
    role: "student",
    accountNumber:  "74-65995498",
    isManager: false,
    titles: ["HR Coordinator", "Genius"],
    accolade:  {
      title: "Employee of the Year",
      dateEarned: "1/2/2020",
      expires:  "12/31/2020",
      isCool: true
    }

}

console.log(employee.firstName)
const keyToCheck = "accolade";

console.log(employee[keyToCheck]);
console.log(employee[keyToCheck].isCool);

const addStatus = (employee) => {
  if (employee.firstName[0] === 'D') {
    employee.status = "vip";
  } else {
    employee.status = "peasant";
  }
}

addStatus(employee);
console.log(employee);
