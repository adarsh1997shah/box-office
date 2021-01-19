import { useEffect, useReducer } from 'react';

export const dateFormatter = date => {
  const newDate = new Date(date);
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(
    newDate
  );
};

const initialFunc = (initial, key) => {
  const isStored = localStorage.getItem(key);
  return isStored ? JSON.parse(isStored) : initial;
};

const showsReducer = (prevState, action) => {
  let arr = [];

  switch (action.type) {
    case 'ADD':
      arr = [...prevState, action.showId];
      break;
    case 'REMOVE':
      arr = prevState.filter(showId => showId !== action.showId);
      break;
    default:
      arr = prevState;
  }

  return arr;
};

const CustomUseReducer = (reducer, initialState, key) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial =>
    initialFunc(initial, key)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
};

export const useShows = (key = 'shows') => {
  return CustomUseReducer(showsReducer, [], key);
};
