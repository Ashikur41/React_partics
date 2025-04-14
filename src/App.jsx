import React, { useState } from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Demo from './Demo';


const App = () => {
  
  const [myObject,setMyObject]=useState({
    key1: "value1",
    key2: "value2",
    key3: "value3"

  });

  const updateObject=()=>{
    setMyObject(prevObject=>({
      ...prevObject,
      key1:'new value for key 1',
      key2:'new value for key 2'
    }));
  };

  return (
    <div>
      <h1>{myObject.key1}</h1>
      <h1>{myObject.key2}</h1>
      <h1>{myObject.key3}</h1>
      
      <button onClick={updateObject}>Change</button>

    </div>

  );


};
 
export default App;