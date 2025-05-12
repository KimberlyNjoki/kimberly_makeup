import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Makepayment = () => {
  const location = useLocation();
  const { cart = [], totalAmount = 0 } = location.state || {}; // Get cart and total amount from previous page
  const [phone, setPhone] = useState(''); // State for phone number input
  const [message, setMessage] = useState(''); // State for message feedback
  const img_url = 'https://kimberlynjoki.pythonanywhere.com/static/images/';
  
  // Handle form submission
  const submit = async (e) => {
    e.preventDefault();
    setMessage('Please wait as we process your payment'); // Show loading message

    const data = new FormData();
    data.append('phone', phone); // Append phone number
    data.append('amount', totalAmount); // Append total amount

    try {
      // Send payment data to the backend
      const response = await axios.post(
        'https://kimberlynjoki.pythonanywhere.com/api/mpesa_payment',
        data
      );
      setMessage(response.data.message); // Display response message
    } catch (error) {
      setMessage('Payment failed. Please try again.'); // Display error message
    }
  };

  return (
    <div className="position-relative min-vh-100">
      {/* Background grayscale image and overlay */}
      <div className="background-layer"></div>
      <div className="overlay"></div>

      {/* Main content */}
      <div className="content p-4">
        <nav className="m-4">
          <Link to="/" className="App-buttan mx-2">GET ALL PRODUCTS</Link>
        </nav>

        <div className="row justify-content-center mt-5">
          <div className="col-md-6 card shadow p-4 form2">
            <h1 className="text-center App-h2">Make Payment - Lipa na MPESA</h1>
            
            {/* Product List */}
            <h4 className="text-dark">Products:</h4>

            <ul className="text-dark">
              {cart.map((item) => (
                <div key={item.id}>
                  <img
                    className="product_img"
                    src={img_url + item.product_photo}  // Corrected the property name
                    alt={item.product_name}  // Ensure you use the correct product name
                    style={{ height: 200, objectFit: 'cover' }}
                  />
                  <li className="text-dark">
                    {item.product_name} × {item.qty} — Ksh {item.product_cost * item.qty}
                  </li>
                </div>
              ))}
            </ul>

            {/* Total Amount */}
            <p className="text-dark">
              <strong>Total Cost:</strong> Ksh {totalAmount}
            </p>

            {/* Phone Number Form */}
            <form onSubmit={submit}>
              {message && <p className="text-info">{message}</p>} {/* Display message */}
              
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter Your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)} // Handle phone input change
                  required
                />
              </div>
              
              <button className="btn btn-primary">Make Payment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Makepayment;
