import React, { useState } from 'react'

const Square = ({value, handleClick}) => {

 
  return (
    <div>
      <button className='="button' onClick={handleClick}>{value}</button>
    </div>
  )
}

export default Square
