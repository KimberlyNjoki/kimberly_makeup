import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus, FaUpload, FaShoppingCart, FaInfoCircle } from 'react-icons/fa';

const Navbar = ({ cartItemCount }) => {
  return (
    <section className="row bop">
      <div className="col-md-12 bop">
        <nav className="navbar navbar-expand-md navbar-light bop k">
          <img
            src="/inizio.png"
            alt="Inizio Logo"
            style={{
              maxWidth: '60px',
              filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))',
            }}
          />
          <Link to="/" className="navbar-brand">
            <b className="pig">Inizio Cosmetics</b>
          </Link>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarcollapse">
            <div className="navbar-nav ms-auto align-items-center">
              <Link to="/signup" className="nav-link active">
                <FaUserPlus className="me-2" /> Sign Up
              </Link>
              <Link to="/signin" className="nav-link">
                <FaSignInAlt className="me-2" /> Sign In
              </Link>
              <Link to="/addproduct" className="nav-link">
                <FaUpload className="me-2" /> Upload Products
              </Link>
              <Link to="/cart" className="nav-link position-relative">
                <FaShoppingCart size={20} />
                {cartItemCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItemCount}
                  </span>
                )}
              </Link>
              {/* Add About Us link */}
              <Link to="/about" className="nav-link">
  <FaInfoCircle className="me-2" /> About Us
</Link>

            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
