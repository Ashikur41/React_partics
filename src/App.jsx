import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';


const App = () => {
  return (
    <div>
      <p>
        JSX CONVENTIONS<br/>
        .You need to return a single parent element in JSX<br/>
        .You can implement Js directly in JSX<br/>
        .All Tags self-close in JSX<br/>
        .className and HTML For not class and for in JSX<br/>
        .Write all HTML Attributes in camelCase in JSX<br/>
        .Write Inline Styles as Objects in JSX<br/>
      </p>
    </div>
  );
};

export default App;