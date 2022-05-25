import './Card.scss';
import {useState, useEffect} from 'react';


const Card = ({name, description, prix, id}) => {
    return (
        <>
        <div className='card'>
            <h3 className='card-title'>{name}</h3>
            <p className='card-description'>{description}</p>
            <h4 className='card-price'>{prix}</h4>
            <button className='add-to-cart-btn' data-set={id}>Ajouter à la commande</button>
        </div>
        </>
    );
}

export default Card;