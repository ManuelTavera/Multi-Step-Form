"use client";
import styled from "styled-components";

import { COLORS } from "@/constant";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  color: ${COLORS["marineBlue"]};
  font-size: ${14 / 16}rem;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid ${COLORS["lightGray"]};
  padding: 10px;

  &:focus {
    outline: 1px solid ${COLORS["purplishBlue"]};
  }
`;
