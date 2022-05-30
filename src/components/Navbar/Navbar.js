import './Navbar.scss';
import PizzaLogo from '../../assets/images/logos/PizzaLogo-black.jpg';
import {Link, NavLink} from 'react-router-dom';
import {useState, useEffect} from 'react';


const Navbar = () => {
    return (
        <>
        <nav>
            <a className='menu-logo' href="/" >
                    <img src={PizzaLogo} alt='logo pizzeria' />
                </a>
            <ul className='menu'>
               
                <NavLink 
                         exact="true" 
                         activeclassname="active" 
                         className={'menu-item'}
                         to="/Pizzas"
                        //  onClick={toggleClass}
                         >
                            Pizzas
                </NavLink>
                
                <NavLink 
                         exact="true" 
                         activeclassname="active" 
                         className={'menu-item'}
                         to="/Burgers"
                        //  onClick={toggleClass}
                         >
                             Burgers
                </NavLink>
                <NavLink 
                         exact="true" 
                         activeclassname="active" 
                         className={'menu-item'}
                         to="/Desserts"
                        //  onClick={toggleClass}
                         >
                           Désserts
                </NavLink>
                <NavLink 
                         exact="true" 
                         activeclassname="active" 
                         className={'menu-item'}
                         to="/Boissons"
                        //  onClick={toggleClass}
                         >
                            Boissons
                </NavLink>
            </ul>
            <button className='mobile-btn'>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
        </>
    );
}

export default Navbar;