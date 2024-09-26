import React from "react";
import { useForm, FormProvider as Provider } from "react-hook-form";

export const StepsContext = React.createContext();

export const INITIAL_VALUES = {
  name: "",
  email: "",
  phone: "",
  plan: "",
  planType: "monthly",
  addOns: [],
};

function FormProvider({ children }) {
  const [currentStep, setCurrentStep] = React.useState(1);
  const methods = useForm({
    defaultValues: INITIAL_VALUES,
    shouldUseNativeValidation: true,
    mode: "all",
  });

  const handleCurrentStepWithValidation = React.useCallback(
    async (step) => {
      if (currentStep === step || currentStep === 5) return;

      const { trigger } = methods;

      const results = await trigger();

      if (results) {
        setCurrentStep(step);
      }
    },
    [methods, currentStep]
  );

  const handleCurrentStep = React.useCallback((step) => {
    setCurrentStep(step);
  }, []);

  return (
    <Provider {...methods}>
      <StepsContext.Provider
        value={{
          currentStep,
          handleCurrentStep,
          handleCurrentStepWithValidation,
        }}
      >
        {children}
      </StepsContext.Provider>
    </Provider>
  );
}

export default FormProvider;
