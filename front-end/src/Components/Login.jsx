import { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

function Login(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    axios.defaults.withcredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/login', {email, password})
        .then(res => {
            console.log(res.data)
            //navigate('/login')
        }).catch(err => console.log(err))
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                <form onSubmit = {handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Email</strong>
                    </label>
                    <input 
                        type='email'
                        placeholder='Enter Email'
                        autoComplete='off'
                        name='email'
                        className='form-control rounded-0'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Password</strong>
                    </label>
                    <input 
                        type='password'
                        placeholder='Enter Password'
                        autoComplete='off'
                        name='password'
                        className='form-control rounded-0'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
                </form>
                <p>Don't have an account, Sign up </p>
                <Link to='/SignUp' className='btn btn-default border w-100 bg-light rounded-0'>Sign up</Link>
            </div>
        </div>
    )
}

export default Login