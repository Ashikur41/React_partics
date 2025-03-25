import React, { useRef } from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Demo from './Demo';


const App = () => {
  
  let myHeadLine=useRef();

  const change=()=>{
    myHeadLine.current.innerHTML="<ul><li>A</li><li>B</li></ul>";
    // myHeadLine.current.innerText="Hello Word";
  }

  return (
    <div>
      <h1 ref={myHeadLine}></h1>

      <button onClick={change}>Click</button>
    </div>

  );


};
 
export default App;