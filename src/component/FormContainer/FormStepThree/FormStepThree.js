import React from "react";
import { useFormContext } from "react-hook-form";

import { Wrapper } from "./FormStepThree.style";
import AddOns from "@/component/AddOns";
import { ADD_ONS_PRICE } from "@/constant";

const ADD_ONS = [
  {
    label: "Online service",
    description: "Access to multiplayer games",
    value: "online_service",
    monthly: {
      pricing: `+$${ADD_ONS_PRICE.monthly.online_service}/mo`,
    },
    yearly: {
      pricing: `+$${ADD_ONS_PRICE.yearly.online_service}/yr`,
    },
  },
  {
    label: "Larger storage",
    description: "Extra 1TB of cloud save",
    value: "larger_storage",
    monthly: {
      pricing: `+$${ADD_ONS_PRICE.monthly.larger_storage}/mo`,
    },
    yearly: {
      pricing: `+$${ADD_ONS_PRICE.yearly.larger_storage}/yr`,
    },
  },
  {
    label: "Customizable Profile",
    description: "Custom theme on your profile",
    value: "customizable_profile",
    monthly: {
      pricing: `+$${ADD_ONS_PRICE.monthly.customizable_profile}/mo`,
    },
    yearly: {
      pricing: `+$${ADD_ONS_PRICE.yearly.customizable_profile}/yr`,
    },
  },
];

function FormStepThree() {
  const { getValues, watch, setValue } = useFormContext();
  const planType = getValues("planType");
  const addOns = watch("addOns");

  const checkValue = (value) => {
    let isPresent = false;
    for (let index = 0; index < addOns.length; index++) {
      const element = addOns[index];
      if (element.value === value) {
        isPresent = true;
      }
    }

    return isPresent;
  };

  return (
    <Wrapper>
      {ADD_ONS.map(({ label, description, value, ...rest }) => {
        return (
          <AddOns
            label={label}
            description={description}
            pricing={rest[planType].pricing}
            key={value}
            value={value}
            name="addOns"
            onChange={(e) => {
              if (e.target.checked) {
                setValue("addOns", [...addOns, { value, label }]);
              } else {
                const newAddOns = addOns.filter((item) => item.value !== value);
                setValue("addOns", newAddOns);
              }
            }}
            checked={checkValue(value)}
          />
        );
      })}
    </Wrapper>
  );
}

export default FormStepThree;
