import React from "react";

import { Wrapper } from "./FormStepOne.style";
import Textfield from "@/component/Textfield";

function FormStepOne() {
  return (
    <Wrapper>
      <Textfield label={"Name"} placeholder={"e.g. Stephen King"} required />
      <Textfield
        label={"Email Address"}
        placeholder={"e.g. stephenking@lorem.com"}
        required
      />
      <Textfield
        label={"Phone Number"}
        placeholder={"e.g. +1 234 567 890"}
        required
      />
    </Wrapper>
  );
}

export default FormStepOne;
