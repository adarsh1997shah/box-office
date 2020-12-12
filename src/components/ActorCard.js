import React from 'react';

const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {
    const dateFormatter = date => {
        const newDate = new Date(date);
        return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(
            newDate
        );
    };

    return (
        <div>
            <div>
                <img src={image} alt="actors" />
            </div>

            <h1>{name}</h1>
            <p>{gender ? gender : null}</p>
            <p>{country ? `Comes from ${country}` : 'No country known'}</p>
            <p>{birthday ? `Born on ${dateFormatter(birthday)}` : null}</p>
            <p>{deathday ? `Died on ${deathday}` : 'Alive'}</p>
        </div>
    );
};

export default ActorCard;
