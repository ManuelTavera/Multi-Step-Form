"use client";
import { COLORS, MEDIA_QUERIES } from "@/constant";
import styled from "styled-components";

import Button from "@/component/Button";

export const Wrapper = styled.div`
  padding: 20px;
  background-color: ${COLORS["alabaster"]};
`;

export const SubWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  background: none;
  align-items: center;

  ${MEDIA_QUERIES["mobile"]} {
    padding-bottom: 0;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddOnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AddOnsRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${COLORS["marineBlue"]};
  font-weight: 700;
`;

export const AddOnName = styled.p`
  font-size: 1rem;
  color: ${COLORS["coolGray"]};
`;

export const AddOnPrice = styled.p`
  font-size: 1rem;
  color: ${COLORS["marineBlue"]};
  font-weight: 400;
`;

export const LinkButton = styled(Button)`
  padding: 0;
  width: min-content;
  &:hover {
    text-decoration: underline;
  }
`;

export const Line = styled.hr`
  color: ${COLORS["alabaster"]};
  opacity: 0.5;
  margin-top: 20px;
  margin-bottom: 20px;

  ${MEDIA_QUERIES["mobile"]} {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const TotalText = styled.p`
  font-size: 1rem;
  color: ${COLORS["coolGray"]};
`;

export const TotalPrice = styled.p`
  color: ${COLORS["purplishBlue"]};
  font-size: ${24 / 16}rem;
  font-weight: bold;

  ${MEDIA_QUERIES["mobile"]} {
    font-size: ${18 / 16}rem;
  }
`;
