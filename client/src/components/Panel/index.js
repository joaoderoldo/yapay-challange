import React from 'react';

import { PanelContainer } from './styles';

function Panel({ children }) {
  return <PanelContainer>{children}</PanelContainer>;
}

export default Panel;
