import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { v4 as uuid4 } from 'uuid';
import List from './components/List';

function App() {
  const [list,setList] = useState([])
  
  const addItems = (item) => {
    setList([...list,{key:uuid4(), value: item}])   
 }

  const deleteItems = (key) => {
   return setList(list.filter((object) => object.key !== key));
  }

    
  return (
    <div className="App">      
        <InputField addItems = {addItems}/>
        <List list={list} deleteItems ={deleteItems}/>
      </div>
      

  
  );
}

export default App;
