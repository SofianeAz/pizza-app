import './Pizza.scss';
import {useState, useEffect} from 'react';
import Card from '../../Card/Card';
import pizzaData from './data';



const items = [];
if(pizzaData){
        console.log(pizzaData);
        pizzaData.forEach((e) => {  
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

const Pizza = () => {
    return (
        <>
        <div className='pizza-page'>
            <h1 className='page-title'> Pizzas </h1>
            <div className='card-container'>
                {[items]}
            </div>
        </div>
        </>
    );
}

export default Pizza;