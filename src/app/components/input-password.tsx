import { UseControllerProps } from "react-hook-form";

import Input from "./input";
import { InputProps } from "@heroui/react";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

export default function InputPassword(props: InputProps & UseControllerProps) {
  const [visible, setVisible] = useState(false);

  const type = visible ? "input" : "password";

  const EndContent = () => (
    <button
      aria-label="toggle password visibility"
      className="focus:outline-hidden"
      type="button"
      onClick={() => setVisible(!visible)}
    >
      {visible ? <EyeIcon width={20} /> : <EyeSlashIcon width={20} />}
    </button>
  );
  return <Input {...props} type={type} endContent={<EndContent />} />;
}
