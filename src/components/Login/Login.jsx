import React, { useEffect } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const Login = ({ setShowLogin }) => {

  const { url, setToken } = React.useContext(StoreContext)

  const [currState, setCurrState] = React.useState("Sign Up")

  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  const onLogin = async (e) => {
    e.preventDefault()
    let newURL = url;

    if (currState === "Login") {
      newURL += "/api/user/login"
    }
    else {
      newURL += "/api/user/register"
    }

    const response = await axios.post(newURL, data)

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token)
      setShowLogin(false)
    }
    else {
      alert(response.data.message)
    }
  }

  return (
    <div className='login'>
      <form onSubmit={onLogin} className="login-popup">
        <div className="login-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" className='cross-icon' />
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? <></> : <input name='name' onChange={handleChange} value={data.name} type="text" placeholder='Name' required />}
          <input name='email' onChange={handleChange} value={data.email} type="email" placeholder='E-Mail' required />
          <input name='password' onChange={handleChange} value={data.password} type="password" placeholder='Password' required />
        </div>
        <button type='submit'>
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms and conditions</p>
        </div>
        {currState === "Login" ?
          <p>Don't have a Chore Hero account? <span onClick={() => setCurrState("Sign Up")}> Click here</span></p> :
          <p>Already have an account? <span onClick={() => setCurrState("Login")}> Login</span></p>}
      </form>
    </div>
  )
}

export default Login