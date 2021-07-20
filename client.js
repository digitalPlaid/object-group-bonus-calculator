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

function calcBonuses() {
  for (employee of employees){
      // calc bonus %
    // create new object
    let bonus = new Bonus(employee);
    /*
    let bonus = {
        name: employee.name,
        bonusPercentage: bonusPercentage, //result of bonus calculation
        totalCompensation: Math.round(employee.annualSalary*(1+bonusPercentage)), //result
        totalBonus: Math.round(employee.annualSalary * bonusPercentage),//result
    }//new object
    */
    // push to new array
    bonuses.push(bonus);
  }
  $( '#display' ).on('click', displayData);
  return bonuses;
}

function Bonus(employeeObject) {
  this.name= employeeObject.name;
  this.bonusPercentage= bonusPercentageCalc(employeeObject); //result of bonus calculation
  this.totalCompensation= Math.round(employeeObject.annualSalary*(1+bonusPercentageCalc(employeeObject))); //result
  this.totalBonus= Math.round(employeeObject.annualSalary * bonusPercentageCalc(employeeObject));//result
}


function displayData() {
  let output = $( '#employeeDataOut' )
  output.empty();
  for (bonus of bonuses) {
    output.append(`<li>Name: ${bonus.name}, Bonus %: ${bonus.bonusPercentage}
                  ${bonus.totalCompensation}, Total Bonus: ${bonus.totalBonus}</li>`);
  }
}

function bonusPercentageCalc(employeeObject) {
  let reviewRating = employeeObject.reviewRating;
  let bonusPercentage = 0;
  if(reviewRating === 5){
    bonusPercentage = .10;
  }
  if(reviewRating === 4){
    bonusPercentage =  .06;
  }
  if(reviewRating === 3){
    bonusPercentage =  .04;
  }
  if(reviewRating <= 2){
    bonusPercentage = 0;
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


$( document ).ready(calcBonuses);