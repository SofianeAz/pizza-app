import './Burger.scss';
import {useState, useEffect} from 'react';
import Card from '../../Card/Card';

import Data from './data.json';

console.log(Data)

const Burger = () => {

    const items = []
    // const data = getData();
    if(Data){
            Data.forEach((e) => {    items.push(
                        <Card name={e.titre} 
                                 description={e.description} 
                                 prix={e.prix} 
                                 id={e.id} 
                        />
                );
            });  
    }            
              
    
    return (
        <>
        <div className='burger-page'>
            <h1 className='page-title'> Burgers </h1>
            <div className='card-container'>
                    {items}
            </div>
        </div>
        </>
    );
}

export default Burger;