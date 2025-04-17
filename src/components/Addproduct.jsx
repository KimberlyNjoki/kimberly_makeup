import axios from 'axios'
import {useState} from 'react'
const Addproduct=() =>{
    const [product_name,setProductName]=useState ('')
    const [product_description,setProductDescription]=useState ('')
    const [product_cost,setProductCost]=useState ('')
    const [product_photo,setProductPhoto]=useState ([])

    const [loading,setLoading]=useState('')
    const [message,setMessage]=useState('')
    const [error,setError]=useState('')
    
    const submit = async (e) => {
        e.preventDefault()
        setLoading('Please wait as we upload your product')
        try{
            //intialize our empty object=
            const data = new FormData()
            data.append('product_name',product_name )
            data.append('product_description',product_description )
            data.append('product_cost', product_cost)
            data.append('product_photo', product_photo)
            const response= await axios.post(
            'https://kimberlynjoki.pythonanywhere.com/api/add_product', data
          )
          setLoading('')
          setMessage(response.data.message)

        }catch (error){
            setLoading('')
            setError(error.message)







        }
    }


    return(
        <div className='row justify-content-center mt-4 bg-overloy'>
<div className='col-md-6 card shadow p-4 form'>
<h3 className='App-h2'>Upload Products</h3>
{loading}
{message}
{error}
<form onSubmit={submit}>
    <input type='text' placeholder='Enter Product Name' className='form-control' value={product_name}onChange={(e)=>setProductName(e.target.value)} required/> <br>
    </br>
    <textarea className='form-control' placeholer='Describe your product'  value={product_description}onChange={(e)=>setProductDescription(e.target.value)}required></textarea> <br></br>
<input type='number'className='form-control' placeholder='Enter Product Cost'  value={product_cost}onChange={(e)=>setProductCost(e.target.value)}required></input>
<br></br>
<input type='file' className='form-control'accept='image/*'onChange={(e)=>setProductPhoto(e.target.files[0])}required/>
<br>
</br>
<button className='btn btn-primary' type='submit' >Upload Product</button><br/><br/>
</form>
</div>
    </div>
    )
    
    }
    export default Addproduct