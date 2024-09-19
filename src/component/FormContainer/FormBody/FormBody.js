import React from "react";

import { Wrapper } from "./FormBody.style";
import FormStepOne from "../FormStepOne";
import FormStepTwo from "../FormStepTwo";

function FormBody() {
  return (
    <Wrapper>
      {/* <FormStepOne /> */}
      <FormStepTwo />
    </Wrapper>
  );
}

export default FormBody;
