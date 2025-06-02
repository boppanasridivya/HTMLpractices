let arr =[1,3,5,8,9,11.12,2,4,7];

// //using sort method
// arr.sort((a,b) =>a-b
// );

// console.log(arr);

//without using sort method



for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            // swap arr[j] and arr[j + 1]
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);
