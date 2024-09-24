import React, { useId } from "react";

import {
  Wrapper,
  Label,
  Input,
  LabelWrapper,
  ErrorText,
} from "./Textfield.style";

const Textfield = React.forwardRef(function ({ label, ...props }, ref) {
  const { errorMessage, ...rest } = props;
  const id = useId();

  return (
    <Wrapper>
      <LabelWrapper>
        <Label htmlFor={id}>{label}</Label>
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </LabelWrapper>
      <Input id={id} {...rest} ref={ref} $hasError={Boolean(errorMessage)} />
    </Wrapper>
  );
});

export default Textfield;
