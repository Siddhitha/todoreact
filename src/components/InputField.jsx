import React, {useState} from 'react'
import "./InputField.css"

const InputField = (props) => {
  const [item,setItem] = useState(null);
  const onChangeHandler = e => {
    setItem(e.target.value)
  } 
 
  return (
    <div>
      <div className="Input-wrapper">
       <input placeholder="Enter the task" onChange= {onChangeHandler} value={item} /> 
       <button onClick = {() => {
        props.addItems(item);
        setItem(" ")}}> Add </button>
      
      </div> 
    </div>
    
  )
}

export default InputField
