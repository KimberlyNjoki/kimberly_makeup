import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // Extended a bit for full animation
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="splash-screen d-flex flex-column justify-content-center align-items-center vh-100 bop"
       
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6 } }}
      >
        <motion.img
          src="/inizio.png"
          alt="Inizio Logo"
          style={{
            maxWidth: '200px',
            filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))',
          }}
          initial={{ scale: 0, rotate: -45, opacity: 0 }}
          animate={{ scale: 1.2, rotate: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring', stiffness: 200 }}
        />

        <motion.h2
          className="mt-4 text-dark"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{ fontFamily: 'serif', fontWeight: 'bold' }}
        >
          Welcome to Inizio Cosmetics
        </motion.h2>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
