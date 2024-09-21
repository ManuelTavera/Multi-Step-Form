import React from "react";

import { Wrapper } from "./FormStepThree.style";
import AddOns from "@/component/AddOns";

const ADD_ONS = [
  {
    label: "Online service",
    description: "Access to multiplayer games",
    pricing: "+$1/mo",
  },
  {
    label: "Larger storage",
    description: "Extra 1TB of cloud save",
    pricing: "+$2/mo",
  },
  {
    label: "Customizable Profile",
    description: "Custom theme on your profile",
    pricing: "+$2/mo",
  },
];

function FormStepThree() {
  return (
    <Wrapper>
      {ADD_ONS.map(({ label, description, pricing }, index) => (
        <AddOns
          label={label}
          description={description}
          pricing={pricing}
          key={index}
        />
      ))}
    </Wrapper>
  );
}

export default FormStepThree;
