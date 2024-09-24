import React from "react";

import {
  Wrapper,
  IconWrapper,
  Title,
  Pricing,
  RadioButton,
  Trial,
} from "./PlanComponent.style";

const PlanComponent = React.forwardRef(function (
  { title, pricing, img, name, trial, ...rest },
  ref
) {
  return (
    <Wrapper>
      <IconWrapper>
        <img src={img} />
      </IconWrapper>
      <div>
        <Title>{title}</Title>
        <Pricing>{pricing}</Pricing>
        <Trial>{trial}</Trial>
      </div>
      <RadioButton type="radio" name={name} ref={ref} {...rest} />
    </Wrapper>
  );
});

export default PlanComponent;
