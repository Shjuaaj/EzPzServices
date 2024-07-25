import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import  myVideo  from '../../assets/my_video.mp4'

const Header = () => {
  const navigate = useNavigate();

  const handleViewServices = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className='header'>
    <div className="header-content">
      <h2>Get Your Services </h2>
      <p>Don't have time to clean your house? Want to get your oven repaired? Want to drop off something? Name anything, and our heroes will get it done for you! <br />Save your time!</p>
      <button onClick={handleViewServices}>View Services</button>
    </div>
    <div className="vdeo">
      <video src={`${myVideo}`} autoPlay loop muted></video>
    </div>
  </div>
  )
}

export default Header
