import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Demo from './Demo';


const App = () => {

 
  
  return (
    <div>

    <button onClick={
      function Demo(){
        alert('click');
      }
    }>Submit</button>

      {/* <button onClick={()=>{
        alert("Click Button");
      }}>Submit</button> */}


      {/* <button onClick={alert("click button")}>Submit</button> */}
    </div>

  );


};
 
export default App;