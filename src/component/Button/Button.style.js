"use client";
import styled from "styled-components";

import { COLORS } from "@/constant";

export const Wrapper = styled.button`
  background: var(--background-color);
  border: none;
  color: var(--text-color);
  padding: var(--padding);
  border-radius: var(--border-radius);
  min-width: var(--min-width);

  &:hover {
    cursor: pointer;
  }

  [data-variant="continue"]&:hover,
  [data-variant="submit"]&:hover {
    background-color: color-mix(
      in hsl,
      var(--background-color) 80%,
      transparent
    );
  }

  [data-variant="return"]&:hover {
    color: ${COLORS["marineBlue"]};
  }
`;
