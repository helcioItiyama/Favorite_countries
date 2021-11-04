import React from 'react';

import { Container, Image } from './photo';

interface IPhoto {
  img: string;
}

const Photo: React.FC<IPhoto> = ({ img }) => {
  return (
    <Container>
      <Image source={{ uri: img }} />
    </Container>
  );
};

export default Photo;
