

import { useState,useEffect } from 'react'


export const Showcountry = () => {
  

    const [countrydata,setcountrydata] = useState([])
    const [text,setText] = useState("")
   
   

    useEffect(()=>{
        getData()
       
    },[])
        const  getData=async()=>{
         const data= await fetch("http://localhost:8080/country").then((d)=>
            d.json()
          )
            console.log(data)
          setcountrydata(data)
        }



        // sortr 1
        function Handlequery(e){
setsort(e.target.value)
        }

        // // sorting 
        // function Handle(e){
        //   setsortby(e.target.value)
          
        // }

        function Sort(e){
          // age
        if(e.target.value=="asc"){
  
            const sortdata=[...countrydata]
            sortdata.sort(function(a,b){
              return (a.Population-b.Population)
             
            })
            console.log(sortdata)
            setcountrydata(sortdata)

          console.log("yes")
        }  else  if(e.target.value=="desc"){
  
          const sortdata=[...countrydata]
          sortdata.sort(function(a,b){
            return (b.Population-a.Population)
           
          })
          console.log(sortdata)
          setcountrydata(sortdata)

        console.log(e.target.value)
      }

      //
        }
        // delete

        function DeletItem(e){
        const d=  fetch(`http://localhost:8080/country/${e}`, { method: 'DELETE' })
        location.reload()
          console.log(e)
                  }

        
        
          
// search
  function handlechange(e){
    setText(e.target.value)
              }

    return (
      <div>
         <input className='search' onChange={handlechange} type="text" placeholder='search by Country'/>
        <div className="controls">
       
          <div>
          Sort By
            <select  onChange={Sort}
              // select dropdown needs both value and onChange
              className="sortorder"
            >
              <option>Population</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
            <th>S.No.</th>
              <th>Country</th>
              <th>City</th>
              <th>population</th>
              <th>Edit</th>
              <th>Delete</th>
              
            </tr>
          </thead>
          <tbody className="tbody">
            {countrydata.filter((user)=>user.Country.toLowerCase().includes(text)).map((e)=>(

            <tr key={e.id} className="row">
                <td className="sname">{e.id}</td>
              <td className="first_name">{e.Country}</td>
              <td className="last_name">{e.City}</td>
              <td className="email">{e.Population}</td>
              <td className="Edit">Edit</td>
              <td className="Delete" onClick={(()=>{
                DeletItem(e.id)
              })}>Delete</td>
             
            </tr>
             ))}
          </tbody>
        </table>
      </div>
    );
  };