function quickSort(inputArray) {
	if (inputArray.length <= 1) { 
		return inputArray;
	} 

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = inputArray.pop();
		var length = inputArray.length;

		for (var i = 0; i < length; i++) {
			if (inputArray[i] <= pivot) {
				left.push(inputArray[i]);
			} else {
				right.push(inputArray[i]);
			}
		}

		return newArray.concat(quickSort(left), pivot, quickSort(right));
	
}

var myArray = [3, 2, 12, 0, 0, 2, 5, -1, 4, 1, 8, 90];

console.log("Original array: " + myArray);
var sortedArray = quickSort(myArray);
console.log("Sorted array: " + sortedArray);