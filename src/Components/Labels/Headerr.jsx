import React from 'react'
import { Link } from 'react-router-dom'

function Headerr() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  " >
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/"><img src='../images/Logo.png' alt='' style={{width:"120px",height:"50px"}}></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/register'>Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/login'>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/users'>Users</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Headerr