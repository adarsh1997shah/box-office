import React from 'react';
import ShowCard from '../components/ShowCard';
import ActorCard from '../components/ActorCard';
import IMAGE_NOT_FOUND from '../images/not-found.png';

const SearchResult = ({ searchResult }) => {
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
                ''
            )}
        </>
    );
};

export default SearchResult;
