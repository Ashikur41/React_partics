import React, { useRef } from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Demo from './Demo';


const App = () => {
  
  
  // let firstName= useRef()
  // let lastName= useRef();

  let firstName,lastName = useRef();

  const change=()=>{

    let FName= firstName.value;
    let LName= lastName.value;

    alert(FName+" "+LName);
  }

  return (
    <div>
      
    <input type="text" ref={(f)=>firstName=f}  placeholder='First Name'/>
    <input type="text" ref={(l)=>lastName=l} placeholder='Last Name'/>
      <button onClick={change}>Click</button>
    </div>

  );


};
 
export default App;