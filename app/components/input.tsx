import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  onchange: () => void;
  label: string;
  value: string;
}

export default function Input({
  type,
  onchange,
  placeholder,
  label,value
}: InputProps) {
  return (
    <div className="flex flex-col space-y-3">
      <label className="font-semibold ">{label}</label>
      <input
        className="w-full p-2 rounded-lg border-[1px] outline-none border-[#D6D6D6]"
        type={type}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
      />
    </div>
  );
}
