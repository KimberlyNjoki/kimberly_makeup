import{useState} from 'react'
import { Link } from "react-router-dom"
import axios from'axios'
    const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const[success,setSuccess]=useState('')
    const[error,setError]=useState('')
    const[loading,setLoading]=useState('')


     const submit=async(e)=>{
        e.preventDefault()
     
     //set loading hook variable to show loading of message
     setLoading ('Please wait as we upload your data')
     try{

    const data = new FormData()
    data.append('username', username)
    data.append('email', email)
    data.append('phone', phone)
    data.append('password', password)
    //we use axios to post our data to our backend api
    const response= await axios.post(
        'https://kimberlynjoki.pythonanywhere.com/api/signup',data
    )

    setLoading('')
    setSuccess(response.data.success)

     }catch(error){
     setLoading('')
     setError(error.message)
     }
    
    
    
    }

















    return (
       
        <div className='row justify-content-center mt-4 bg-overloy'>
            
            <div className='col-md-6 card shadow p-4 form'>
                <h2 className='App-h2'>Sign Up</h2>
                {loading}
                {error}
                {success}
                <br></br><br></br>
              
                <form onSubmit={submit}>

                    <input type='text' className='form-control' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <br></br>
                    
                    <input type="text" className='form-control' placeholder='Enter Email Address' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <br></br>
                    <input type='password' className='form-control' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <br></br>
                    <input type='text' className='form-control' placeholder='Enter Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    <br/>
                       <br></br> <button type='submit' className='btn btn-primary'>SignUp</button>

                    
                  
                    <br/>
                    <p>Aready have an account?
                        <Link to ='/Signin'>Signin</Link>
                    </p><br/>
                 </form>
                    </div>

            </div>
            
            )

}
            export default Signup