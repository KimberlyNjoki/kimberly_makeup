import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Importing icons

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading('Please wait as we log you in');

    try {
      const data = new FormData();
      data.append('email', email);
      data.append('password', password);

      const response = await axios.post(
        'https://kimberlynjoki.pythonanywhere.com/api/signin', 
        data
      );

      setLoading('');

      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/');
      } else {
        setError(response.data.message);
      }

    } catch (error) {
      setLoading('');
      setError(error.message);
    }
  };

  return (
    <div className="position-relative min-vh-100">
      {/* Background grayscale image and overlay */}
      <div className="background-layer"></div>
      <div className="overlay"></div>

      {/* Main content */}
      <div className="content p-4">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 card shadow p-4 form2">
            <h2 className="text-center App-h2">Sign In</h2>
            {loading && <p>{loading}</p>}
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={submit} className="form-container">
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-text">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    className="form-control mb-3 product-container"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-text">
                    <FaLock />
                  </span>
                  <input
                    type="password"
                    className="form-control mb-3 product"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
              </div>

              <p className="text-dark mt-3">Don't have an account? <Link to="/signup" className="text-primary">Sign Up</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
