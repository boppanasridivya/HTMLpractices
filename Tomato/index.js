let signUpBtn= document.querySelector(".signUpBtn");
let signInBtn= document.querySelector(".signInBtn");
let title= document.querySelector(".title");
let underline= document.querySelector(".underline");
let nameField= document.querySelector(".nameField");
let text= document.querySelector(".text");

signInBtn.addEventListener("click", ()=>{
    nameField.style.maxHeight ='0';
    title.innerHTML="Sign In";
    text.innerHTML="Lost Password ";
    signUpBtn.classList.add("disable");
    signInBtn.classList.remove("disable");
    underline.style.transform='translateX(30px)';
});
signUpBtn.addEventListener("click", ()=>{
    nameField.style.maxHeight ='60px';
    title.innerHTML="Sign Up";
    text.innerHTML="Password Suggestions ";
    signUpBtn.classList.remove("disable");
    signInBtn.classList.add("disable");
    underline.style.transform='translateX(0)';
});