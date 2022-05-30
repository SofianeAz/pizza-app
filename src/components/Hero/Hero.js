import './Hero.scss';
import {useState, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import heroImage from '../../assets/images/hero/pizza_hero_woodfire.jpg';


const Hero = () => {
    return (
        <>
        <div className='hero-section'>
            <img src={heroImage} className='' alt='hero image' />
            <h1 className='hero-title'>Bienvenue chez&nbsp;<p>HELLO PIZZA</p>&nbsp; !</h1>
            <NavLink 
             exact="true" 
             activeclassname="active" 
             className={'hero-btn'}
             to="/Pizzas">Voir nos pizzas</NavLink>
        </div>
        </>
    );
}

export default Hero;