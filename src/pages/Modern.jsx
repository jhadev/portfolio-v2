import React from 'react';
import { CSSReset, SimpleGrid, Box, Image } from '@chakra-ui/core';
import Container from '../components/Container';
import ColorMode from '../components/ColorMode';
import NavDrawer from '../components/NavDrawer';
import ToggleColorMode from '../components/ToggleColorMode';
import projects from '../projects.json';

const Modern = () => {
  return (
    <ColorMode>
      <CSSReset />
      <div>
        <NavDrawer>
          <ToggleColorMode />
        </NavDrawer>
      </div>
      <div>
        <Container>
          <SimpleGrid minChildWidth="200px" spacing="2px">
            {projects.map(project => {
              // finish map change images props
              return (
                <Box bg="tomato" height="200px" key={project.id}>
                  <Image
                    size="200px"
                    objectFit="cover"
                    objectPosition="5% 5%"
                    src={project.image}
                    alt={project.name}
                  />
                </Box>
              );
            })}
          </SimpleGrid>
        </Container>
      </div>
    </ColorMode>
  );
};

export default Modern;
