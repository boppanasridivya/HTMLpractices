import React from 'react'

const Button = ({count,click}) => {
  return (
    <div>
      <button onClick={click}>Clicked {count} times</button>
    </div>
  )
}

export default Button
