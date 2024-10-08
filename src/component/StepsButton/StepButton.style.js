"use client";
import styled from "styled-components";
import { COLORS, MEDIA_QUERIES } from "@/constant";

export const Wrapper = styled.button`
  display: flex;
  width: 100%;
  background: transparent;
  border: none;
  align-items: center;
  cursor: pointer;

  ${MEDIA_QUERIES["mobile"]} {
    justify-content: center;
    width: auto;
    align-items: flex-start;
  }
`;

export const Number = styled.span`
  width: 40px;
  background: ${(props) =>
    props.$isActive ? COLORS["lightBlue"] : "transparent"};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: ${16 / 16}rem;
  font-weight: 700;
  color: ${(props) =>
    props.$isActive ? COLORS["marineBlue"] : COLORS["white"]};
  border: ${(props) =>
    props.$isActive ? "none" : `1px solid ${COLORS["white"]}`};
`;

export const TextWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;

  ${MEDIA_QUERIES["tablet"]} {
    margin-left: 10px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    display: none;
  }
`;

export const Text = styled.span`
  font-size: ${12 / 16}rem;
  color: ${COLORS["lightGray"]};
  font-weight: 400;
`;

export const Title = styled.span`
  font-size: ${14 / 16}rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.1rem;

  ${MEDIA_QUERIES["tablet"]} {
    font-size: ${12 / 16}rem;
  }
`;
