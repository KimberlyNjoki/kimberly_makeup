import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Makepayment = () => {
    const {product}=useLocation().state || {}
    const [phone, setPhone] = useState('')
const[message,setMessage]=useState('')


    const submit = async (e) => {
        e.preventDefault()
        setMessage('Please wait as we process your payment')

        const data= new FormData()
        data.append('phone',phone)
        data.append('amount',product.product_cost)
        
            const response = await axios.post(
                'https://kimberlynjoki.pythonanywhere.com/api/mpesa_payment',data
               
            )
            setMessage(response.data.message)
        
    }

  return (
    <div>
        <nav className='m-4'>
<Link to ='/'className='App-buttan mx-2'>GET ALL PRODUCTS</Link>
        </nav>
        <div className='row justify-content-center mt-4'>
            <div className='col-md-6 card shadow p-4 '>
        <h1 className='App-h2'>Make Payment- Lipa na MPESA</h1>
        <p>Product Name:{product.product_name}</p>
        <p>Product Cost:{product.product_cost}</p>
    <form onSubmit={submit}>
        {message} <br></br>
        <input type='text' placeholder='Enter Your Phone Number'value={phone} onChange={(e) =>setPhone(e.target.value)}/>
        <br></br> <br></br>
        <button className='btn btn-primary'>Make Payment</button>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Makepayment