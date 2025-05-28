let str1 = "script";
let str2 = "javascript"

let commonwords ="";

for(let i=0;i<str1.length;i++){
    let char = str1[i];
    if(str2.includes(char) && !commonwords.includes(char)){
        commonwords = commonwords+char;
    }
}
console.log("commonwords :", commonwords);