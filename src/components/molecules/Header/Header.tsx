import React from 'react';
import { Brand } from '../../atoms/Brand/Brand';
import { Points } from '../../atoms/Points/Points';
import Section, { Container } from './Styles';

export const Header = () => {
  return (
    <Section>
      <Container>
        <Brand />
        <Points value={53} />
      </Container>
    </Section>
  );
};
