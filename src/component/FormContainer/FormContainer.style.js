"use client";
import styled from "styled-components";

import Button from "@/component/Button";
import { MEDIA_QUERIES, COLORS } from "@/constant";

export const Wrapper = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 85px;

  ${MEDIA_QUERIES["tablet"]} {
    padding: 40px 30px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    padding: 0;
  }
`;

export const SubWrapper = styled.div`
  flex: 1;
  display: flex;
  ${MEDIA_QUERIES["mobile"]} {
    display: block;
    flex: none;
    background-color: ${COLORS["white"]};
    margin: 0px 15px;
    margin-top: -75px;
    border-radius: 10px;
    overflow: hidden;
    padding: 30px 20px;
    box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  margin-top: auto;

  ${MEDIA_QUERIES["mobile"]} {
    background-color: ${COLORS["white"]};
    padding: 20px;
    box-shadow: 0 -3px 10px hsl(0deg 0% 0% / 0.075);
  }
`;

export const ButtonNext = styled(Button)`
  margin-left: auto;
`;
