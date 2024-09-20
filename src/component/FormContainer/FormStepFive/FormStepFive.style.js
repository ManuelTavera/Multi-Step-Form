"use client";
import { COLORS, MEDIA_QUERIES } from "@/constant";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  ${MEDIA_QUERIES["mobile"]} {
    padding: 35px 5px;
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: 28px;

  ${MEDIA_QUERIES["mobile"]} {
    width: 70px;
    height: 70px;
  }
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
