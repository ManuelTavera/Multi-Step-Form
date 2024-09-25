export const COLORS = {
  marineBlue: "hsl(213, 96%, 18%)",
  purplishBlue: "hsl(243, 100%, 62%)",
  pastelBlue: "hsl(228, 100%, 84%)",
  lightBlue: "hsl(206, 94%, 87%)",
  strawberryRed: "hsl(354, 84%, 57%)",
  coolGray: "hsl(231, 11%, 63%)",
  lightGray: "hsl(229, 24%, 87%)",
  magnolia: "hsl(217, 100%, 97%)",
  alabaster: "hsl(231, 100%, 99%)",
  white: "hsl(0, 0%, 100%)",
  black: "hsl(0, 0%, 0%)",
};

export const BREAKPOINTS = {
  tablet: 960,
  mobile: 660,
};

export const MEDIA_QUERIES = {
  tablet: `@media screen and (max-width: ${BREAKPOINTS["tablet"]}px)`,
  mobile: `@media screen and (max-width: ${BREAKPOINTS["mobile"]}px)`,
};

export const PLAN_PRICE = {
  monthly: {
    arcade: 9,
    advanced: 12,
    pro: 15,
  },
  yearly: {
    arcade: 90,
    advanced: 120,
    pro: 150,
  },
};

export const ADD_ONS_PRICE = {
  monthly: {
    online_service: 1,
    larger_storage: 2,
    customizable_profile: 2,
  },
  yearly: {
    online_service: 10,
    larger_storage: 20,
    customizable_profile: 20,
  },
};
