import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { login } from '../features/authentication/authSlice';

const Login = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const [check,setCheck] = useState(false)

  const [errMsg, setErrMsg] = useState("")
  const navigate = useNavigate()
  const location = useLocation()

  const dispatch = useDispatch()

  const handleUsernameInput = (e) => setUsername(e.target.value)
  const handlePasswordInput = (e) => setPassword(e.target.value)

  const togglePasswordVisibility = () => {
    setCheck((prevState) => !prevState)
  }

  const handleSubmit = async (e) => {
    e.preventDefault() 

    try{
      dispatch(login({username,password}))
      setUsername("")
      setPassword("")
      navigate("/")
    }
    catch(error){
      if (!error?.originalStatus){
        setErrMsg(error.response?.data?.detail)
      }
      else if (error.originalStatus === 400){
        setErrMsg(error.response?.data?.detail)
      }
      else if (error.originalStatus === 401) {
        setErrMsg(error.response?.data?.detail);
      } else {
        setErrMsg("Login Failed");
      }
      navigate("/login");
    }
  }


  return (

    <div>
      <div className=' mx-auto mt-16 shadow-lg w-96 bg-pale-gray rounded-lg'>
        <h3 className='text-center uppercase font-extrabold text-xl p-3'>
          Login
        </h3>
        <div>
          {errMsg && 
        <div className="error">
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">  
              {errMsg}!
            </Alert>
          </Stack>  
        </div> }
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col mx-auto p-5'>
          <label>Username :</label>
          <input type='text' required name='username' onChange={handleUsernameInput}  className='pl-1 outline-none py-1 px-1' />
          <label>Password :</label>
          <input type={check ? "text" : "password"} required name='username' onChange={handlePasswordInput} className='pl-1 outline-none py-1 px-1' />
          <div className='flex content-center gap-3 mb-3'>
            <label>Show Password</label>
            <input type="checkbox" checked={check} onChange={togglePasswordVisibility} />
          </div>
          <button className='bg-gradient-to-r from-pink-color to-pale-pink py-3 px-5 rounded-xl text-white font-semibold text-lg shadow-md shadow-pale-pink'>Login</button>
        </form>
        <p className='text-center text-sm pb-3'>
        Don't have an account?
        <Link to="/register" className = "underline text-blued ">
          Register
        </Link>
        </p>
      </div>
    </div>
  )
}

export default Login