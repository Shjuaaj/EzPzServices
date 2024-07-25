import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import {
    AiFillGithub,
    
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" className='footer-logo' />
                    <p>EzPz Seriviics is a fullstack web application wherein users can hire skilled people to do their chores.</p>
                </div>
                <div className="footer-content-center">
                    <h2>INFORMATION</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Our Services</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>CREATOR</h2>
                    <ul>
                        <li>Designed and Developed by:</li>
                        <li> Shivam Upadhyay</li>
                        <li>shivamupadhayay184@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-base">
           
            <p className="footer-copyright">Copyright 2024 © EzPz Seriviics - All Rights Reserved</p>
            
            <div className="socialIcons">
           
              <a
                href="https://github.com/Shjuaaj"
                 className='social-link'
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub  style={{ color: "white" }} className="Icons"/>
              </a>
        
            
            
              <a
                href="https://www.linkedin.com/in/shivam-upadhyay-94359725b/"
                 className='social-link'
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn  style={{ color: "white"}} className="Icons"/>
              </a>
           
            </div>
            </div>
            
        </div>
    )
}

export default Footer