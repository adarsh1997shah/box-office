import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { getResult } from '../apiGet';

import ShowMainData from '../components/show/ShowMainData';
import Seasons from '../components/show/Seasons';
import Cast from '../components/show/Cast';
import Details from '../components/show/Details';

import { ShowPageWrapper } from '../styles/show.styled';
import { InfoBlock } from '../styles/show.styled';

const initialState = {
    show: null,
    isLoading: true,
    err: null,
};

const reducer = (prevState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { isLoading: false, err: null, show: action.show };
        case 'FETCH_FAILED':
            return { ...prevState, isLoading: false, err: action.err };
        default: {
            return prevState;
        }
    }
};

const Show = () => {
    const [{ show, isLoading, err }, dispatch] = useReducer(
        reducer,
        initialState
    );

    const { showId } = useParams();

    useEffect(() => {
        let isMounted = true;

        async function fetchData() {
            const result = await getResult(
                `shows/${showId}?embed[]=seasons&embed[]=cast`
            );

            if (isMounted) {
                dispatch({ type: 'FETCH_SUCCESS', show: result });
            }
        }

        fetchData().catch(err => {
            if (isMounted) {
                dispatch({ type: 'FETCH_SUCCESS', err: err.message });
            }
        });

        // Unmounting.
        return () => {
            isMounted = false;
        };
    }, [showId]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (err) {
        return <div>Sorry error Occured: {err}</div>;
    }

    return (
        <ShowPageWrapper>
            <ShowMainData
                image={show.image}
                name={show.name}
                rating={show.rating}
                summary={show.summary}
                tags={show.genres}
            />

            <InfoBlock>
                <h2>Details</h2>
                <Details
                    status={show.status}
                    network={show.network}
                    premiered={show.premiered}
                />
            </InfoBlock>

            <InfoBlock>
                <h2>Season</h2>
                <Seasons seasons={show._embedded.seasons} />
            </InfoBlock>

            <InfoBlock>
                <h2>Cast</h2>
                <Cast cast={show._embedded.cast} />
            </InfoBlock>
        </ShowPageWrapper>
    );
};

export default Show;
