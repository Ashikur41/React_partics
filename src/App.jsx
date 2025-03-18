import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';


const App = () => {

  var marks=80;

  return (
    <div>
      {/* JSX Inline if else */}
      {
        marks>80?
        <h1>Brilliant Result</h1>
        :
        <h1>Avarage Result</h1>
      }
    </div>
  );
};

export default App;