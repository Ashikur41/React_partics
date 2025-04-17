import React, { useState } from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Demo from './Demo';


const App = () => {
  
  let [FormObj,SetFormObj]=useState({
    fName:"",
    lName:"",
    city:"",
    gender:""
  })

  const InputOnChange = (property,value)=>{
    SetFormObj(prevObj=>({
      ...prevObj,[property]:value
    }))
  }

  const FormSubmit=(e)=>{

    e.preventDefault();
    // console.log(FormObj)
    alert(JSON.stringify(FormObj))
  }
  return (
    <div>
      <div className="container">
          <form onSubmit={FormSubmit}>
            <input onChange={(e)=>{InputOnChange("fName",e.target.value)}} value={FormObj.fName} type="text" placeholder='First Name'/><br/>

            <input onChange={(e)=>{InputOnChange("lName",e.target.value)}} value={FormObj.lName} type="text" placeholder='Last Name'/><br/>

            <select onChange={(e)=>{InputOnChange("city",e.target.value)}} value={FormObj.city}>
              <option value="">Choose City</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Jessore">Jessore</option>
            </select>
            <br/>
            <input onChange={()=>{InputOnChange("gender","Male")}} checked={FormObj.gender==="Male"} type="radio" name='gender'/>Male

            <input onChange={()=>{InputOnChange("gender","Female")}} checked={FormObj.gender==="Female"} type="radio" name='gender'/>Female
            <br/>
            <button type="submit">Submit</button>
          </form>
      </div>

 
    </div>

  );


};
 
export default App;