//add the element in the array and return indices of the element which two gave the value
//[2,7,8,1,0,11,15,3,6]     ouptu=[0,1,2,3,7,8]

const arr=[2,7,8,1,0,11,15,3,6] ;
let target =9;
let temp=[];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]===target){
            console.log("sum",temp.push(i,j))
        }
    }
}
console.log("temp",temp);