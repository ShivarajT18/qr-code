import React, { useContext } from "react";
import { InputContext } from "../App";
import InputField from "./InputField";

const InputForm = () => {
  const { getQrCode } = useContext(InputContext);
  const handleSubmit = () => getQrCode();

  return (
    <div className="col-span-2 p-6 grid gap-4">
      <InputField />
      <button
        onClick={handleSubmit}
        className="bg-blue-400 max-w-xs ml-auto px-4 py-2 text-white rounded"
      >
        Generate QR Code
      </button>
    </div>
  );
};

export default InputForm;