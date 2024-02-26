import React from 'react'
import './List.css'

const List = ({list,deleteItems}) => {

  
return (
    <div >
        {list.map((object,index) => {
            return (
                <div className="listItem">
                <p> {object.value} </p>
                <button onClick={() => {
                    deleteItems(object.key);
                    }}> Done! </button>  
                </div>

            )
        
        })

}
    
    
    </div>
  )
}


export default List
