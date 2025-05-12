import axios from 'axios';
import { useState } from 'react';

const Addproduct = () => {
  const [product_name, setProductName] = useState('');
  const [product_description, setProductDescription] = useState('');
  const [product_cost, setProductCost] = useState('');
  const [product_photo, setProductPhoto] = useState(null);
  const [loading, setLoading] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setLoading('Please wait as we upload your product...');
    try {
      const data = new FormData();
      data.append('product_name', product_name);
      data.append('product_description', product_description);
      data.append('product_cost', product_cost);
      data.append('product_photo', product_photo);

      const response = await axios.post(
        'https://kimberlynjoki.pythonanywhere.com/api/add_product', data
      );

      setLoading('');
      setMessage(response.data.message);
    } catch (error) {
      setLoading('');
      setError('Something went wrong, please try again.');
    }
  };

  return (
    <div className="position-relative min-vh-100">
      {/* Background and overlay */}
      <div className="background-layer"></div>
      <div className="overlay"></div>

      {/* Main content */}
      <div className="content p-4">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 card shadow p-4 form2">
            <h3 className="App-h2 text-center">Upload Product</h3>
            
            {/* Displaying loading, success, or error messages */}
            {loading && <p className="text-info">{loading}</p>}
            {message && <p className="text-success">{message}</p>}
            {error && <p className="text-danger">{error}</p>}
            
            <form onSubmit={submit}>
              {/* Product Name Input */}
              <input
                type="text"
                placeholder="Enter Product Name"
                className="form-control mb-3"
                value={product_name}
                onChange={(e) => setProductName(e.target.value)}
                required
              />

              {/* Product Description Input */}
              <textarea
                className="form-control mb-3"
                placeholder="Describe your product"
                value={product_description}
                onChange={(e) => setProductDescription(e.target.value)}
                required
              ></textarea>

              {/* Product Cost Input */}
              <input
                type="number"
                className="form-control mb-3"
                placeholder="Enter Product Cost"
                value={product_cost}
                onChange={(e) => setProductCost(e.target.value)}
                required
              />

              {/* Product Photo Input */}
              <input
                type="file"
                className="form-control mb-3"
                accept="image/*"
                onChange={(e) => setProductPhoto(e.target.files[0])}
                required
              />

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary btn-block">
                Upload Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;