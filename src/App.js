
import './App.css';
import { useState} from 'react'
import { AddCountry } from "./components/AddCountry";
import { Showcountry } from "./components/Country";

function App() {
  const [show,setShow]=useState(true)
  return (
    <div className="App">
        <button onClick={()=>{
  setShow(!show)
}} className="togglebtn">{show ?  "Add a new Country" : "go to  list" }</button>
        
        {show ?  <Showcountry/>:null }

        {show ?  null :<AddCountry /> }
    </div>
  );
}

export default App;
