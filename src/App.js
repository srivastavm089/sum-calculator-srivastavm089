import React, { useEffect, useState } from 'react'

function App() {
    const[val,setVal] =  useState(0);


 function handler(e){
    let data = (+e+val);
  setVal(data);
}



    
 
  
  
  return (
    <div>
    <input className='input' type='number' onChange={(e)=>handler(e.target.value)}></input><br></br>
    <p>sum:{val}</p>
    </div>
  )
  }

export default App;
