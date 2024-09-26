import React from "react";

import {
  Wrapper,
  Checkbox,
  InfoWrapper,
  AddOnName,
  AddOnDescription,
  Pricing,
} from "./AddOns.style";

const AddOns = React.forwardRef(function (
  { label, description, pricing, ...rest },
  ref
) {
  return (
    <Wrapper>
      <Checkbox type="checkbox" ref={ref} {...rest} />
      <InfoWrapper>
        <AddOnName>{label}</AddOnName>
        <AddOnDescription>{description}</AddOnDescription>
      </InfoWrapper>
      <Pricing>{pricing}</Pricing>
    </Wrapper>
  );
});

export default AddOns;
