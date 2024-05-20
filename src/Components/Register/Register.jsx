import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import video2 from '../LoginAssets/video2.mp4'
import logo from '../LoginAssets/logo.png'
import {FaUserShield} from 'react-icons/fa'
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import '../../App.css'
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/register', {name, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
   };


    

  return (
    <div className='registerPage flex'>
        <div className="container flex">
            <div className="videoDiv">
                <video src={video2} autoPlay muted loop></video>

                <div className="textDiv">
                    <h2 className="title">Create and Transport Products</h2>
                    <p>Efficient logistics is a key driver of economic growth..</p>
                </div>

                <div className="footerDiv flex">
                    <span className="text">Have an account</span>
                    <Link to='/'>
                        <button className='btn'>Login</button>
                    </Link>
                </div>
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo Image" />
                    <h3>Let us know you!</h3>
                </div>

                <form action="" className='form grid' onSubmit={handleSubmit}>
                    
                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                        <FaUserShield className='icon'/>
                        <input type="text" id='username' placeholder='Enter username' name='name'
                        onChange={(e) => setName(e.target.value)}
                        />
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="email">Email</label>
                        <div className="input flex">
                        <MdMarkEmailRead className='icon'/>
                        <input type="email" id='email' placeholder='Enter email' name='email'
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                        <BsFillShieldLockFill className='icon'/>
                        <input type="text" id='password' placeholder='Enter password' name='password' 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        </div>
                    </div>

                        <Link to="/dashboard">
                    <button type='submit' className='btn flex'>
                        <span>Register</span>
                        <AiOutlineSwapRight className='icon'/>
                    </button>
                    </Link>

                    
                </form>
            </div>
        </div>
    </div>
  )

  }

export default Register