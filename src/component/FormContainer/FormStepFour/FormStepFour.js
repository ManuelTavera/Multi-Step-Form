import React from "react";
import { useFormContext } from "react-hook-form";

import {
  Wrapper,
  DescriptionWrapper,
  PlanWrapper,
  Text,
  LinkButton,
  Line,
  AddOnsRow,
  AddOnPrice,
  AddOnsWrapper,
  AddOnName,
  TotalText,
  SubWrapper,
  TotalPrice,
  PlanPrice,
} from "./FormStepFour.style";

import { ADD_ONS_PRICE, PLAN_PRICE } from "@/constant";

function FormStepFour() {
  const { getValues } = useFormContext();
  const [planType, plan, addOns] = getValues(["planType", "plan", "addOns"]);

  const priceSuffix = planType === "monthly" ? "mo" : "yr";
  const planPrice = PLAN_PRICE[planType][plan];
  let addOnsPrice = 0;

  return (
    <>
      <Wrapper>
        <DescriptionWrapper>
          <PlanWrapper>
            <Text>
              {plan} ({planType})
            </Text>
            <LinkButton>Change</LinkButton>
          </PlanWrapper>
          <PlanPrice>
            ${planPrice}/{priceSuffix}
          </PlanPrice>
        </DescriptionWrapper>
        {addOns.length > 0 && (
          <>
            <Line />
            <AddOnsWrapper>
              {addOns.map(({ value, label }) => {
                addOnsPrice += ADD_ONS_PRICE[planType][value];
                return (
                  <AddOnsRow key={value}>
                    <AddOnName>{label}</AddOnName>
                    <AddOnPrice>
                      +${ADD_ONS_PRICE[planType][value]}/{priceSuffix}
                    </AddOnPrice>
                  </AddOnsRow>
                );
              })}
            </AddOnsWrapper>
          </>
        )}
      </Wrapper>
      <SubWrapper>
        <TotalText>
          Total (per {planType === "monthly" ? "month" : "year"})
        </TotalText>
        <TotalPrice>
          +${planPrice + addOnsPrice}/{priceSuffix}
        </TotalPrice>
      </SubWrapper>
    </>
  );
}

export default FormStepFour;
