import React from 'react';

import { StyledActorCard } from '../styles/actorCard.styled';

const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {
    const dateFormatter = date => {
        const newDate = new Date(date);
        return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(
            newDate
        );
    };

    return (
        <StyledActorCard>
            <div className="img-wrapper">
                <img src={image} alt="actors" />
            </div>

            <h1>
                {name} {gender ? `(${gender})` : null}
            </h1>
            <p></p>
            <p>{country ? `Comes from ${country}` : 'No country known'}</p>
            <p>{birthday ? `Born on ${dateFormatter(birthday)}` : null}</p>
            <p className="deathday">
                {deathday ? `Died on ${deathday}` : 'Alive'}
            </p>
        </StyledActorCard>
    );
};

export default ActorCard;
