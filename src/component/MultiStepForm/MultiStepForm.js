"use client";
import React from "react";
import styled from "styled-components";

import { COLORS } from "@/constant";
import StepsContainer from "@/component/StepsContainer";

function MultiStepForm() {
  return (
    <Wrapper>
      <StepsContainer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1000px;
  background-color: ${COLORS["white"]};
  overflow: hidden;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  max-height: 700px;
  padding: 20px;
  display: flex;
`;

export default MultiStepForm;
