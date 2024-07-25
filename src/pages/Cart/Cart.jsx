import React from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Cart = () => {

  const { cartItems, removeFromCart, getCartTotal, servicesList, loadCartData, setToken, token, url } = React.useContext(StoreContext);

  useEffect(() => {
    loadCartData(localStorage.getItem('token'));
  }, []);

  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    if (getCartTotal() > 0) {
      navigate('/order');
    } else {
      alert('Please add items to your cart before proceeding to checkout.');
    }
  };

  return (
    <div className='cart-icon'>
      <div className="cart-items">
        <div className="cart-items-header">
          <p className='one'>Service</p>
          <p className='two'>Name</p>
          <p className='cart-description'>Description</p>
          <p className='three'>Date and Time</p>
          <p className='four'>Price</p>
          <p className='five'>Remove</p>
        </div>
        <br />
        <hr className='cart-hr' />
        {token && Object.entries(cartItems)
          .filter(([key, item]) => item.quantity > 0)
          .map(([key, item], index) => {
            const service = servicesList.find(service => service._id === key && service.cost !== null);
            if (!service) return null;

            return (
              <div key={index}>
                <div className='cart-items-name cart-items-item'>
                  <img src={url + "/images/" + service.image} alt={service.name} />
                  <p className='cart-service-name'>{service.name}</p>
                  <p className='service-cart-description'>{cartItems[key].description}</p>
                  <p className='service-date-and-time'>
                    <span className='service-date-and-time-span'>{cartItems[key].date}</span>
                    <span className='service-date-and-time-span'>{cartItems[key].time}</span>
                  </p>
                  <p className='service-cost'>${service.cost}</p>
                  <p className='x-icon' onClick={() => removeFromCart(service.name)}>x</p>
                </div>
                <hr className='cart-hr' />
              </div>
            )
          })}
      </div>
      <div className="cart-container">
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${(getCartTotal()).toFixed(2)}</p>
            </div>
            <hr className='cart-bottom-hr' />
            <div className="cart-total-details">
              <p>Service Fee</p>
              <p>${(getCartTotal() * 0.1).toFixed(2)}</p>
            </div>
            <hr className='cart-bottom-hr' />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${(getCartTotal() * 1.1).toFixed(2)}</b>
            </div>
          </div>
          <button onClick={handleProceedToPayment} className='checkout-button'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Have a promo code? Enter it here:</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Promocode' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart