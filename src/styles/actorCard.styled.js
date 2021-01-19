import styled from 'styled-components';

import { SearchCard } from './styled';

export const StyledActorCard = styled(SearchCard)`
  opacity: 0;
  animation: enter 1s normal forwards;
  animation-delay: ${({ delay }) => `${delay * 0.2}s`};

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
  .deathday {
    margin: 0;
    margin-top: 15px;
    font-weight: bold;
  }
`;
