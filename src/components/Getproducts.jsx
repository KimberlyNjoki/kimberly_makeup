import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Footer from './Footer'
const Getproducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState('')
    const [error, setError] = useState('')

    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate()
    //specify image location url
    const img_url = 'https://kimberlynjoki.pythonanywhere.com/static/images/'

    const getProducts = async () => {
        setLoading('Please wait, we are retrieving the products')
        try {
            const response = await axios.get(
                "https://Kimberlynjoki.pythonanywhere.com/api/get_product_details"
            )
            setProducts(response.data)
            setLoading('')
        } catch (error) {
            setLoading('')
            setError('There was an error')
        }



    }

    useEffect(() => {
        getProducts();
    }, [])
    //filter logic
    //Search filter logic
    useEffect(() => {
        if (!products) return;
        //prevent errors in product undefined
        const filtered = products.filter((product) =>
            product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.product_description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchQuery, products]);




    return (
        <div className='row bg-overlay'>
            <Navbar />

            <Carousel />
            <h3 className='mt-5 net App-header'>Available Products</h3>
            <input type='text' className='form-control shadow-sm p-2' placeholder='Search Products...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            {loading}
            {error}
            {
                filteredProducts?.map((product) => (

                    <div className="col-md-3 justify-content-center mb-4">
                        <div className="card shadow ">
                            <img className='mt-4 product_img' src={img_url + product.product_photo} alt='' />
                            <div className="card-body boy">
                                <h5 className='App-p'>{product.product_name}</h5>
                                <p className="text-muted">{product.product_description.slice(0, 100)}</p>
                                <b className='mt-2'>Ksh {product.product_cost}</b><br></br>
                                <button onClick={() => navigate('/makepayment', { state: { product } })} className="App-buttan">Purchase Now</button>
                            </div>
                        </div>
                    </div>
                ))
            }
            <Footer />
        </div>
    )


}
export default Getproducts
