import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaEnvelope, FaPhone, FaLock } from 'react-icons/fa'; // Importing icons

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const [strength, setStrength] = useState('');

  const checkPasswordStrength = (value) => {
    setPassword(value);

   
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const mediumRegex = /^((?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*\d))(?=.{6,})/;

    if (strongRegex.test(value)) {
      setStrength('Strong');
    } else if (mediumRegex.test(value)) {
      setStrength('Medium');
    } else {
      setStrength('Weak');
    }
  };

  const getStrengthColor = () => {
    switch (strength) {
      case 'Strong': return 'green';
      case 'Medium': return 'orange';
      case 'Weak': return 'red';
      default: return '';
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading('Please wait as we upload your data');
   
    try {
      const data = new FormData();
      data.append('username', username);
      data.append('email', email);
      data.append('phone', phone);
      data.append('password', password);

      const response = await axios.post(
        'https://kimberlynjoki.pythonanywhere.com/api/signup',
        data
      );

      setLoading('');
      setSuccess(response.data.success);
    } catch (error) {
      setLoading('');
      setError(error.message);
    }
  };

  return (
    
    <div className="position-relative min-vh-100">
      <div className="background-layer"></div>
      <div className="overlay"></div>

      <div className="content p-4">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 card shadow p-4 form2">
            <h2 className="text-center App-h2">Sign Up</h2>
            {loading && <p>{loading}</p>}
            {error && <p className="text-danger">{error}</p>}
            {success && <p className="text-success">{success}</p>}
            <form onSubmit={submit} className="form-container">
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-text">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    className="form-control mb-3 product-container"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-text">
                    <FaEnvelope />
                  </span>
                  <input
                    type="text"
                    className="form-control mb-3 product-container"
                    placeholder="Enter Email Address"
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
                    className="form-control mb-1 product"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => checkPasswordStrength(e.target.value)}
                    required
                  />
                </div>
                {password && (
                  <small style={{ color: getStrengthColor() }}>
                    Password Strength: {strength}
                  </small>
                )}
              </div>

              <div className="form-group mt-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <FaPhone />
                  </span>
                  <input
                    type="text"
                    className="form-control mb-3 product"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">Sign Up</button>

              <p className="text-dark mt-3">
                Already have an account? 
                <Link to="/signin" className="text-primary"> Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
