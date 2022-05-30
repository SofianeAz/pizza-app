import './Boisson.scss';
import {useState, useEffect} from 'react';
import Card from '../../Card/Card'
import boissonData from './data';



const items = [];
if(boissonData){
        console.log(boissonData);
        boissonData.forEach((e) => {  
                    items.push(
                    <Card name={e.name} 
                             image={e.image}
                             altImg={e.name}
                             description={e.description} 
                             prix={e.prix} 
                             id={e.id} 
                    />
                    );
        });  
}   

const Boisson = () => {
    return (
        <>
        <div className='boisson-page'>
            <h1 className='page-title'> Boissons </h1>
            <div className='card-container'>
                {items}
            </div>
            
        </div>
        </>
    );
}

export default Boisson;