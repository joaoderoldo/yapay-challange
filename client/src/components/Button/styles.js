import styled from 'styled-components';

import { rem } from 'polished';

export const ButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  background: none;
  border: 1px solid #e1eaf2;
  border-radius: 6px;
  color: #e1eaf2;
  font-size: ${rem('16px')};
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  padding: 12px 18px;

  &:hover {
    background: #e1eaf2;
    color: #3c414a;
  }
`;
