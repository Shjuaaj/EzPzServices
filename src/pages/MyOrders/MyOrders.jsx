import React, { useEffect } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {

    const [data, setData] = React.useState([]);
    const { token, url } = React.useContext(StoreContext);

    const fetchOrders = async () => {
        const response = await axios.post(url + '/api/order/userorders', {}, { headers: { token } })
        setData(response.data.data);
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    return (
        <div className='my-orders'>
            {data.length === 0 ?
                <h2 className='no-services-ordered'>You have not yet ordered any services</h2> :
                <div>
                    <h2>My Services</h2>
                    <div className="my-orders-container">
                        {data.map((order, index) => {
                            return (
                                <div key={index} className="my-orders-order-container">
                                    <img src={assets.profile_icon} alt="" />
                                    <div className="my-orders-inner">
                                        {order.items.map((item, index) => {
                                            return (
                                                <div key={index} className="my-orders-order">
                                                    <h3>{item.name}</h3>
                                                    <p>{item.date}</p>
                                                    <p>{item.time}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <p className='my-orders-cost'>${order.amount}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>}
        </div>
    )
}

export default MyOrders