import React, { useEffect, useState } from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Demo from './Demo';


const App = () => {

  let[data,setData]=useState();
  
  useEffect(()=>{
    fetch('https://dummyjson.com/products/1')
          .then(res=>res.json())
          .then(json=>setData(json))

  }),[]


  return (
    <div> 
      {JSON.stringify(data)}
 
    </div>

  );


};
 
export default App;