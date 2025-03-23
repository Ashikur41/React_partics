import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';


const App = () => {

  let status= false;
  
  return (
    <div>
      {
        status?
        <button>Logout Button</button>
        :
        <button>Login Button</button>
      }
    </div>

  );


};

export default App;