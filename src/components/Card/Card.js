import './Card.scss';
import {useState, useEffect} from 'react';


const Card = ({name, image, altImg, description, prix, id, ingredients}) => {
    return (
        <>
        <div className='card'>
            <img src={image} alt={altImg} className='card-img' />
            <h3 className='card-title'>{name}</h3>
            <p className='card-description'>{description}</p>
            <p className={ingredients ? 'card-description' : 'hidden'}>{ingredients}</p>
            <h4 className='card-price'>{prix}</h4>
            <button className='add-to-cart-btn' data-set={id}>Ajouter à la commande</button>
        </div>
        </>
    );
}

export default Card;