import React from "react";

import { Wrapper } from "./MultiStepForm.style";
import StepsContainer from "@/component/StepsContainer";
import FormContainer from "@/component/FormContainer";

function MultiStepForm() {
  return (
    <Wrapper>
      <StepsContainer />
      <FormContainer />
    </Wrapper>
  );
}

export default MultiStepForm;
