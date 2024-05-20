import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import video1 from '../LoginAssets/video1.mp4'
import logo from '../LoginAssets/logo.png'
import {FaUserShield} from 'react-icons/fa'
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import '../../App.css'

const Login = () => {
  return (
    <div className='loginPage flex'>
        <div className="container flex">
            <div className="videoDiv">
                <video src={video1} autoPlay muted loop></video>

                <div className="textDiv">
                    <h2 className="title">Create and Transport Products</h2>
                    <p>Efficient logistics is a key driver of economic growth..</p>
                </div>

                <div className="footerDiv flex">
                    <span className="text">Don't have an account</span>
                    <Link to='/register'>
                        <button className='btn'>SignUp</button>
                    </Link>
                </div>
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo Image" />
                    <h3>Welcome Back!</h3>
                </div>

                <form action="" className='form grid'>
                    <span className='showMessage'>Login Status will go here</span>
                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                        <FaUserShield className='icon'/>
                        <input type="text" id='username' placeholder='Enter username' />
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                        <BsFillShieldLockFill className='icon'/>
                        <input type="text" id='password' placeholder='Enter password' />
                        </div>
                    </div>

                        <Link to="/dashboard">
                    <button type='submit' className='btn flex'>
                        <span>Login </span>
                        <AiOutlineSwapRight className='icon'/>
                    </button>
                    </Link>

                    <span className="forgotPassword">
                        Forgot your password? <a href="">Click Here</a>
                    </span>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login