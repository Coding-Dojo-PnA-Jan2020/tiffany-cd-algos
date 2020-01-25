/*
Recursive Binary Search
Given a sorted array and a value, recursively determine whether value is found within array. 
rBinarySearch([1,3,5,6],4) = false; 
rBinarySearch([4,5,6,8,12],5) = true.
*/

function rBinarySearch(array, val, startIndex = 0, endIndex = array.length-1) {
  if(val <array[startIndex] || val > array[endIndex]) {
    return false;
  }
  var midIndex = Math.floor((startIndex+endIndex)/2);
  if(array[midIndex] == val) {
    return true;
  }
  else if(array[midIndex] > val) {
    return rBinarySearch(array, val, startIndex, endIndex = midIndex-1);
  }
  else {
    return rBinarySearch(array, val, startIndex = midIndex+1, endIndex);
  }
}

console.log(rBinarySearch([1,3,5,6],4));
console.log(rBinarySearch([4,5,6,8,12],5));
console.log(rBinarySearch([4,-5.2,6,8,12],5));

/*
Greatest Common Factor
Given two integers, create rGCF(num1,num2) to recursively determine Greatest 
Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:
gcf(a,b) == a, if a == b;
gcf(a,b) == gcf(a-b,b), if a>b;
gcf(a,b) == gcf(a,b-a), if b>a.
Second: rework facts #2 and #3 to reduce stack consumption and 
expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).
*/

function rGCF(num1, num2) {
  if(num1 === 0) {
    return num2;
  }
  if(num2 === 0) {
    return num1;
  }
  if(num1 === num2) {
    return num1;
  }
  if(num1 > num2) {
    return rGCF(num1-num2, num2);
  }
  return rGCF(num1, num2-num1);

}
console.log(rGCF(20,100));


function rGCF(num1, num2) {

  while(num2) {
    var x = num2;
    num2 = num1 % num2;
    num1 = x
  }
  return num1;
}
console.log(rGCF(123456,987654));