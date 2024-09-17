import React from "react";

import Button from "@/component/Button";
import { Wrapper, ActionWrapper } from "./FormContainer.style";
import FormBody from "./FormBody";
import FormHeader from "./FormHeader";

function FormContainer() {
  return (
    <Wrapper>
      <FormHeader />
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
