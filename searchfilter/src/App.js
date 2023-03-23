import './App.css';
import JSONDATA from './MOCK_DATA.json';
import {useState} from 'react';



function App() {
  const [searchterm, setSearchterm] = useState("");

  const handleChange = (event) => {   

    

    setSearchterm(event.target.value);
     
  }

  return (
    <div className="App">
      <h1>Search filter</h1>
      <input type = "text" placeholder = "Search..." onChange={handleChange}/>
     
      {JSONDATA.filter((val)=> {
          
        if(searchterm === "")
        {
          return val
        } else if(val.first_name.toLowerCase().includes(searchterm.toLowerCase()))
        {
          return val
        }
        

      }).map((val, key) =>{
        return(
          <div className= "user" key ={key}>
            <p>{val.first_name}</p>
          </div>
        )

      })}
      
    </div>
  );
}

export default App;
