"use client";
import styled from "styled-components";
import { COLORS } from "@/constant";

export const Wrapper = styled.button`
  display: flex;
  width: 100%;
  background: transparent;
  border: none;
  align-items: center;
  cursor: pointer;
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
`;

export const Text = styled.span`
  font-size: ${13 / 16}rem;
  color: ${COLORS["lightGray"]};
  font-weight: 400;
`;

export const Title = styled.span`
  font-size: ${14 / 16}rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.1rem;
`;
