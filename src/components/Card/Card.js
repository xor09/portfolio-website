import React from 'react';
import './Card.css'


const Card = ({image, title, description, source}) => {
    return (
        <article class="card">
            <img
                class="card__background"
                src={image}
                alt={title}
                width="1920"
                height="2193"
            />
            <div class="card__content | flow">
                <div class="card__content--container | flow">
                <h2 class="card__title">{title}</h2>
                <p class="card__description">{description}</p>
                </div>
                <a class="card__button" href={source}>Project Link</a>
            </div>
        </article>
    );
}

export default Card;
