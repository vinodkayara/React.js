import React,{useState} from "react";


function App() {
const[text,setText]=useState("Micro")
  function handleClick(){
    if(text=="Micro"){
      setText("Macro")
    }else{
      setText("Micro")
    }
    
  }
  
  return (
  <>
        <h2>{text}</h2> 
        <button type="button" onClick={handleClick}>Change title</button>
  </>
  );
}

export default App;
