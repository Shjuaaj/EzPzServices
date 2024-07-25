import React from 'react'
import './ShowService.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const ShowService = ({ showService, setShowService }) => {

    const { addToCart, servicesList, token, url } = React.useContext(StoreContext);
    const [description, setDescription] = React.useState('');
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');

    const [isFormValid, setIsFormValid] = React.useState(false);

    React.useEffect(() => {
        setIsFormValid(description !== '' && date !== '' && time !== '');
    }, [description, date, time]);

    const handleAddToCart = (e) => {
        e.preventDefault();
        if (isFormValid) {
            addToCart(showService, description, date, time); // Call addToCart function
            setShowService("");
        }
    };

    return (
        <div className='show-service'>
            <form className="show-service-popup">
                <div className="show-service-title">
                    <h2>{showService}</h2>
                    <img onClick={() => setShowService("")} src={assets.cross_icon} alt="" className='show-service-cross-icon' />
                </div>
                <div>
                    <img src={url + "/images/" + servicesList.find(service => service.name === showService && service.cost !== null).image} alt="" className='show-service-image' />
                </div>
                <div className='show-service-description'>
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="show-service-date-and-time">
                    <div className='show-service-date'>
                        <label htmlFor="serviceDate">Date:</label>
                        <input
                            type="date"
                            id="serviceDate"
                            name="serviceDate"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="show-service-time">
                        <label htmlFor="start-time">Time:</label>
                        <input
                            type="time"
                            id="start-time"
                            name="start-time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className='show-service-cost'>
                    <p>Cost: ${servicesList.find(service => service.name === showService && service.cost !== null).cost}</p>
                </div>
                {token
                    ? <button className="show-service-button" onClick={handleAddToCart} disabled={!isFormValid}>Add to Cart</button>
                    : <button className="show-service-button" onClick={handleAddToCart} disabled={true} >Sign in to add services to cart</button>}

            </form>
        </div>
    )
}

export default ShowService