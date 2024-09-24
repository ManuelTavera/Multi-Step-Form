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
  padding: 10px;
  border: 1px solid ${COLORS["lightGray"]};

  &:focus {
    outline: 1px solid ${COLORS["purplishBlue"]};
  }

  &:invalid {
    outline: 1px solid ${COLORS["strawberryRed"]};
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ErrorText = styled.p`
  color: ${COLORS["strawberryRed"]};
  font-size: ${14 / 16}rem;
  font-weight: 700;
`;
