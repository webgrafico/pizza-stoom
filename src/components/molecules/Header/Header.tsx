import React from 'react';
import { Brand } from '../../atoms/Brand/Brand';
import { Points } from '../../atoms/Points/Points';
import Section, { Container } from './Styles';

interface IHeader {
  points: number;
}

export const Header = ({ points = 0 }: IHeader) => {
  return (
    <Section>
      <Container>
        <Brand />
        <Points value={points} />
      </Container>
    </Section>
  );
};
