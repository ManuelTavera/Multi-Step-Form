import React from "react";

import { Wrapper, Title, Subtitle } from "./FormHeader.style";

function FormHeader() {
  return (
    <Wrapper>
      <Title>Personal info</Title>
      <Subtitle>
        Please provide your name, email address, and phone number.
      </Subtitle>
    </Wrapper>
  );
}

export default FormHeader;
