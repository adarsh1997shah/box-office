import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    padding: 0.5rem;
    grid-gap: 2rem;
    justify-content: center;
`;

export const SearchCard = styled.div`
    .img-wrapper {
        width: 100%;
        border-radius: 40px;
        height: 350px;
        overflow: hidden;
        border: 1px solid #ddd;

        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }

    h1 {
        margin: 10px 0;
        font-size: 21px;
    }

    p {
        margin: 0;
    }
`;
