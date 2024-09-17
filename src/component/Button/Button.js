import React from "react";

import { Wrapper } from "./Button.style";
import { COLORS } from "@/constant";

const STYLES = {
  return: {
    backgroundColor: "transparent",
    color: COLORS["coolGray"],
  },
  submit: {
    backgroundColor: COLORS["purplishBlue"],
    color: COLORS["white"],
  },
  continue: {
    backgroundColor: COLORS["marineBlue"],
    color: COLORS["white"],
  },
};

function Button({ children, variant = "return", ...rest }) {
  const { backgroundColor, color } = STYLES[variant];

  return (
    <Wrapper
      {...rest}
      style={{ "--background-color": backgroundColor, "--text-color": color }}
      data-variant={variant}
    >
      {children}
    </Wrapper>
  );
}

export default Button;
