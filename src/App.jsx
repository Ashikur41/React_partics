import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Demo from './Demo';


const App = () => {

 const PostFormData=(event)=>{

  event.preventDefault();

  // TODO
  alert('Form Submitted');

 }
  
  return (
    <div>

      <form action="#" onSubmit={PostFormData}>
        <input type="text" placeholder='Your Name' />
        <button>Send</button>
      </form>

    </div>

  );


};
 
export default App;