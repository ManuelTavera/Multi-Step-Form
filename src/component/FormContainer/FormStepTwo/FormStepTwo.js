import React from "react";
import { useFormContext } from "react-hook-form";

import {
  Wrapper,
  ButtonWrapper,
  PlanSwitchWrapper,
  SwitchRoot,
  SwitchThumb,
  Label,
} from "./FormStepTwo.style";
import PlanComponent from "@/component/PlanComponent";
import { PLAN_PRICE } from "@/constant";

const PLAN_LIST = [
  {
    title: "Arcade",
    value: "arcade",
    image: "/images/icon-arcade.svg",
    monthly: {
      price: `$${PLAN_PRICE.monthly.arcade}/mo`,
    },
    yearly: {
      price: `$${PLAN_PRICE.yearly.arcade}/yr`,
      trial: "2 months free",
    },
  },
  {
    title: "Advanced",
    value: "advanced",
    image: "/images/icon-advanced.svg",
    monthly: {
      price: `$${PLAN_PRICE.monthly.advanced}/mo`,
    },
    yearly: {
      price: `$${PLAN_PRICE.yearly.advanced}/yr`,
      trial: "2 months free",
    },
  },
  {
    title: "Pro",
    value: "pro",
    image: "/images/icon-pro.svg",
    monthly: {
      price: `$${PLAN_PRICE.monthly.pro}/mo`,
    },
    yearly: {
      price: `$${PLAN_PRICE.yearly.pro}/yr`,
      trial: "2 months free",
    },
  },
];

function FormStepTwo() {
  const { register, watch, setValue } = useFormContext();
  const planType = watch("planType");
  const id = React.useId();

  const handleTypePlan = () => {
    if (planType === "monthly") {
      setValue("planType", "yearly");
    } else {
      setValue("planType", "monthly");
    }
  };

  return (
    <>
      <Wrapper>
        {PLAN_LIST.map(({ title, image, value, ...rest }) => (
          <ButtonWrapper key={value}>
            <PlanComponent
              img={image}
              title={title}
              pricing={rest[planType].price}
              name="plan"
              value={value}
              trial={rest[planType]?.trial}
              {...register("plan", { required: "This field is required" })}
            />
          </ButtonWrapper>
        ))}
      </Wrapper>
      <PlanSwitchWrapper>
        <Label
          data-selected={planType === "monthly"}
          htmlFor={`plan-type-${id}`}
        >
          Monthly
        </Label>
        <SwitchRoot id={`plan-type-${id}`} onClick={handleTypePlan}>
          <SwitchThumb />
        </SwitchRoot>
        <Label
          data-selected={planType === "yearly"}
          htmlFor={`plan-type-${id}`}
        >
          Yearly
        </Label>
      </PlanSwitchWrapper>
    </>
  );
}

export default FormStepTwo;
