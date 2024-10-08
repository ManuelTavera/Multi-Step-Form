"use client";
import { COLORS, MEDIA_QUERIES } from "@/constant";
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

  ${MEDIA_QUERIES["tablet"]}{
    padding: 15px;
  }

  ${MEDIA_QUERIES["mobile"]}{
    gap: 0px
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

  ${MEDIA_QUERIES["mobile"]}{
    margin-left: 14px;
    margin-right: 10px;
  }
`;

export const AddOnName = styled.span`
  color: ${COLORS["marineBlue"]};
  font-weight: bold;
  font-size: 1rem;

  ${MEDIA_QUERIES["mobile"]}{
    font-size: ${15 / 16}rem;
  }
`;

export const AddOnDescription = styled.span`
  font-size: 1rem;
  color: ${COLORS["coolGray"]};

  ${MEDIA_QUERIES["mobile"]}{
    font-size: ${13 / 16}rem;
  }
`;

export const Pricing = styled.span`
  color: ${COLORS["purplishBlue"]};

  ${MEDIA_QUERIES["mobile"]}{
    font-size: ${14 / 16}rem;
  }
`;
