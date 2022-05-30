import './Dessert.scss';
import {useState, useEffect} from 'react';
import dessertData from './data';
import Card from '../../Card/Card'
const items = [];
if(dessertData){
        console.log(dessertData);
        dessertData.forEach((e) => {  
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

const Dessert = () => {
    return (
        <>
        <div className='dessert-page'>
            <h1 className='page-title'> Desserts </h1>
            <div className='card-container'>
                {items}
            </div>

        </div>
        </>
    );
}

export default Dessert;