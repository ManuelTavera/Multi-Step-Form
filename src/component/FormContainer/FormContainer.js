import React from "react";

import Button from "@/component/Button";
import { Wrapper, ActionWrapper, SubWrapper, ButtonNext } from "./FormContainer.style";
import FormBody from "./FormBody";
import FormHeader from "./FormHeader";

const HEADING_COPIES = {
  1: {
    title: "Personal info",
    subtitle: "Please provide your name, email address, and phone number.",
  },
  2: {
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing.",
  },
  3: {
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience.",
  },
  4: {
    title: "Finishing up",
    subtitle: "Double-check everything looks OK before confirming.",
  },
  5: {
    title: "",
    subtitle: "",
  },
};

function FormContainer() {
  const currentSteps = 3;

  const { title, subtitle } = HEADING_COPIES[currentSteps];
  return (
    <Wrapper>
      <SubWrapper>
        {currentSteps !== 5 && <FormHeader title={title} subtitle={subtitle} />}
        <FormBody currentSteps={currentSteps} />
      </SubWrapper>
      {currentSteps !== 5 && (
        <ActionWrapper>
          {currentSteps !== 1 && <Button>Go Back</Button>}
          <ButtonNext
            variant={currentSteps === 4 ? "submit" : "continue"}
            type="submit"
          >
            {currentSteps === 4 ? "Confirm" : "Next Step"}
          </ButtonNext>
        </ActionWrapper>
      )}
    </Wrapper>
  );
}

export default FormContainer;
