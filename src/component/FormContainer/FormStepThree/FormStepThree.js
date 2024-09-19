import React from "react";

import { Wrapper } from "./FormStepThree.style";
import AddOns from "@/component/AddOns";

const ADD_ONS = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    pricing: "+$1/mo",
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    pricing: "+$2/mo",
  },
  {
    name: "Customizable Profile",
    description: "Access to multiplayer games",
    pricing: "+$2/mo",
  },
];

function FormStepThree() {
  return (
    <Wrapper>
      {ADD_ONS.map(({ name, description, pricing }, index) => (
        <AddOns
          name={name}
          description={description}
          pricing={pricing}
          key={index}
        />
      ))}
    </Wrapper>
  );
}

export default FormStepThree;
