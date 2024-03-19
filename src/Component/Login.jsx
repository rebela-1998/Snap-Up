import { NavLink } from 'react-router-dom'
import './Login.css'
import { useDispatch,useSelector } from 'react-redux'
import { login } from '../Store/Slices/LoginSlice'
import { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom'

const Login = () => {
    
    const dispatch=useDispatch()
    const user=useSelector(state=>(state.login))
    const navigate=useNavigate()
    const [uname, setUname]=useState('')
    const [pass, setPass]=useState('')

    const loginToAcc=(creds)=>{
       dispatch(login(creds))
    }

    const { loginWithRedirect } = useAuth0();
    
    const isLoggedIn=()=>{
     navigate('/account')
   }

    return (
        <div className='login-section'>
            <p className='login-account'>Login to your account to order now</p>
            <div className='user-creds'>
                <label className='login-username' htmlFor='login-username'>Email Id</label>
                <input className='login-username' type='email' id='login-username' placeholder='Enter your username' onChange={(e)=>setUname(e.target.value)}/>
                <label className='login-password' htmlFor='login-password'>Password</label>
                <input className='login-password' type='password' id='login-password'placeholder='Enter your password' onChange={(e)=>setPass(e.target.value)}/>
            </div>
            <div className='login-signup'>
                <button className='login' type='submit' onClick={() => loginWithRedirect()}>Login</button>
                <p className='no-account'>Don't have any account?
                  <NavLink className='sign-up' to='/signup'>Sign Up</NavLink>
                </p>
                 
            </div>

        </div>
    )
}

export default Login
