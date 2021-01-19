import styled from 'styled-components';

import { SearchCard } from './styled';

export const StyledShowCard = styled(SearchCard)`
  animation: enter 0.3s ease-in-out both;
  animation-delay: ${({ delay }) => `${delay * 0.1}s`};

  @keyframes enter {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration-color: #000;
      color: #000;
      &:hover {
        text-decoration-color: blue;
        color: blue;
      }
    }
    button {
      outline: none;
      border: 1px solid #8e8e8e;
      border-radius: 15px;
      padding: 5px 20px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
