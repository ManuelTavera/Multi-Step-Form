"use client";
import styled from "styled-components";
import { COLORS } from "@/constant";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  color: ${COLORS["marineBlue"]};
  font-size: ${32 / 16}rem;
`;

export const Subtitle = styled.p`
  color: ${COLORS["coolGray"]};
  font-size: ${16 / 16}rem;
`;
