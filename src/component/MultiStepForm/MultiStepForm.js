import React, { useState } from "react";

import { Wrapper } from "./MultiStepForm.style";
import StepsContainer from "@/component/StepsContainer";
import FormContainer from "@/component/FormContainer";

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleCurrentStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <Wrapper>
      <StepsContainer
        currentStep={currentStep}
        handleCurrentStep={handleCurrentStep}
      />
      <FormContainer currentStep={currentStep} />
    </Wrapper>
  );
}

export default MultiStepForm;
