import React from "react";

import { Wrapper, ImageWrapper, Heading, Text } from "./FormStepFive.style";

function FormStepFive() {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src="/images/icon-thank-you.svg" alt="Thank you icon" />
      </ImageWrapper>
      <Heading>Thank you!</Heading>
      <Text>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Text>
    </Wrapper>
  );
}

export default FormStepFive;
