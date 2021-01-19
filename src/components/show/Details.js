import React from 'react';
import { dateFormatter } from '../../helper';

import { DetailsWrapper } from '../../styles/details.styled';

const Details = ({ status, premiered, network }) => {
  return (
    <DetailsWrapper>
      <p>
        Status: <span>{status}</span>
      </p>
      <p>
        Premiered {dateFormatter(premiered)}{' '}
        {network ? `on ${network.name}` : null}
      </p>
    </DetailsWrapper>
  );
};

export default Details;
