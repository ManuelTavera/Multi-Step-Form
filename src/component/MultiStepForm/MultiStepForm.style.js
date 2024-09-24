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
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);

  ${MEDIA_QUERIES["mobile"]} {
    margin: 0;
    max-width: none;
    overflow: initial;
    padding: 0;
    max-height: none;
    background-color: ${COLORS["alabaster"]};
    flex-direction: column;
    box-shadow: none;
  }
`;
