import React from "react";

import { Wrapper } from "./FormBody.style";
import FormStepOne from "../FormStepOne";
import FormStepTwo from "../FormStepTwo";
import FormStepThree from "../FormStepThree";
import FormStepFour from "../FormStepFour";
import FormStepFive from "../FormStepFive";

function FormBody({ currentSteps }) {
  return (
    <Wrapper>
      {currentSteps === 1 && <FormStepOne />}
      {currentSteps === 2 && <FormStepTwo />}
      {currentSteps === 3 && <FormStepThree />}
      {currentSteps === 4 && <FormStepFour />}
      {currentSteps === 5 && <FormStepFive />}
    </Wrapper>
  );
}

export default FormBody;
