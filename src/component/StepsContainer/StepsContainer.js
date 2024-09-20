import React, { useState } from "react";

import { Wrapper } from "./StepsContainer.style";
import StepsButton from "../StepsButton";

const ALL_STEPS = [
  { step: 1, title: "YOUR INFO" },
  { step: 2, title: "SELECT PLAN" },
  { step: 3, title: "ADD-ONS" },
  { step: 4, title: "SUMMARY" },
];

function StepsContainer() {
  const [selectedStep, setSelectedStep] = useState(1);

  return (
    <Wrapper>
      {ALL_STEPS.map(({ step, title }) => {
        const isActive = selectedStep === step;
        return (
          <StepsButton
            key={step}
            step={step}
            title={title}
            isActive={isActive}
            onClick={() => setSelectedStep(step)}
          />
        );
      })}
    </Wrapper>
  );
}

export default StepsContainer;
