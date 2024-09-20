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

function FormContainer({ currentStep }) {
  const { title, subtitle } = HEADING_COPIES[currentStep];
  return (
    <Wrapper>
      <SubWrapper>
        {currentStep !== 5 && <FormHeader title={title} subtitle={subtitle} />}
        <FormBody currentStep={currentStep} />
      </SubWrapper>
      {currentStep !== 5 && (
        <ActionWrapper>
          {currentStep !== 1 && <Button>Go Back</Button>}
          <ButtonNext
            variant={currentStep === 4 ? "submit" : "continue"}
            type="submit"
          >
            {currentStep === 4 ? "Confirm" : "Next Step"}
          </ButtonNext>
        </ActionWrapper>
      )}
    </Wrapper>
  );
}

export default FormContainer;
