"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (Math.pow(b)) - (4 * a * c);
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
  
}