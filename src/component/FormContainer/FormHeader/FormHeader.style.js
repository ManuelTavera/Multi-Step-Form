"use client";
import styled from "styled-components";
import { COLORS, MEDIA_QUERIES } from "@/constant";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  ${MEDIA_QUERIES["tablet"]} {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h1`
  color: ${COLORS["marineBlue"]};
  font-size: ${32 / 16}rem;

  ${MEDIA_QUERIES["tablet"]} {
    font-size: ${24 / 16}rem;
  }
`;

export const Subtitle = styled.p`
  color: ${COLORS["coolGray"]};
  font-size: ${16 / 16}rem;
`;
