import React, { useState } from 'react'
import Button from './Component/Button/Button';

const App = () => {
  const[count,setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }
  return (
    <div>
      <Button count={count} click={handleClick}/>
      <Button count={count} click={handleClick}/>
    </div>
  )
}

export default App
