// ... [imports unchanged]
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Carousel from './Carousel';
import SplashScreen from './SplashScreen';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const theme = createTheme({
  palette: {
    primary: { main: '#e89eef' },
    secondary: { main: '#336b87' },
  },
});

const Getproducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  const [showSplash, setShowSplash] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);

  const navigate = useNavigate();
  const img_url = 'https://kimberlynjoki.pythonanywhere.com/static/images/';

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading('Please wait, we are retrieving the products');
      try {
        const response = await axios.get(
          'https://kimberlynjoki.pythonanywhere.com/api/get_product_details'
        );
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading('');
      } catch (err) {
        setLoading('');
        setError('There was an error retrieving products.');
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.product_description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const exists = updatedCart.find((item) => item.id === product.id);
      if (exists) {
        exists.qty += 1;
      } else {
        updatedCart.push({
          id: product.id,
          product_name: product.product_name,
          product_description: product.product_description,
          product_cost: product.product_cost,
          product_photo: product.product_photo,
          qty: 1,
        });
      }
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="position-relative min-vh-100">
        <div className="background-layer"></div>
        <div className="overlay"></div>

        <motion.div className="content p-4" initial="initial" animate="animate">
          <Navbar cartItemCount={cart.reduce((sum, item) => sum + item.qty, 0)} />
          <br /><br />

          <motion.div {...fadeInUp}>
            <Carousel />
          </motion.div><br /><br />

          <Link to="/skinquiz" className="quiz-button btn" style={{
            backgroundColor: '#cbbdfe',
            borderColor: '#e89eef',
            fontWeight: '600',
          }}>
            <span className="quiz-icon">🧪</span> Take the Skin Quiz
          </Link>

          <motion.h3 className="mt-5 text-center App-h2 text-2xl font-semibold" style={{
            backgroundColor: 'rgba(128, 90, 213, 0.2)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(128, 90, 213, 0.3)',
            backgroundImage: 'url("/textures/subtle-texture.png")',
            backgroundSize: 'cover',
            color: '#fff',
            padding: '10px',
            fontSize: '1.8rem',
            fontWeight: '700',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
          }} {...fadeInUp}>
            Available Products
          </motion.h3>

          <motion.div className="my-4" {...fadeInUp}>
            <input
              type="text"
              className="form-control shadow-sm p-2"
              style={{
                fontSize: '1.1rem',
                padding: '12px 20px',
                border: '2px solid #e89eef',
                borderRadius: '5px',
                color: '#333',
              }}
              placeholder="Search Products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>

          {loading && <p>{loading}</p>}
          {error && <p>{error}</p>}

          <div className="row">
            {filteredProducts.slice(0, visibleCount).map((product) => (
              <motion.div
                className="col-md-3 justify-content-center mb-4"
                key={product.id}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
                  transition: { type: 'spring', stiffness: 300 },
                }}
              >
                <div
                  className="card shadow-lg rounded overflow-hidden p-3"
                  style={{
                    backgroundColor: 'rgba(128, 90, 213, 0.2)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(237, 233, 247, 0.9)',
                    backgroundImage: 'url("/textures/subtle-texture.png")',
                    backgroundSize: 'cover',
                    color: '#fff',
                  }}
                >
                  <img
                    className="mt-4 product_img"
                    src={img_url + product.product_photo}
                    alt={product.product_name}
                    style={{
                      borderRadius: '8px',
                      border: '2px solid #e89eef',
                    }}
                  />
                  <div className="card-body">
                    <h5 className="text" style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                      {product.product_name}
                    </h5>
                    <p className="text-white" style={{
                      fontSize: '1rem',
                      color: '#fbf5f5',
                      textShadow: '1px 1px 5px rgba(251, 245, 248, 0)',
                    }}>
                      {product.product_description.slice(0, 100)}...
                    </p>
                    <b className="mt-2" style={{ fontSize: '1.3rem', color: '#ede9f7' }}>
                      Ksh {product.product_cost}
                    </b>
                    <br />
                    <div className="text-center mt-3">
                      <motion.button
                        className="btn"
                        whileTap={{ scale: 0.95 }}
                        style={{
                          backgroundColor: '#cbbdfe',
                          borderColor: '#e89eef',
                          fontWeight: '600',
                          padding: '10px 30px',
                          minWidth: '150px'
                        }}
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {visibleCount < filteredProducts.length && (
            <div className="text-center mt-4">
              <motion.button
                className="btn btn-outline-light"
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '10px 30px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  borderColor: '#e89eef',
                  backgroundColor: 'transparent',
                  color: '#fff',
                }}
                onClick={loadMore}
              >
                Load More Products
              </motion.button>
            </div>
          )}<br /><br />

          <Footer />
        </motion.div>
      </div>
    </ThemeProvider>
  );
};

export default Getproducts;
