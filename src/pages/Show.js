import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { getResult } from '../apiGet';

const initialState = {
    showDes: null,
    isLoading: true,
    err: null,
};

const reducer = (prevState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { isLoading: false, err: null, showDes: action.showDes };
        case 'FETCH_FAILED':
            return { ...prevState, isLoading: false, err: action.err };
        default: {
            return prevState;
        }
    }
};

const Show = () => {
    const [{ showDes, isLoading, err }, dispatch] = useReducer(
        reducer,
        initialState
    );

    const { showId } = useParams();

    useEffect(() => {
        let isMounted = true;

        async function fetchData() {
            const result = await getResult(
                'shows/1?embed[]=seasons&embed[]=cast'
            );

            if (isMounted) {
                dispatch({ type: 'FETCH_SUCCESS', showDes: result });
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
    console.log(showDes);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (err) {
        return <div>Sorry error Occured: {err}</div>;
    }

    return (
        <div>
            <div>This is Show</div>
        </div>
    );
};

export default Show;
