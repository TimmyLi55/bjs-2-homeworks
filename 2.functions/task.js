function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[arr.length - 1];
  let avg = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] < min) {
      min = arr[i]
    } if (arr[i] > max) {
      max = arr[i]
    }
    
    sum += arr[i];


  }

  avg = sum / arr.length;
  avg = +avg.toFixed(2) 

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
let result = arr.reduce((sum, current) => sum + current, 0);
return result;

}

function differenceMaxMinWorker(...arr) {
if (arr.length === 0){
  return 0;
} 
let min = Math.min(...arr);
let max = Math.max(...arr);
return max-min;

}

function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0;
let sumOddElement = 0;
if (arr.length === 0){
  return 0;
} 
for (element of arr){
  if ((element % 2) === 0) {
    sumEvenElement += element;
  } else {
    sumOddElement += element;
  }
}
return sumEvenElement - sumOddElement

}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0){
    return 0;
  } 
  for (element of arr){
    if ((element % 2) === 0) {
      sumEvenElement += element;
      countEvenElement ++; }
  }
  return sumEvenElement / countEvenElement;
}
function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
let result = -Infinity;
for (element of arrOfArr){
  result = func(...element);
  if (maxWorkerResult < result) {
    maxWorkerResult = result
  }
}

return maxWorkerResult;
}

function worker (arr) {

}