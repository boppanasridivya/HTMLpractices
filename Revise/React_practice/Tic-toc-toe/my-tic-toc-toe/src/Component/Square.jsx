import React, { useState } from 'react'

const Square = () => {
    const[value,setValue]=useState(null);

    function handleClick(){
        setValue("X");
    }
  return (
    <div>
      <button className='="button' onClick={handleClick}>{value}</button>
    </div>
  )
}

export default Square
