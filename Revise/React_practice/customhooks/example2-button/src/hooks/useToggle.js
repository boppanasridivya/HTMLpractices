import { useState } from "react";

const useToggle = (initialValue = false) =>{
    const [isToggle,setIsToggle]= useState(initialValue);

    const Toggle = () =>{
        setIsToggle(!isToggle);
    }

    return [isToggle,Toggle] //if we return array while using u can use with any name 
}//if we use object{} u need to use the same key


export default useToggle;