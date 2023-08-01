function getArrayParams(...arr) {

  let min = Infinity; 
  let max = -Infinity; 
  let sum = 0; 
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    } 
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  let avg = +((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

  for (i = 0; i < arr.length; i++) {
		if (arr[i] === undefined) {
			return 0;
		}
	}

  return arr.reduce((acc, item) => acc + item, 0);
}

function differenceMaxMinWorker(...arr) {

  let min = Infinity;
  let max = -Infinity;
  for (i = 0; i < arr.length; i++) {
		if (arr[i] === undefined) {
			return 0;
    } else if (min > arr[i]) {
      min = arr[i];
    } if (max < arr[i]) {
      max = arr[i];
    }
  } 

  if (max - min === -Infinity) {
    return 0;   
  } else {
    return max - min;
  } 

}

function differenceEvenOddWorker(...arr) {

  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) {
			return 0
		} if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    } 
  } 

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {

  let sumEventElement = 0;
  let countEventElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) {
			return 0; 
    } else if (arr[i] % 2 === 0) {
      sumEventElement += arr[i];
      countEventElement ++;
    }
  } 

  if (sumEventElement !== countEventElement) {
  return sumEventElement / countEventElement;
  } else {
    return 0;
  }

}

function makeWork (arrOfArr, func) {

  let maxWorkerResult;
  let arr = [];
	let moreThanMax = [];
	for (let i = 0; i < arrOfArr.length; i++) {
		maxWorkerResult = arrOfArr[i];
		arr.push(maxWorkerResult);
		moreThanMax.push(func(...maxWorkerResult));
	}

	const max = moreThanMax.reduce((acc, item) => Math.max(acc, item), -Infinity);
	return max;
}
