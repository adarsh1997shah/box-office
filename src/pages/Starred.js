import React, { useEffect, useState } from 'react';
import MainPageLaout from '../components/MainPageLayout';
import IMAGE_NOT_FOUND from '../images/not-found.png';
import ShowCard from '../components/ShowCard';

import { useShows } from '../helper';
import { getResult } from '../apiGet';

import { Grid, StarredLoading } from '../styles/styled';

const Starred = () => {
  const [state, dispatch] = useShows();

  const [starred, setStarred] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const starredResult = async () => {
      const res = state.map(id => {
        return getResult(`shows/${id}`);
      });
      const result = await Promise.all(res);

      setIsLoading(false);
      setStarred(result);
      console.log('res', result);
    };

    starredResult().catch(err => {
      setIsLoading(false);
      setErr(err);
    });
  }, [state]);

  const handleStarred = e => {
    const el = e.currentTarget;

    if (state.includes(el.id)) {
      dispatch({ type: 'REMOVE', showId: el.id });
    } else {
      dispatch({ type: 'ADD', showId: el.id });
    }
  };

  if (loading) {
    return <StarredLoading>Loading...</StarredLoading>;
  }

  if (err) {
    return <div>`OOOPS error: ${err.message}`</div>;
  }

  return (
    <MainPageLaout>
      <Grid>
        {starred.length
          ? starred.map((show, index) => {
              return (
                <ShowCard
                  key={show.id}
                  index={index}
                  id={show.id}
                  name={show.name}
                  image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
                  summary={show.summary ? show.summary : null}
                  handleStarred={handleStarred}
                  active={state.includes(show.id.toString())}
                />
              );
            })
          : 'No shows were added to starred.'}
      </Grid>
    </MainPageLaout>
  );
};

export default Starred;
