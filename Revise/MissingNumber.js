let arr =[1,2,3,5];
let n=5;

let expectVal = (n*(n+1))/2;
let actualVal = arr.reduce((sum,num)=>(sum+num),0);

let MissingNumber = expectVal-actualVal;
console.log("MissingNumber:", MissingNumber);
