import React, { useRef } from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Demo from './Demo';


const App = () => {
  
  let APIData=useRef(null)
  let myPTag=useRef()

  const fetchData = async () =>{

    const response= await fetch("https://jsonplaceholder.typicode.com/todos/1")
    APIData.current=await response.json()
  }

  const showData =()=>{

     myPTag.current.innerText=JSON.stringify(APIData.current)
  }



  return (
    <div>
      
      
      <p ref={myPTag}></p>
      <button onClick={fetchData}>Call API</button>
      <button onClick={showData}>Show Data</button>
    </div>

  );


};
 
export default App;