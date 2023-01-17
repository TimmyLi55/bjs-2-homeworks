"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b,2) - 4 * a * c;
  if (discriminant > 0) {
    let decision = (-b + Math.sqrt(discriminant) )/(2*a);
    arr.push(decision);
    decision = (-b - Math.sqrt(discriminant) )/(2*a)
    arr.push(decision);
   } 
  if (discriminant == 0) {
    let decision = (-b/(2*a));
    arr.push(decision);
  } 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent)){
    return false;
  } else if (isNaN(contribution)) {
    return false;
  } else if (isNaN(amount)) {
    return false;
  } else if (isNaN(countMonths)) {
    return false;
}
let percentForMonth = percent / 100 / 12;
let bodyCredit = amount - contribution;
let monthlyPayment = bodyCredit * (percentForMonth + (percentForMonth / ((Math.pow((1 + percentForMonth),countMonths) - 1))));
let totalAmountToPayment = monthlyPayment * countMonths;
let totalPaymentRoundingUpTo2 = +totalAmountToPayment.toFixed(2);
return totalPaymentRoundingUpTo2;
 
}