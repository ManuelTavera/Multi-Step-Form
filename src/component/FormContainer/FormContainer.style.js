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
  ${MEDIA_QUERIES["mobile"]} {
    background-color: ${COLORS["white"]};
    margin: 0px 15px;
    margin-top: -100px;
    border-radius: 10px;
    overflow: hidden;
    padding: 0 30px;
    padding-top: 35px;
    padding-bottom: 35px;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  margin-top: auto;

  ${MEDIA_QUERIES["mobile"]} {
    background-color: ${COLORS["white"]};
    padding: 20px
  }
`;

export const ButtonNext = styled(Button)`
  margin-left: auto;
`;
