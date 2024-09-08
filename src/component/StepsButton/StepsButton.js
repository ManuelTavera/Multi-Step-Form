import React from "react";

import { Wrapper, Number, TextWrapper, Text, Title } from "./StepButton.style";

function StepsButton({ step, title, isActive = false, ...rest }) {
  return (
    <Wrapper {...rest}>
      <Number $isActive={isActive}>{step}</Number>
      <TextWrapper>
        <Text>STEP {step}</Text>
        <Title>{title}</Title>
      </TextWrapper>
    </Wrapper>
  );
}

export default StepsButton;
