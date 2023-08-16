import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Bio from './components/Bio'
import History from './components/History'
import Contact from './components/Contact'

function App() {
  const [display, setdisplay] = useState("")
console.log (display)
  return (


  
    <>
      <div> 
         <h1>Quinten's Portfolio</h1>
         <Navbar setdisplay = {setdisplay} ></Navbar>
      </div>
    
      {display === "Bio" ? <Bio/> : display === "History" ? <History/> : display === "Contact" ? <Contact/> : <div> 
        
        
        </div>
  
  
  }
       
        <p>
         
        </p>
      
      <p className="read-the-docs">
        Johnson web design INC.
      </p>
    </>
  )
}

export default App
