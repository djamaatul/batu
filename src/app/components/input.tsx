import { Input as HeroInput, InputProps } from "@/lib/providers";
import { UseControllerProps, useFormContext } from "react-hook-form";

export default function Input(props: InputProps & UseControllerProps) {
  const ctx = useFormContext();
  return (
    <div className="flex justify-between items-center">
      <HeroInput
        {...props}
        {...ctx.register(props.name)}
        labelPlacement="outside-top"
        onBlur={() => ctx.trigger(props.name)}
        isInvalid={!!ctx.formState.errors[props.name]}
        errorMessage={ctx.formState.errors[props.name]?.message?.toString()}
      />
    </div>
  );
}
