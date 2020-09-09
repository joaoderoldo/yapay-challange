import styled from 'styled-components';

export const HeadingContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`;
