import React from 'react';
import ShowCard from './ShowCard';
import ActorCard from './ActorCard';
import IMAGE_NOT_FOUND from '../images/not-found.png';

import { useShows } from '../helper';

const SearchResult = ({ searchResult }) => {
    const [state, dispatch] = useShows();

    const handleStarred = e => {
        const el = e.currentTarget;

        if (state.includes(el.id)) {
            dispatch({ type: 'REMOVE', showId: el.id });
        } else {
            dispatch({ type: 'ADD', showId: el.id });
        }
    };
    console.log(state);

    return (
        <>
            {searchResult ? (
                searchResult.length ? (
                    searchResult[0].show ? (
                        searchResult.map(({ show }) => {
                            return (
                                <ShowCard
                                    key={show.id}
                                    id={show.id}
                                    name={show.name}
                                    image={
                                        show.image
                                            ? show.image.medium
                                            : IMAGE_NOT_FOUND
                                    }
                                    summary={show.summary ? show.summary : null}
                                    handleStarred={handleStarred}
                                    active={state.includes(show.id.toString())}
                                />
                            );
                        })
                    ) : (
                        searchResult.map(({ person }) => {
                            return (
                                <ActorCard
                                    key={person.id}
                                    name={person.name}
                                    image={
                                        person.image
                                            ? person.image.medium
                                            : IMAGE_NOT_FOUND
                                    }
                                    gender={person.gender}
                                    country={
                                        person.country
                                            ? person.country.name
                                            : null
                                    }
                                    birthday={person.birthday}
                                    deathday={person.deathday}
                                />
                            );
                        })
                    )
                ) : (
                    <div>No Result</div>
                )
            ) : (
                'Loading...'
            )}
        </>
    );
};

export default SearchResult;
