import React from "react";

import { Wrapper } from "./StepsContainer.style";
import StepsButton from "../StepsButton";
import { StepsContext } from "../FormContainer/FormProvider";

const ALL_STEPS = [
  { step: 1, title: "YOUR INFO" },
  { step: 2, title: "SELECT PLAN" },
  { step: 3, title: "ADD-ONS" },
  { step: 4, title: "SUMMARY" },
];

function StepsContainer() {
  const { currentStep, handleCurrentStepWithValidation } =
    React.useContext(StepsContext);

  const handleIsActive = (step) => {
    if (step === 4 && currentStep === 5) {
      return true;
    }

    return currentStep === step;
  };

  return (
    <Wrapper>
      {ALL_STEPS.map(({ step, title }) => {
        const isActive = handleIsActive(step);
        return (
          <StepsButton
            key={step}
            step={step}
            title={title}
            isActive={isActive}
            onClick={() => handleCurrentStepWithValidation(step)}
          />
        );
      })}
    </Wrapper>
  );
}

export default StepsContainer;
