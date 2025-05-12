import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { FaLeaf, FaRecycle, FaPaw } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="position-relative min-vh-100">
      <div className="background-layer"></div>
      <div className="overlay"></div>

      <div className="content p-4">
        <Navbar />

        <div className="container mt-5">
          <motion.div 
            className="card shadow-lg p-5 rounded"
            style={{ 
              backgroundColor: 'rgba(128, 90, 213, 0.3)', // soft purple
              backdropFilter: 'blur(20px)', 
              border: '1px solid rgba(128, 90, 213, 0.4)', 
              backgroundImage: 'url("/textures/subtle-texture.png")',
              backgroundSize: 'cover',
              color: '#fff'
            }}
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="row align-items-center mb-5">
              <div className="col-md-6">
                <h2 className="mb-4" style={{ color: '#fff' }}>Welcome to Inizio Cosmetics</h2>
                <p className="lead" style={{ color: '#f0f0f0' }}>
                  Inizio Cosmetics is more than just a beauty brand — it’s a new beginning. We offer inclusive skincare and makeup solutions for all skin types, including acne-prone, albino, and hyperpigmented skin.
                </p>
                <ul className="list-unstyled mt-4" style={{ color: '#f0f0f0' }}>
                  <li className="mb-2">🌿 High-quality, skin-friendly ingredients</li>
                  <li className="mb-2">🌍 Promoting inclusivity and representation</li>
                  <li className="mb-2">🐰 100% sustainable and cruelty-free</li>
                </ul>
                <Link to="/" className="btn btn-outline-light mt-4">Explore Our Products</Link>
              </div>
              <div className="col-md-6">
                <div className="ratio ratio-16x9 shadow-lg rounded">
                  <video autoPlay loop muted className="w-100 rounded">
                    <source src="/videos/inizio.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            <motion.hr className="my-5" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6 }} style={{ transformOrigin: 'left', borderColor: '#fff' }} />

            <motion.div className="row text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <div className="col-md-4 mb-4">
                <motion.div className="p-4 rounded shadow-sm h-100" whileHover={{ scale: 1.05 }} style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                  <FaLeaf size={28} className="mb-2 text-white" />
                  <h5 className="fw-bold text-white">Inclusive Beauty</h5>
                  <p className="text-white small">Products crafted for every tone, type, and texture.</p>
                </motion.div>
              </div>
              <div className="col-md-4 mb-4">
                <motion.div className="p-4 rounded shadow-sm h-100" whileHover={{ scale: 1.05 }} style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                  <FaRecycle size={28} className="mb-2 text-white" />
                  <h5 className="fw-bold text-white">Sustainability</h5>
                  <p className="text-white small">From eco-friendly packaging to ethical production.</p>
                </motion.div>
              </div>
              <div className="col-md-4 mb-4">
                <motion.div className="p-4 rounded shadow-sm h-100" whileHover={{ scale: 1.05 }} style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                  <FaPaw size={28} className="mb-2 text-white" />
                  <h5 className="fw-bold text-white">Cruelty-Free</h5>
                  <p className="text-white small">Absolutely no animal testing — ever.</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="mt-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <h3 className="text-center mb-3" style={{ color: '#fff' }}>Our Story</h3>
              <p className="text-center px-md-5" style={{ color: '#f0f0f0' }}>
                Founded with the belief that beauty should be for everyone, Inizio Cosmetics began as a passion project to fill the gap in inclusive and gentle skincare. Today, we are proud to serve a community of confident individuals embracing their unique beauty. Our mission is to empower through products that are safe, effective, and accessible.
              </p>
            </motion.div>

            <motion.div className="text-center mt-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <h4 style={{ color: '#fff' }}>Join Our Journey</h4>
              <p style={{ color: '#f0f0f0' }}>Be a part of the Inizio movement. Discover your glow, naturally.</p>
              <Link to="/signup" className="btn btn-light mt-2">Join the Community</Link>
            </motion.div>

            <motion.div className="mt-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
              <h4 className="text-center mb-4" style={{ color: '#fff' }}>What Our Customers Say</h4>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <motion.div className="bg-white border rounded p-3 shadow-sm" whileHover={{ scale: 1.02 }}>
                    <p className="text-muted small">“I’ve never felt more confident in my skin. Inizio’s products are gentle and actually work!”</p>
                    <h6 className="text-dark">— Amina W.</h6>
                  </motion.div>
                </div>
                <div className="col-md-4 mb-4">
                  <motion.div className="bg-white border rounded p-3 shadow-sm" whileHover={{ scale: 1.02 }}>
                    <p className="text-muted small">“As someone with albinism, finding makeup that matches and supports my skin has always been hard. Not anymore.”</p>
                    <h6 className="text-dark">— Brian K.</h6>
                  </motion.div>
                </div>
                <div className="col-md-4 mb-4">
                  <motion.div className="bg-white border rounded p-3 shadow-sm" whileHover={{ scale: 1.02 }}>
                    <p className="text-muted small">“Clean, cruelty-free, and effective. I’m a forever customer.”</p>
                    <h6 className="text-dark">— Melissa O.</h6>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
<br></br><br></br>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
