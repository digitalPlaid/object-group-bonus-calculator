const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


// 1. create array for new objects
    // loop on employees, (create function) creating new obj for each employee, (create function) for bonus calculation
    // add it to array
let bonuses = [];

for (employee of employees){
  let bonusPercentage = bonusPercentageCalc(employee);
    // calc bonus %
  // create new object
  let bonus = {
      name: employee.name,
      bonusPercentage: bonusPercentage, //result of bonus calculation
      totalCompensation: employee.annualSalary*(1+bonusPercentage), //result
      totalBonus: employee.annualSalary*bonusPercentage,//result
  }//new object
  // push to new array
  bonuses.push(bonus);
}

function bonusPercentageCalc(employeeObject) {
  let reviewRating = employeeObject.reviewRating;
  if(reviewRating === 5){
    let bonusPercentage = .10;
  }
  if(reviewRating === 4){
    let bonusPercentage =  .06;
  }
  if(reviewRating === 3){
    let bonusPercentage =  .04;
  }
  if(reviewRating <= 2){
    let bonusPercentage = 0;
  }
  if (employeeObject.employeeNumber.length === 4) {
    bonusPercentage += .05;
  }
  if (Number(employeeObject.annualSalary) > 65000) {
    bonusPercentage -= .01;
  }
  if (bonusPercentage > .13) {
    bonusPercentage = .13;
  }
  if (bonusPercentage < 0){
    bonusPercentage = 0;
  }
  return bonusPercentage;
  
  
}



console.log( employees );
