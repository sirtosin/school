import React from 'react'
interface ButtonProps {
  title: string;
  style?: string;
  icon?: JSX.Element;
  onclick?:() => void
}
export default function Button({ title, style, icon, onclick }: ButtonProps) {
  return (
    <button
      onClick={onclick}
      className={`rounded text-xs sm:text-sm px-4 py-2 flex space-x-2 ${style}`}
    >
      {icon} {title}
    </button>
  );
}
