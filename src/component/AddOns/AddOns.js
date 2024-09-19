import React from "react";

import {
  Wrapper,
  Checkbox,
  InfoWrapper,
  AddOnName,
  AddOnDescription,
  Pricing,
} from "./AddOns.style";

function AddOns({ name, description, pricing }) {
  return (
    <Wrapper>
      <Checkbox type="checkbox" />
      <InfoWrapper>
        <AddOnName>{name}</AddOnName>
        <AddOnDescription>{description}</AddOnDescription>
      </InfoWrapper>
      <Pricing>{pricing}</Pricing>
    </Wrapper>
  );
}

export default AddOns;
