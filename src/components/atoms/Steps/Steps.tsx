import React from 'react';
import Container, { Label, StepCounter } from './Styles';

interface ISteps {
  current: number;
  max: number;
  headerText: string;
}

export const Steps = ({ current = 1, max = 1, headerText = '' }: ISteps) => {
  return (
    <Container>
      <Label>{headerText}:</Label>
      <StepCounter>
        {current}/{max}
      </StepCounter>
    </Container>
  );
};
