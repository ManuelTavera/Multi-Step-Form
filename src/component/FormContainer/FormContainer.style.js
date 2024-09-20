"use client";
import styled from "styled-components";

import { MEDIA_QUERIES } from "@/constant";

export const Wrapper = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 85px;

  ${MEDIA_QUERIES["tablet"]} {
    padding: 40px 30px;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;
