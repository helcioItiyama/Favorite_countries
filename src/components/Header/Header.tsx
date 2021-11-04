import React from 'react';

import { Container, Title } from './header';

interface IHeader {
  title: string;
}

const Header = ({ title }: IHeader) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
