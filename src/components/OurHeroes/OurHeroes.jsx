import React from 'react'
import './OurHeroes.css'
import { list_of_heroes } from '../../assets/assets'

const OurHeroes = ({ setShowHero }) => {
    return (
        <div className='our-heroes' id='our-heroes'>
            <h1>Our Heroes</h1>
            <p className="our-heroes-text">Here are some of our talented heroes you can call to do your chores!</p>
            <div className="our-heroes-list">
                {list_of_heroes.map((hero, index) => {
                    return (
                        <div key={index} className="our-heroes-list-hero" onClick={() => setShowHero(hero.hero_name)}>
                            <img src={hero.hero_image} alt={`${hero.hero_name}'s image`} />
                            <p>{hero.hero_name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OurHeroes
