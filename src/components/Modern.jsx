import React from 'react';
import ColorMode from './ColorMode';
import { CSSReset } from '@chakra-ui/core';
import NavDrawer from './NavDrawer';
import ToggleColorMode from './ToggleColorMode';

const Modern = () => {
  return (
    <ColorMode>
      <CSSReset />
      <div>
        <NavDrawer>
          <ToggleColorMode />
        </NavDrawer>
      </div>
    </ColorMode>
  );
};

export default Modern;
