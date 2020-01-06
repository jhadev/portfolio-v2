import React from 'react';
import ColorMode from '../components/ColorMode';
import { CSSReset } from '@chakra-ui/core';
import NavDrawer from '../components/NavDrawer';
import ToggleColorMode from '../components/ToggleColorMode';

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
