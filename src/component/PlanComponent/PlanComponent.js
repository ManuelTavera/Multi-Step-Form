import React from "react";

import {
  Wrapper,
  IconWrapper,
  Title,
  Pricing,
  RadioButton,
} from "./PlanComponent.style";

function PlanComponent({ title, pricing, img, name }) {
  return (
    <Wrapper>
      <IconWrapper>
        <img src={img} />
      </IconWrapper>
      <Title>{title}</Title>
      <Pricing>{pricing}</Pricing>
      <RadioButton type="radio" name={name} />
    </Wrapper>
  );
}

export default PlanComponent;
