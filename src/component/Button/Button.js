import React from "react";

import { Wrapper } from "./Button.style";
import { COLORS } from "@/constant";

const STYLES = {
  return: {
    backgroundColor: "transparent",
    color: COLORS["coolGray"],
    padding: 0,
    minWidth: 0,
    borderRadius: 0,
  },
  submit: {
    backgroundColor: COLORS["purplishBlue"],
    color: COLORS["white"],
    padding: "10px 20px",
    minWidth: "115px",
    borderRadius: "7px",
  },
  continue: {
    backgroundColor: COLORS["marineBlue"],
    color: COLORS["white"],
    padding: "10px 20px",
    minWidth: "115px",
    borderRadius: "7px",
  },
};

function Button({ children, variant = "return", ...rest }) {
  const { backgroundColor, color, padding, borderRadius, minWidth } =
    STYLES[variant];

  return (
    <Wrapper
      {...rest}
      style={{
        "--background-color": backgroundColor,
        "--text-color": color,
        "--padding": padding,
        "--border-radius": borderRadius,
        "--min-width": minWidth,
      }}
      data-variant={variant}
    >
      {children}
    </Wrapper>
  );
}

export default Button;
