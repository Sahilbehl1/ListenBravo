import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Signup.css';
import '../assets/css/Rectangles.css';
import img from '../assets/images/google.png';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setIsValidEmail(false);
      return;
    }
    navigate('/verification', { state: { email } });
  };

  return (
    <div>
      <div className="rectangles-container">
        <div className="mask"></div>
        <div className="rectangle red"></div>
        <div className="rectangle orange"></div>
      </div>
      <div className="text-container">
        <div className="signup-container">
          Welcome to ListenBravo
        </div>
        <div className="additional-text">
          Listen what your prospects are saying about your competitors on G2, Capterra, and Trustpolit and close them!
        </div>
      </div>
      <div className="button-container">
        <button className="google-button">
          <img src={img} alt="Google Logo" className="google-logo" />
          <p>Continue with Google</p> 
        </button>
      </div>
      <div className="or-text">
        OR
      </div>
      <div className="email-text">
        Sign in with Email
      </div>
      <input
        type="email"
        placeholder="Enter your email id"
        className={`email-input ${!isValidEmail ? 'invalid-email' : ''}`}
        value={email}
        onChange={handleEmailChange}
      />
      {!isValidEmail && (
        <div className="error-message">
          Please enter a valid email id to continue
        </div>
      )}
      <button className="continue-button" disabled={email.trim() === '' || !isValidEmail} onClick={handleSubmit}>
        Continue
      </button>
      <div className='signup-text'>By signing up, you agree to our <a href='#' className='signup-conditions'>Terms & Conditions</a>  and <a href='#' className='signup-conditions'>Privacy Policy</a> </div>
    </div>
  );
};

export default Signup;
