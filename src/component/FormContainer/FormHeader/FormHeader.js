import React from "react";

import { Wrapper, Title, Subtitle } from "./FormHeader.style";

function FormHeader({ title, subtitle }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  );
}

export default FormHeader;
