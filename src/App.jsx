import React, { useRef } from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Demo from './Demo';


const App = () => {
  
  let myImage=useRef();

  const change=()=>{
    myImage.current.src="https://placehold.co/600x400/orange/white";
    myImage.current.setAttribute('height','200')
    myImage.current.setAttribute('width','100')  
    // myImage.current.innerHTML="<ul><li>A</li><li>B</li></ul>";
    // myHeadLine.current.innerText="Hello Word";
  }

  return (
    <div>
      <img ref={myImage} src="https://placehold.co/600x400" alt="" srcset="" />

      <button onClick={change}>Click</button>
    </div>

  );


};
 
export default App;