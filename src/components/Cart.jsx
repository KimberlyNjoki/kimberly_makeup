import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaTrashAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.product_cost * item.qty, 0);
    setTotalAmount(total);
  }, [cart]);

  const handleRemove = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate('/makepayment', { state: { cart, totalAmount } });
    } else {
      alert('Your cart is empty!');
    }
  };

  return (
    <div className="position-relative min-vh-100">
      <div className="background-layer"></div>
      <div className="overlay"></div>

      <motion.div
        className="content p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar cartItemCount={cart.reduce((acc, item) => acc + item.qty, 0)} />

        <div className="container mt-5">
          <motion.h2
            className="text-center mb-4"
            style={{ color: '#fff', fontWeight: '600' }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Your Cart
          </motion.h2>

          {cart.length === 0 ? (
            <div className="alert alert-warning text-center">Your cart is empty</div>
          ) : (
            <div className="row">
              {cart.map((item) => (
                <motion.div
                  className="col-md-6 mb-4"
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="p-3 rounded shadow-lg h-100"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(15px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#fff'
                    }}
                  >
                    <div className="row align-items-center">
                      <div className="col-4">
                        <img
                          src={`https://kimberlynjoki.pythonanywhere.com/static/images/${item.product_photo}`}
                          alt={item.product_name}
                          className="img-fluid rounded border border-light"
                          style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      <div className="col-8">
                        <h5 className="fw-bold">{item.product_name}</h5>
                        <p>Qty: <strong>{item.qty}</strong></p>
                        <p>Price: <strong>Ksh {item.product_cost}</strong></p>
                        <p>Total: <strong>Ksh {(item.product_cost * item.qty).toFixed(2)}</strong></p>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <motion.button
                        className="btn btn-outline-danger btn-sm"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleRemove(item.id)}
                      >
                        <FaTrashAlt className="me-1" /> Remove
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {cart.length > 0 && (
            <motion.div
              className="mt-4 p-4 rounded text-white d-flex justify-content-between align-items-center shadow-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.5), rgba(128,90,213,0.4))',
                border: '1px solid rgba(255,255,255,0.3)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h4>Total: Ksh {totalAmount.toFixed(2)}</h4>
              <motion.button
                className="btn btn-light fw-bold px-4"
                whileTap={{ scale: 0.95 }}
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Cart;
