import React, { useId } from "react";

import { Wrapper, Label, Input } from "./Textfield.style";

function Textfield({ label, ...rest }) {
  const id = useId();

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...rest} />
    </Wrapper>
  );
}

export default Textfield;
