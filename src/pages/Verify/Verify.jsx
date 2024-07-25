import React, { useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');
    const { url } = React.useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        console.log(success, orderId)
        console.log(url)
        const response = await axios.post(url + '/api/order/verify', { orderId, success });
        if (response.data.success) {
            navigate('/myorders')
        }
        else {
            navigate('/')
        }
    }

    useEffect(() => {
        verifyPayment();
    }, []);

    return (
        <div className='verify'>
            <div className="spinner">
            </div>
        </div>
    )
}

export default Verify