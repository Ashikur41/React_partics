import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Demo from './Demo';


const App = () => {
  
  return (
    <div>
      <h1>React Hook</h1>
      <p>1. React Hook is a feature in the React library that allows developers
        to use state and other React features in functional components,
        which were previously only available in class components.
      </p>
      <p>2. It was introduced in React version 16.8.</p>
      <p>3. Hooks can be used to manage state,handle side effects,and access
        lifecycle metthods in functional components.
      </p>
      <p>4. There are several built-in Hooks provided by React,such as useState,
        useEffect,useContext,and useRef.
      </p>
      <p>5. React Hooks have greatly simplifed the development process in React and
        have made it easier to write reusable and composable code.
      </p>

      <h1>React Hook</h1>
      <h3>useRef() Method</h3>
      <p>1. The useRef Hook allows you to persist values between renders</p>
      <p>2. It can be used to store a mutable value that does not cause a re-render when updated.</p>
      <p>3. It can be used to access a DOM element directly.</p>
    </div>

  );


};
 
export default App;