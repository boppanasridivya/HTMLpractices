// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let arr =[1,35,6,5,34,8];


function largest(arr){
    let max =arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }

}
return max;//Largest number 35 we will get here
}

let output = largest(arr);
let secondLargest = -Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]<output && arr[i]> secondLargest){
        secondLargest = arr[i];
       
    }
}
console.log("largest number in an array is: ", output);  
console.log(" Second largest number in an array is: ", secondLargest);  // second largest we will get