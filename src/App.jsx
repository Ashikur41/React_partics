import React, { useState } from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Demo from './Demo';


const App = () => {
  
  const [list,setList]=useState([])
  const [item,setItem]=useState("")

  const AddToList=()=>{
    list.push(item)
    setList([...list]);
  }

  const RemoveItem=(index)=>{
    list.splice(index ,1)
    setList([...list])
  }

  return (
    <div>
      <table>
        <tbody>
          {
            list.length!==0?(
              list.map((element,index)=>{
                return(
                  <tr>
                    <td>{element}</td>
                    <td><button onClick={()=>{RemoveItem(index)}}>Remove</button></td>
                  </tr>
                )
              })
            ): (<tr></tr>)
          }
        </tbody>
      </table>

    <input type="text" onChange={(e)=>setItem(e.target.value)} placeholder='Items'/>
    <button onClick={AddToList}>add</button>
    </div>

  );


};
 
export default App;