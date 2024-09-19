import React from "react";

import {
  Wrapper,
  ButtonWrapper,
  PlanSwitchWrapper,
  SwitchRoot,
  SwitchThumb,
  Label,
} from "./FormStepTwo.style";
import PlanComponent from "@/component/PlanComponent";

function FormStepTwo() {
  return (
    <>
      <Wrapper>
        <ButtonWrapper>
          <PlanComponent
            img={"/images/icon-arcade.svg"}
            title="Advanced"
            pricing={"$9/mo"}
            name="plan"
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <PlanComponent
            img={"/images/icon-advanced.svg"}
            title="Advanced"
            pricing={"$12/mo"}
            name="plan"
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <PlanComponent
            img={"/images/icon-pro.svg"}
            title="Advanced"
            pricing={"$12/mo"}
            name="plan"
          />
        </ButtonWrapper>
      </Wrapper>
      <PlanSwitchWrapper>
        <Label data-selected={true}>Monthly</Label>
        <SwitchRoot>
          <SwitchThumb />
        </SwitchRoot>
        <Label data-selected={false}>Yearly</Label>
      </PlanSwitchWrapper>
    </>
  );
}

export default FormStepTwo;
