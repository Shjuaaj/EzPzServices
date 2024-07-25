import React, { useEffect } from 'react'
import './OrderService.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const OrderService = () => {

  const { cartItems, getCartTotal, token, servicesList, url } = React.useContext(StoreContext);

  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: ""
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({ ...data, [name]: value }));
  }

  const placeOrder = async (e) => {
    e.preventDefault();

    const form = document.getElementById('order-service-form');
    if (!form.reportValidity()) {
      return;
    }

    let orderServices = [];

    Object.entries(cartItems)
      .filter(([key, item]) => item.quantity > 0)
      .map(([key, item], index) => {
        let service = servicesList.find(service => service._id === key && service.cost !== null);
        service['quantity'] = item.quantity;
        orderServices.push(service)
      });

    let orderData = {
      address: data,
      items: orderServices,
      amount: getCartTotal(),
    }

    let response = await axios.post(url + '/api/order/place', orderData, { headers: { token } });

    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    }
    else {
      alert('Order failed')
    }
  }

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  return (
    <div className='order-service-container'>
      <form id='order-service-form' className="order-service-left">
        <h2 className='order-service-order-details'>Your Details</h2>
        <div className="order-service-line-one">
          <input name='firstName' onChange={handleChange} value={data.firstName} type="text" placeholder='First Name' />
          <input name='lastName' onChange={handleChange} value={data.lastName} type="text" placeholder='Last Name' required />
        </div>
        <input name='email' onChange={handleChange} value={data.email} type="email" placeholder='E-Mail' required />
        <input name='phoneNumber' onChange={handleChange} value={data.phoneNumber} type="text" placeholder='Phone Number' required />
        <input name='address' onChange={handleChange} value={data.address} type="text" placeholder='Address' required />
        <div className="order-service-line-five">
          <input name='city' onChange={handleChange} value={data.city} type="text" placeholder='City' required />
          <input name='state' onChange={handleChange} value={data.state} type="text" placeholder='State' required />
        </div>
        <div className="order-service-line-six">
          <input name='zipCode' onChange={handleChange} value={data.zipCode} type="text" placeholder='Zip Code' required />
          <input name='country' onChange={handleChange} value={data.country} type="text" placeholder='Country' required />
        </div>
      </form>

      <div className="order-service-right">
        <div className="order-service-cost">
          <h2 className='order-service-cart-total'>Cart Total</h2>
          <div className="order-service-details">
            <p>Subtotal</p>
            <p>${(getCartTotal()).toFixed(2)}</p>
          </div>
          <hr className='order-service-right-hr' />
          <div className="order-service-details">
            <p>Service Fee</p>
            <p>${(getCartTotal() * 0.1).toFixed(2)}</p>
          </div>
          <hr className='order-service-right-hr' />
          <div className="order-service-details">
            <b>Total</b>
            <b>${(getCartTotal() * 1.1).toFixed(2)}</b>
          </div>
        </div>
        <button onClick={placeOrder} className='proceed-to-payment-button'>PROCEED TO PAYMENT</button>
      </div>
    </div>
  )
}

export default OrderService