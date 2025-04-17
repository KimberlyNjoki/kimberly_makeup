import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'
const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()
    const submit = async (e) => {
        e.preventDefault()
        setLoading('Please wait as we log you in')

        try {

            const data = new FormData()
            data.append('email', email)
            data.append('password', password)

            const response = await axios.post(
                'https://kimberlynjoki.pythonanywhere.com/api/signin', data
            )
            setLoading('')

            if (response.data.user) {
                localStorage.setItem('user', JSON.stringify(response.data.user))
                navigate('/')

            }
            else {
                 
                setError(response.data.message)
            }

        } catch (error) {
            setLoading('')
            setError(error.message)

        }



        //

    }




    return (
        <div className='row justify-content-center mt-5 bg-overloy '>
            <div className='col-md-6 card shadow p-4 form'>
                <h2 className='App-h2'>Sign In</h2>
                {loading}
                {error}
                <form onSubmit={submit}>
                    <input type='email' className='form-control mb-3' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    <br></br>
                    <input type='password' className='form-control mb-3' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                    <button type='submit' className='btn btn-primary'>Signin</button>
                </form> <br></br>
                <p>Don't have an account?<Link to='/Signup'>SignUp</Link></p><br/>
            </div>
        </div>
    )

}
export default Signin