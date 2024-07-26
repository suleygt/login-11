import React from 'react';
import './App.css';
import { FaGoogle, FaLinkedin, FaGithub } from 'react-icons/fa';

    function App() {
      return (
        <div className="form-container">
        <div className="orange-section p-6">
          <h1 className="title text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="sign mb-4">Sign in with your credentials to enjoy our uninterrupted services.</p>
          <p className="account mb-4">Don't have an account yet?</p>
          <div className="image-container mb-4">
          <img src={`${process.env.PUBLIC_URL}/image 4.png`} alt="Signup" className="sign mb-4" />
          </div>
          <button className="clıck bg-blue-500 text-white px-4 py-2">CLICK HERE TO SIGN UP</button>
        </div>
        <div className="white-section p-6">
        <h2 className="tıtles text-2xl font-bold mb-4">SIGN IN TO SHEY</h2>
      
        <div className="icon-container mb-4">
        <FaGoogle className="h-8 icon" style={{ color: '#EA4335', fontSize: '32px', marginRight: '10px' }} /> 
  <FaLinkedin className="h-8 icon" style={{ color: '#0077B5' }} />
  <FaGithub className="h-8 icon" style={{ color: '#0077B5' }} />
</div>
        <div className="or-divider mb-4">
          <div className="line"></div>
          <span className="mx-2">OR</span>
          <div className="line"></div>
        </div>
        <p className="email mb-4">Use email and password</p>
        <div className="input-container">
        <input type="text" placeholder="Username" className="input border border-gray-300 p-2 mb-2 w-full" />
        <input type="password" placeholder="Password" className="input border border-gray-300 p-2 mb-4 w-full" />
        <button className="button bg-blue-500 text-white px-4 py-2 w-full">LOGIN</button>
      </div>
      </div>
   </div>
  );
}



export default App;
