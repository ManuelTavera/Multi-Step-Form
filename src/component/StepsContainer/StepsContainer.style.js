"use client";
import styled from "styled-components";
import { MEDIA_QUERIES } from "@/constant";

export const Wrapper = styled.div`
  flex: 0 1 35%;
  overflow: hidden;
  border-radius: 13px;
  background-image: url("/images/bg-sidebar-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 45px 35px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${MEDIA_QUERIES["tablet"]} {
    padding: 45px 20px;
  }

  ${MEDIA_QUERIES["mobile"]} {
    justify-content: center;
    flex-direction: row;
    flex: 0 1 25%;
    border-radius: 0;
    background-image: url("/images/bg-sidebar-mobile.svg");
    gap: 10px;
  }
`;
