import './Footer.scss';
import {useState, useEffect} from 'react';


const Footer = () => {
    return (
        <>
        <footer>
            <div className='foot-column'>
                    Informations
            </div>
            <div className='foot-column'>
                    Mentions légales
            </div>
            <div className='foot-column'>
                    Contact
            </div>

        </footer>
        </>
    );
}

export default Footer;