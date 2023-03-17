import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { Button } from '@mui/material'

function Auth() {
    return (
        <div className="Auth">
            <div className="authleft">
                <img src={Logo} alt="" />
            </div>
            <div className="webName">
                <h1>Bob Media</h1>
                <h6>Explore your ideas. Spread your wings!</h6>
            </div>
            <SignUp />
            <LogIn />
        </div>
    )
}

function SignUp() {

    return (
        <div className="authright">
            <form action="" className="infoForm">
                <h3>Sign Up</h3>
                <div>
                    <input type="text" placeholder='First Name' className='infoInput' name='firstName' />
                    <input type="text" placeholder='Last Name' className='infoInput' name='lastName' />
                </div>
                <div>
                    <input type="text" placeholder='User Name' className='infoInput' name='UserName' />
                </div>
                <div>
                    <input type="password" placeholder='password' className='infoInput' name='password' />
                    <input type="password" placeholder='Confirm Pass' className='infoInput' name='confirmPass' />
                </div>
                <div>
                    <span style={{ fontSize: '12px' }}>Already have an account. Login</span>
                </div>
                <Button variant="contained" size="small" type="submit">
                    Sign Up
                </Button>
            </form>
        </div>
    )
}

function LogIn() {

    return (
        <div className="authright">
            <form action="" className="infoForm">
                <h3>Log In</h3>
                <div>
                    <input type="text" placeholder='User Name' className='infoInput' name='UserName' />
                </div>
                <div>
                    <input type="password" placeholder='password' className='infoInput' name='password' />
                </div>
                <div>
                    <span style={{ fontSize: '12px' }}>Don't have an account. Sign Up</span>
                </div>
                <Button variant="contained" size="small" type="submit">
                    Login
                </Button>
            </form>
        </div>
    )
}

export default Auth