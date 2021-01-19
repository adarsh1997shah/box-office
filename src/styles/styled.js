import styled from 'styled-components';
// import FadeIn from 'react-fade-in';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
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

export const Star = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: ${props => (props.active ? '#ffc806' : '#ddd')};
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;

export const StarredLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
