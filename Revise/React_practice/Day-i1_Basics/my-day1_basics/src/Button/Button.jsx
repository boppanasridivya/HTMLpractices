import React from 'react'

const Button = (props) => {
    const{backgroundColor,buttonText,click} = props;
  return (
    <div>
      <button style={{backgroundColor:backgroundColor}} onClick={click}>{buttonText}</button>
    </div>
  )
}

export default Button
