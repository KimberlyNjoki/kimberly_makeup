import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section className="row bop">
    <div className="col-md-12 bop">
        {/* below nav tag carries all the contents of the nav bar */}
        <nav className="navbar navbar-expand-md navbar-light bg-light k">
           <Link to={'/'} className="navbar-brand"><b className='pig'>Inizio Cosmetics</b></Link>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* below div carries the van bar links */}
            <div className="collapse navbar-collapse" id="navbarcollapse">
                <div className="navbar-nav">
                   <Link to={'/signup'} className="nav-link active">Sign Up</Link>
                   <Link to={'/signin'} className="nav-link">Sign In</Link>
                   <Link to={'/addproduct'}className="nav-link">Upload Products</Link>
                </div>
            </div>
        </nav>
    </div>
</section>
  )
}

export default Navbar