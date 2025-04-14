import React, { useState } from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Demo from './Demo';


const App = () => {
  
  const [number,setNumber]=useState(0)

  return (
    <div>
      <h1>Youu've Clicked The Button: {number} Times.</h1>
      <button onClick={()=>setNumber(number+1)}>Click me!</button>
    </div>

  );


};
 
export default App;