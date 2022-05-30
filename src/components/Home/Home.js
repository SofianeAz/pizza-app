import './Home.scss';
import {useState, useEffect} from 'react';
import Hero from '../Hero/Hero';
import MapLocation from '../MapLocation/MapLocation';


const Home = () => {
    return (
        <>
        <div className='home-page'>
            <Hero />
            <MapLocation />
            </div>
        </>
    );
}

export default Home;