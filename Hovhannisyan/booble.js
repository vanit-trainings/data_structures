/////////booble sort////////
const readline = require('readline-sync');
let arr = [];
let i = 0;
let n = 0;
let arrObj = "";

function swap(arr1, x, y) {
  let tmp;
  tmp = arr1[x];
  arr1[x] = arr1[y];
  arr1[y] = tmp;
}
booble = function(arr) 
{
	for(var i = 0;i < arr.length;i++)
        {for(var j = 0;j<=arr.length-1;j++)
            if(arr[j]>arr[j+1])
            swap(arr, j,j+1)
        }
        console.log(arr);
}	
//var arr = [1,2,6,1,5,8,9,11,5];
while(arrObj !== "q"){
    arrObj = readline.question("Enter an array element, if You have entered enough elements enter 'q' \n");

    if (!isNaN(Number(arrObj)))
    {
        arr[i] = Number(arrObj);
        i++;
    }
}
n = arr.length;
console.log("Your array");
console.log(arr);
console.log("Sort array");
booble(arr);
                    
