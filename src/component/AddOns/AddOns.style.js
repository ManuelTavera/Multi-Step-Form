"use client";
import { COLORS } from "@/constant";
import styled from "styled-components";

export const Wrapper = styled.label`
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 25px;
  border: 1px solid ${COLORS["lightGray"]};
  border-radius: 7px;

  &:hover {
    border: 1px solid ${COLORS["purplishBlue"]};
    cursor: pointer;
  }

  &:has(> input:checked) {
    border: 1px solid ${COLORS["purplishBlue"]};
  }
`;

export const Checkbox = styled.input`
  accent-color: ${COLORS["purplishBlue"]};
  width: 20px;
  height: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const InfoWrapper = styled.span`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const AddOnName = styled.span`
  color: ${COLORS["marineBlue"]};
  font-weight: bold;
  font-size: 1rem;
`;

export const AddOnDescription = styled.span`
  font-size: 1rem;
  color: ${COLORS["coolGray"]};
`;

export const Pricing = styled.span`
  color: ${COLORS["purplishBlue"]};
`;
