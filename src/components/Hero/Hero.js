import './Hero.scss';
import {useState, useEffect} from 'react';
import heroImage from '../../assets/images/hero/pizza_hero_woodfire.jpg';


const Hero = () => {
    return (
        <>
        <div className='hero-section'>
            <img src={heroImage} className='' alt='hero image' />
            <button className='hero-btn'>Voir nos pizzas</button>
        </div>
        </>
    );
}

export default Hero;