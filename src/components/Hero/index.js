import React from 'react';

import { Container, SubTitle } from './styles';

function Hero({ title, subTitle }) {
  return (
    <Container>
      <h1>{title}</h1>
      {subTitle && (
        <SubTitle>{subTitle}</SubTitle>
      )}
    </Container>
  );
}

export default Hero;
