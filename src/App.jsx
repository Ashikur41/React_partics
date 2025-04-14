import React, { useRef } from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Demo from './Demo';


const App = () => {
  
  let number= useRef(0);


  const change=()=>{

    number.current++
    console.log(number.current)
 

  }

  return (
    <div>
      
      

      <button onClick={change}>Click</button>
    </div>

  );


};
 
export default App;