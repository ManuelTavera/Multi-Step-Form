"use client";
import { COLORS } from "@/constant";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ImageWrapper = styled.div`
    margin-bottom: 28px;
`;

export const Heading = styled.h1`
  color: ${COLORS["marineBlue"]};
  font-size: ${32 / 16}rem;
  margin-bottom: 12px;
`;

export const Text = styled.p`
  color: ${COLORS["coolGray"]};
  font-size: 1rem;
  text-align: center;
`;
