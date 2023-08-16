function Navbar({setdisplay}) {







    
  return (
    <div className = "Navbar"   >
      <button onClick={()=> setdisplay ("Bio")}>Bio</button>
      <button onClick={()=> setdisplay ("Contact")}>Contact</button>
      <button onClick={()=> setdisplay ("History")}>History</button>
    </div>
  );
}
export default Navbar