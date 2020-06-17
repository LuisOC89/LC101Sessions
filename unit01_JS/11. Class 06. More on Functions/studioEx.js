
//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

let min;
function findMinValue(numArray){
    min = numArray[0];
    for (i=0;i<numArray.length;i++){
        if (numArray[i] < min) {
            min = numArray[i];
        }
    }
    return min;
}

console.log(findMinValue(nums1));
console.log(findMinValue(nums2));
console.log(findMinValue(nums3));

// WHILE LOOP
console.log("\nWHILE LOOP");
function sortArray(arr){
    let sortedArray = [];
    while (arr.length>0){
        let minValue = findMinValue(arr);
        let minValueIndex = arr.indexOf(minValue);
        let valueReturned = arr.splice(minValueIndex, 1)[0];
        sortedArray.push(valueReturned);
    }
    return sortedArray;
}
console.log(sortArray(nums3));

// RECURSION
console.log("\nRECURSION");
let sortedArray2 = [];
function sortArrayRecursive(arr){
    if (arr.length>0){
        let minValue = findMinValue(arr);
        let minValueIndex = arr.indexOf(minValue);
        let valueReturned = arr.splice(minValueIndex, 1)[0];
        sortedArray2.push(valueReturned);
        return sortArrayRecursive(arr);
    }
    return sortedArray2;
}
nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
console.log(sortArrayRecursive(nums3));

// RECURSION SHRANK
console.log("\nRECURSION SHRANK");
function sortArrayRecursiveShrank(arr, sortedArray3=[]){
    if (arr.length>0){
        sortedArray3.push(arr.splice(arr.indexOf(findMinValue(arr)), 1)[0]);
        return sortArrayRecursiveShrank(arr, sortedArray3);
    }
    return sortedArray3;
}
nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
console.log(sortArrayRecursiveShrank(nums3));
