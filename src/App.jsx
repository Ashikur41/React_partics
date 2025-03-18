import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';


const App = () => {

  // IMMEDIATELY_INVOKED
  // function expressions inside your JSX

  var marks=70;

  return (
    <div>
      {(
        ()=>{
          if(marks>=80 && marks<100){
            return <h1>A+</h1>
          }
          else if(marks>=70 && marks<80){
            return <h1>A</h1>
          }
          else if(marks>=60 && marks<70){
            return <h1>A-</h1>
          }
          else if(marks>=50 && marks<60){
            return <h1>B</h1>
          }
          else if(marks>=40 && marks<50){
            return <h1>C</h1>
          }
          else if(marks>=33 && marks<40){
            return <h1>D</h1>
          }
          else{
            return <h1>Fail</h1>
          }
        }
      )()}
    </div>
  );
};

export default App;