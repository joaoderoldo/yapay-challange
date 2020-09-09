import styled from 'styled-components';

import { rem } from 'polished';

export const TitleElement = styled.h1`
  font-weight: 600;
  font-size: ${rem('32px')};
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: ${rem('48px')};
  }
`;
