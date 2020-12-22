import React from 'react';

const ImageCard = ({ 
    url, 
    children,
    imageUrl,
    imageAlt,
    cardClass }) => (
    <div className={ 'image-card ' + cardClass }>
        <a href={ url } className="image-card__image">
            <img src={ imageUrl } alt={ imageAlt }/>
        </a>
        <div className="image-card__details">
            { children }
        </div>
    </div>
)   

export default ImageCard;