import React, { useEffect, useState } from 'react'
import useFetching from './hooks/useFetch';

const App = () => {
    const url="https://api.escuelajs.co/api/v1/products";


     const{data,loading,error} = useFetching(url);


if(loading) return <p>Loading...</p>
if(error) return <p>Error : {error}</p>

  return (
    <div>
      {data.map((item,index)=>(
        <div key={index}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  )
}

export default App
