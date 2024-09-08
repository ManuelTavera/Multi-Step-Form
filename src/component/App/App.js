"use client";
import React from "react";
import styled from "styled-components";

import MultiStepForm from "../MultiStepForm";

function App() {
  return (
    <Wrapper>
      <MultiStepForm />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default App;
