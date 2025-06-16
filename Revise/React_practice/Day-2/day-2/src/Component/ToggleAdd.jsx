import React from 'react'

const ToggleAdd = ({todo, handleToggle}) => {
  return (
    <div>
       {
                todo.map((item)=>{
                    const {title, status,id} = item;
                    return(
                    <li key={id}>
                        {title} - {status ? "Completed" : "notCompleted"} 
                         <button onClick={()=>handleToggle(id)}>Toggle</button>
                    </li>
                    );
           
                    
                })
            }
    </div>
  )
}

export default ToggleAdd
