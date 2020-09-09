import React from 'react';

import { ButtonContainer } from './styles';

function Button({ children, ...props }) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}

export default Button;
