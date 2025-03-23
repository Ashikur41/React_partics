import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';


const App = () => {

  let status= true;
  
  return (
    <div>
      <h1>Login Status</h1>
      {(()=>{

        if(status==true){
          return <button>LogOut Button</button>
        }else{
          return <button>Login Button</button>
        }
      })()}
    </div>

  );


};
 
export default App;