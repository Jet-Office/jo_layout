import React from "react";
import "./Button.component.css";

type Props = {
  color?: string;
  text?: string;
  disabled?: boolean;
  onClick?: (() => void) | React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type? :string;
  height?: number
};


export const Button: React.FC<Props> = ({
  color = "default",
  text = "Button",
  disabled = false,
  onClick,
  className,
  height
}) => {
  return (
    <button
      onClick={onClick}
      className={`button button--${color} ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};



