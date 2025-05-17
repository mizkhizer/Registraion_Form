import React from 'react';

import './LoginSignup.css';
import { useState } from 'react';  

import Email_icon from '../../Assets/Email_icon.png'
import Login_icon from '../../Assets/Login_icon.png'
import Password_icon from '../../Assets/Password_icon.png'

const LoginSignup = () =>
	{
		
		const [action,setAction] = useState("sign up");
		
		
		return (
			
			<div className="container">
				<div className="header">
				<div className="text">{action} </div>
				<div className="underline"></div>
			</div>
			
			<div className="inputs">
				{action==="Login"?<div></div>:<div className="input">
					<img src={Login_icon} alt="" />
					<input placeholder="Name" type="text" />
				</div>}
			</div>		
			
			<div className="input">
				<img src={Email_icon} alt="" />
				<input placeholder="Email id" type="email"/>
			</div>	
			
			<div className="input">
				<img src={Password_icon} alt="" />
				<input placeholder="Password" type="password"/>
			</div>	
			
			{action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password  <span> Click Here!!  </span> </div>}
			
			<div className="submit-container">
				<div className={action==="Login" ? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
				<div className={action==="Sign Up" ? "submit gray": "submit"} onClick={()=>{setAction("Login")}}>Login</div>
			</div>
			
			
		</div>
			
		)
	}
	
export default LoginSignup