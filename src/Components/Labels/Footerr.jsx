import React from 'react'
import { Link } from 'react-router-dom'

function Footerr() {
  return (
    <div >
     
    <footer className="bg- text-center text-lg-start mt-3" style={{backgroundColor:"grey"}}>
 
 <div className="text-center p-3" >
   
   <Link className="text-dark" to="/" style={{textDecoration:"none"}} >My-Web.com  © 2023 Copyright&nbsp; --&gt;</Link>&nbsp;
   <Link className="text-dark" to='/contact'style={{textDecoration:"none"}} >Contact-Us</Link>
 </div>
 
</footer>

   </div>
  )
}

export default Footerr