import styled from 'styled-components';

export const PanelContainer = styled.div`
  background-color: #3c414a;
  width: 100%;
  max-width: 800px;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0px 1px 10px -1px rgba(60, 65, 74, 1);
  height: 100vh;

  @media screen and (min-width: 768px) {
    padding: 42px;
    height: auto;
  }
`;
