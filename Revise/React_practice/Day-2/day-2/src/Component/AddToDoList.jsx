import React from 'react'

const AddToDoList = ({text, handleChange,handleToDoAdd}) => {
  return (
    <div>
      <div>
        <input type="text" onChange={handleChange} value={text}/>
        <button onClick={handleToDoAdd}>Add</button>
      </div>
    </div>
  )
}

export default AddToDoList
