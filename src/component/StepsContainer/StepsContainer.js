"use client";
import React, { useState } from "react";
import styled from "styled-components";

import StepsButton from "../StepsButton";

const allSteps = [
  { step: 1, title: "YOUR INFO" },
  { step: 2, title: "SELECT PLAN" },
  { step: 3, title: "ADD-ONS" },
  { step: 4, title: "SUMMARY" },
];

function StepsContainer() {
  const [selectedStep, setSelectedStep] = useState(1);

  return (
    <Wrapper>
      {allSteps.map(({ step, title }) => {
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

const Wrapper = styled.div`
  flex: 0 1 35%;
  overflow: hidden;
  border-radius: 13px;
  background-image: url("/images/bg-sidebar-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 45px 35px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default StepsContainer;
