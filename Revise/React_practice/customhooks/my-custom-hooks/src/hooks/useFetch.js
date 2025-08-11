import { useEffect, useState } from "react";

const useFetching =(url) =>{
    const[data,setData] = useState(null);
const[loading, setLoading] = useState(true);
const[error,setError] = useState(null)


useEffect(()=>{
  setLoading(true);
    const fetchData= async()=>{
      try{
         const response = await fetch(url);
         const data = await response.json();
         setData(data);
         setLoading(false);
         console.log(data);
      }
      catch(error){
        setError(error);
      }
    }
   fetchData()
},
[url])
   return{data, loading,error}
}

export default useFetching;