import React from "react";

import { Wrapper } from "./MultiStepForm.style";
import StepsContainer from "@/component/StepsContainer";
import FormContainer from "@/component/FormContainer";
import FormProvider from "../FormContainer/FormProvider";

function MultiStepForm() {
  return (
    <Wrapper>
      <FormProvider>
        <StepsContainer />
        <FormContainer />
      </FormProvider>
    </Wrapper>
  );
}

export default MultiStepForm;
