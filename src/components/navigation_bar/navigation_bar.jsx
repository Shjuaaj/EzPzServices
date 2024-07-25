import React, { useState } from 'react'
import './navigation_bar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom'

const NavigationBar = ({ setShowLogin }) => {

  const [menu, setMenu] = React.useState("home");
  const { getCartTotal, token, setToken } = React.useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setToken("");
    navigate('/');
  }

  return (
    <div className='navigation-bar'>
      <Link to='/' onClick={() => setMenu("home")}><img src={assets.logo} alt="" className="logo" /></Link>

      <ul className="navigation-bar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu == "home" ? "active" : ""}>home</Link>
        <a href='#services' onClick={() => { navigate('/'); setMenu("services"); }} className={menu == "services" ? "active" : ""}>services</a>
        <a href='#our-heroes' onClick={() => { navigate('/'); setMenu("our-heroes"); }} className={menu == "our-heroes" ? "active" : ""}>our heroes</a>
        <a href='#footer' onClick={() => { navigate('/'); setMenu("contact-us"); }} className={menu == "contact-us" ? "active" : ""}>contact us</a>
      </ul>

      <div className="navigation-bar-right">
        {/* <img src={assets.search_icon} alt="" className="search-icon" /> */}

        <div className="navigation-bar-cart-icon">
          <Link to='/cart'><img src={assets.cart} alt="" className="cart" /></Link>
          <div className={getCartTotal() === 0 ? "" : "dot"}></div>
        </div>
        {!token ?
          <button onClick={() => setShowLogin(true)} className='navigation-bar-sign-in-button'>Sign In</button> :
          <div className='navigation-bar-profile'>
            <img className='navigation-bar-profile-icon' src={assets.profile_icon} alt="" />
            <ul className='navigation-bar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}><img src={assets.orders_icon} alt="" /><p>Service Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>}
      </div>
    </div>
  )
}

export default NavigationBar