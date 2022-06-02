

import { useState } from 'react'

export const AddCountry = () => {
  const [formData ,setformData]=useState([])
 
  
const Handle=(e)=>{

  const {name, value}=e.target
      setformData({
          ...formData,[name]:value,
      })
  }


  const handleSubmit=(e)=>{
    e.preventDefault()
    
 
    const create={
      "Country": formData.Country,
      "City": formData.City,
      "Population": formData.Population,
 
    }
    fetch("http://localhost:8080/country",{
      method:"POST",
      headers:{
          "content-type":"application/json",
      },
      body:JSON.stringify(create),
    
    }).then(()=>{
      
    })
    alert("registration succesful")
    
    }
  return (
    
    <form onSubmit={handleSubmit}  className="addcountry">
      
      <div>
        Country:{" "}
        <input onChange={Handle}
          type="text"
          name="Country"
          className="Country"
          placeholder="enter Country"
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input onChange={Handle}
          type="text"
          name="City"
          className="City"
          placeholder="enter last City"
        />
      </div>
      <div>
        {" "}
        Email:
        <input onChange={Handle}
          type="Number"
          name="Population"
          className="Population"
          placeholder="enter Population"
        />
      </div>

     

      <input className="submit" type="submit" value="Submit" />
    
    </form>
  );
};