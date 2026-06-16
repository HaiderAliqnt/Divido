import { useState } from 'react'
import './login.css'

function Login_page() {
  const [count, setCount] = useState(0)

  function Login_func(){

  }
  function create_Redirect(){

  }


  return(
    <>
        <div id="Login-box-container">
            <div id="Login-box">
                <div id="App-title">
                    <h1>DIVIDO</h1>
                </div>
                <div id="Login-title">
                    <h3>LOGIN</h3>
                </div>
                <div id="text-boxes">
                    <input type="text" value="username" className='user_details' placeholder='Username'></input>
                    <input type="text" value="password" className='user_details' placeholder='Password'></input>
                    <label for="password" id='forgot'>Forgot Password?</label>
                </div>
                <div id="login-enter-button-section">
                    <button id="login-enter-button" onClick={Login_func()}>ENTER</button>
                </div>
                <div id="create-account-section">
                    <h4  id="first-time">FIRST TIME?</h4>
                    <button id="create-account-button"onClick={create_Redirect()}>CREATE ACCOUNT</button>
                </div>
            </div>
        </div> 
    </>

  )
 
}

export default Login_page
