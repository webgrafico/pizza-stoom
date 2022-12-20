import React from 'react';
import Container, { Label, StepCounter } from './Styles';

interface ISteps {
  current: number;
  max: number;
}

export const Steps = ({ current = 1, max = 1 }: ISteps) => {
  return (
    <Container>
      <Label>Selecione sua massa:</Label>
      <StepCounter>
        {current}/{max}
      </StepCounter>
    </Container>
  );
};
