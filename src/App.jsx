import React, { useRef } from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Demo from './Demo';


const App = () => {
  
  let myHeadLine= useRef();


  const change=()=>{

    myHeadLine.current.classList.remove('text-success')
    myHeadLine.current.classList.add('text-danger')

  }

  return (
    <div>
      
      <h1 className='text-success' ref={myHeadLine}>This is Head Line</h1>

      <button onClick={change}>Click</button>
    </div>

  );


};
 
export default App;