import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';

const LoginStatusBtn=(status)=>{
  if(status){
    return <button>LogOut Btn</button>
  }else{
    return <button>Login Btn</button>
  }
}

const App = () => {
  
  // if and else

  // const status=true;

  // if(status==true){
  //   return (
  //     <div>
  //       <h1>Login Status</h1>
  //       <button>Logout</button>
  //     </div>
  
  //   );
  // }else{
  //   return (
  //     <div>
  //       <h1>Login Status</h1>
  //       <button>Login</button>
  //     </div>
  
  //   );
  // }

  // fuctional

  return (
    <div>
      <h1>Login Status</h1>
      {LoginStatusBtn(false)}
    </div>

  );


};

export default App;