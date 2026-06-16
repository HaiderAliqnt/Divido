import { useState } from 'react'
import './signup.css'

function SIGNUP_page() {
  const [count, setCount] = useState(0)

  function SignUP_func(){

  }
  function BackButton_redirect(){

  }

  return(
    <>
        <div id="Signup-box-container">
            <div id="signup-box">
                <div id="App-title">
                    <h1>DIVIDO</h1>
                </div>
                <div id="Signup-title">
                    <h3>SIGNUP</h3>
                </div>
                <div id="text-boxes">
                    <input type="text" value="Username" className='user_details' placeholder='Username'></input>
                    <input type="text" value="Password" className='user_details' placeholder='Password'></input>
                    <input type="text" value="Confirm Password" className='user_details' placeholder='Confirm Password'></input>
                    <input type="text" value="Email" className='user_details' placeholder='Email'></input>
                </div>
                <div id="Signup-enter-button-section">
                    <button id="Signup-enter-button" onClick={SignUP_func()}>ENTER</button>
                </div>
                <div id="back-button-section">
                    <button id="Back-Button"onClick={BackButton_redirect()}>GO BACK</button>
                </div>
            </div>
        </div> 
    </>

  )
 
}

export default SIGNUP_page;