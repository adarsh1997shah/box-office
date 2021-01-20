import styled from 'styled-components';
// import FadeIn from 'react-fade-in';

const size = {
  mobileL: '425px',
};

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  padding: 0.5rem;
  grid-gap: 2rem;
  justify-content: center;
  margin-bottom: 50px;

  @media (max-width: ${size.mobileL}) {
    grid-template-columns: repeat(auto-fit, 300px);
  }
`;

export const SearchCard = styled.div`
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  .img-wrapper {
    width: 100%;
    height: 350px;
    overflow: hidden;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    @media (max-width: ${size.mobileL}) {
      height: 250px;
    }
  }

  .card-body {
    padding: 16px;
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

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
