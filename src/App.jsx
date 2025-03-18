import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';


const App = () => {

  // JSX Loop Inside

  const city=['Dhaka','London','USA','Jessore']

  return (
    <div>
      <ul>
        {
          city.map((item,i)=>{

            return <li key={i.toString}>{item}</li>

          })
        }
      </ul>
    </div>
  );
};

export default App;