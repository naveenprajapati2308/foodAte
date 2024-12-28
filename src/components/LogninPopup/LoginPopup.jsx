import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");

    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {/* Conditionally render "Your Name" only for "Sign Up" */}
                    {currState === "Sign Up" ? (
                        <input type="text" placeholder="Your Name" required />
                    ) : null}

                    <input type="email" placeholder="Your Email Id" required />
                    <input type="password" placeholder="Password" required />
                </div>
                <button>
                    {currState === "Sign Up" ? "Create Account" : "Login"}
                </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>I agree to the terms and condition of use & privacy policy.</p>
                </div>
                {/* Correctly toggle between "Sign Up" and "Login" */}
                {currState === "Login" ? (
                    <p>
                        Create a new account?{' '}
                        <span onClick={() => setCurrState("Sign Up")}>Click Here</span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{' '}
                        <span onClick={() => setCurrState("Login")}>Login Here</span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
