import React from "react";

import { Wrapper } from "./FormBody.style";
import FormStepOne from "../FormStepOne";
import FormStepTwo from "../FormStepTwo";
import FormStepThree from "../FormStepThree";

function FormBody() {
  return (
    <Wrapper>
      {/* <FormStepOne /> */}
      {/* <FormStepTwo /> */}
      <FormStepThree />
    </Wrapper>
  );
}

export default FormBody;
