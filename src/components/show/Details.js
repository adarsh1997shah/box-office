import React from 'react';
import { dateFormatter } from '../../helper';

const Details = ({ status, premiered, network }) => {
    return (
        <div>
            <p>
                Status: <span>{status}</span>
            </p>
            <p>
                Premiered {dateFormatter(premiered)}{' '}
                {network ? `on ${network.name}` : null}
            </p>
        </div>
    );
};

export default Details;
