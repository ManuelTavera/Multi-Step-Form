import React from "react";
import { useFormContext, useFormState } from "react-hook-form";

import { Wrapper } from "./FormStepOne.style";
import Textfield from "@/component/Textfield";

function FormStepOne() {
  const { register, control } = useFormContext();
  const { errors } = useFormState({ control });

  return (
    <Wrapper>
      <Textfield
        label={"Name"}
        placeholder={"e.g. Stephen King"}
        errorMessage={errors?.name?.message}
        {...register("name", { required: "This field is required" })}
      />
      <Textfield
        label={"Email Address"}
        placeholder={"e.g. stephenking@lorem.com"}
        type="email"
        errorMessage={errors?.email?.message}
        {...register("email", { required: "This field is required" })}
      />
      <Textfield
        label={"Phone Number"}
        placeholder={"e.g. +1 234 567 890"}
        errorMessage={errors?.phone?.message}
        type="tel"
        {...register("phone", { required: "This field is required" })}
      />
    </Wrapper>
  );
}

export default FormStepOne;
