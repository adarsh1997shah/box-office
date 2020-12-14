import React from 'react';
import { Link } from 'react-router-dom';

import { StyledShowCard } from '../styles/showCard.styled';
import { Star } from '../styles/styled';

const ShowCard = ({ id, image, name, summary, handleStarred, active }) => {
    const summaryAsText = summary
        ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+>/g, '')}...`
        : 'No description';

    return (
        <StyledShowCard>
            <div className="img-wrapper">
                <img src={image} alt="show" />
            </div>

            <h1>{name}</h1>

            <p>{summaryAsText}</p>

            <div className="btns">
                <Link to={`show/${id}`}>Read More</Link>
                <button id={id} type="button" onClick={handleStarred}>
                    <Star active={active} />
                </button>
            </div>
        </StyledShowCard>
    );
};

export default ShowCard;
