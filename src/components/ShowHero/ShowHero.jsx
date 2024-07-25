import React from 'react'
import './ShowHero.css'
import { assets, getHeroImage } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const ShowHero = ({ showHero, setShowHero }) => {

    const { servicesList } = React.useContext(StoreContext);

    return (
        <div className='show-hero'>
            <img src={assets.cross_icon} alt="" className="show-hero-cross-icon" onClick={() => setShowHero("")} />
            <img src={getHeroImage(showHero)} alt="" className="show-hero-image" />
            <div className='show-hero-details'>
                <p className="show-hero-name">{showHero}</p>
                <p className="show-hero-specialization">
                    {servicesList.filter(service => service.cost === null && service.image === showHero).map((service, index) => service.name).join(',  ')}
                </p>
            </div>
        </div>
    )
}

export default ShowHero