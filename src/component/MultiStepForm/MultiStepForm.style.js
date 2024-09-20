"use client";
import styled from "styled-components";

import { COLORS, MEDIA_QUERIES } from "@/constant";

export const Wrapper = styled.div`
  max-width: 1000px;
  background-color: ${COLORS["white"]};
  overflow: hidden;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  max-height: 700px;
  padding: 20px;
  display: flex;
  margin: 0 30px;

  ${MEDIA_QUERIES["mobile"]} {
    margin: 0;
    max-width: none;
    overflow: initial;
    padding: 0;
    max-height: none;
    background-color: ${COLORS["lightBlue"]};
    flex-direction: column;
  }
`;
