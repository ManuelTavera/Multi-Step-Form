"use client";
import styled from "styled-components";

import { COLORS, MEDIA_QUERIES } from "@/constant";

export const Wrapper = styled.div`
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid ${COLORS["lightGray"]};
  border-radius: 7px;

  &:has(> input:checked) {
    border: 1px solid ${COLORS["purplishBlue"]};
  }

  &:has(> input:focus-visible) {
    outline: 1px solid ${COLORS["purplishBlue"]};
    outline-offset: 2px;
  }

  ${MEDIA_QUERIES["tablet"]} {
    flex-direction: row;
    align-items: center;
  }
`;

export const IconWrapper = styled.div`
  margin-bottom: 40px;

  ${MEDIA_QUERIES["tablet"]} {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

export const Title = styled.p`
  font-size: 1rem;
  color: ${COLORS["marineBlue"]};
  font-weight: bold;
`;

export const Pricing = styled.p`
  font-size: 1rem;
  color: ${COLORS["coolGray"]};

  ${MEDIA_QUERIES["mobile"]} {
    font-size: ${14 / 16}rem;
  }
`;

export const RadioButton = styled.input`
  position: absolute;
  opacity: 0;
  inset: 0;
  cursor: pointer;
`;
