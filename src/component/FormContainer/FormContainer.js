import React from "react";

import Button from "@/component/Button";
import { Wrapper, ActionWrapper } from "./FormContainer.style";
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
  }
};

function FormContainer() {
  const { title, subtitle } = HEADING_COPIES[3];
  return (
    <Wrapper>
      <FormHeader title={title} subtitle={subtitle} />
      <FormBody />
      <ActionWrapper>
        <Button>Go Back</Button>
        <Button variant="continue" type="submit">
          Next Step
        </Button>
      </ActionWrapper>
    </Wrapper>
  );
}

export default FormContainer;
