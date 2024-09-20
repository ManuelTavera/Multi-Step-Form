import React from "react";

import {
  Wrapper,
  DescriptionWrapper,
  PlanWrapper,
  Text,
  LinkButton,
  Line,
  AddOnsRow,
  AddOnPrice,
  AddOnsWrapper,
  AddOnName,
  TotalText,
  SubWrapper,
  TotalPrice,
} from "./FormStepFour.style";

function FormStepFour() {
  return (
    <>
      <Wrapper>
        <DescriptionWrapper>
          <PlanWrapper>
            <Text>Arcade (Monthly)</Text>
            <LinkButton>Change</LinkButton>
          </PlanWrapper>
          <Text>$9/mo</Text>
        </DescriptionWrapper>
        <Line />
        <AddOnsWrapper>
          <AddOnsRow>
            <AddOnName>Online service</AddOnName>
            <AddOnPrice>+$1/mo</AddOnPrice>
          </AddOnsRow>
          <AddOnsRow>
            <AddOnName>Larger storage</AddOnName>
            <AddOnPrice>+$2/mo</AddOnPrice>
          </AddOnsRow>
        </AddOnsWrapper>
      </Wrapper>
      <SubWrapper>
        <TotalText>Total (per month)</TotalText>
        <TotalPrice>+$12/mo</TotalPrice>
      </SubWrapper>
    </>
  );
}

export default FormStepFour;
