import React from 'react'
import './Services.css'
import { StoreContext } from '../../context/StoreContext'

const Services = ({ setShowService }) => {

    const { servicesList, url } = React.useContext(StoreContext);
    const [loading, setLoading] = React.useState(true);

    // React.useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 8000);

    //     return () => clearTimeout(timer);
    // }, []);

    if (servicesList.length === 0) {
        return (
            <div className='services' id="services">
                <h2>Loading Services...</h2>
                <p className="services-text">Please wait while we fetch the services.</p>
                <div className="services-list">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(index => (
                        <div key={index} className="services-list-name skeleton">
                            <div className="skeleton-image"></div>
                            <div className="skeleton-text"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className='services' id="services">
            <h2>Services</h2>

            <p className="services-text">These are the services we provide!</p>

            <div className="services-list">
                {servicesList.filter(service => service.cost !== null).map((service, index) => {
                    return (
                        <div key={index} className="services-list-name" onClick={() => setShowService(service.name)}>
                            <img src={url + "/images/" + service.image} alt="" />
                            <p>{service.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Services
