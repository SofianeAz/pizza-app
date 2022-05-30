import './Home.scss';
import {useState, useEffect} from 'react';
import Hero from '../Hero/Hero';


const Home = () => {
    return (
        <>
        <div className='home-page'>
            <Hero />

        </div>
        </>
    );
}

export default Home;