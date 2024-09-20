"use client";
import styled from "styled-components";
import * as Switch from "@radix-ui/react-switch";
import { COLORS, MEDIA_QUERIES } from "@/constant";

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  ${MEDIA_QUERIES["tablet"]} {
    flex-direction: column;
  }
`;

export const ButtonWrapper = styled.div`
  flex: 1;
`;

export const PlanSwitchWrapper = styled.div`
  padding: 10px;
  background-color: ${COLORS["alabaster"]};
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 30px;
`;

export const SwitchRoot = styled(Switch.Root)`
  background-color: ${COLORS["marineBlue"]};
  width: 45px;
  height: 25px;
  border-radius: 9999px;
  border: none;
  padding: 5px;
`;

export const SwitchThumb = styled(Switch.Thumb)`
  width: 15px;
  height: 15px;
  background-color: ${COLORS["white"]};
  display: block;
  border-radius: 9999px;
  will-change: transform;
  transition: transform 0.1s;

  &[data-state="checked"] {
    transform: translateX(20px);
  }
`;

export const Label = styled.label`
  color: ${COLORS["coolGray"]};
  font-size: 1rem;

  &[data-selected="true"] {
    color: ${COLORS["marineBlue"]};
    font-weight: 500;
  }
`;
