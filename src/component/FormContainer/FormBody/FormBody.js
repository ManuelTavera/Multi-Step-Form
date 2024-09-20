import React from "react";

import { Wrapper } from "./FormBody.style";
import FormStepOne from "../FormStepOne";
import FormStepTwo from "../FormStepTwo";
import FormStepThree from "../FormStepThree";
import FormStepFour from "../FormStepFour";
import FormStepFive from "../FormStepFive";

function FormBody({ currentStep }) {
  return (
    <Wrapper>
      {currentStep === 1 && <FormStepOne />}
      {currentStep === 2 && <FormStepTwo />}
      {currentStep === 3 && <FormStepThree />}
      {currentStep === 4 && <FormStepFour />}
      {currentStep === 5 && <FormStepFive />}
    </Wrapper>
  );
}

export default FormBody;
