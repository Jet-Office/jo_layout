import React from "react";
import { useDropdownContext } from "../../DropdownContext";

export const Dropdown = () => {
  const { isDropdownOpen } = useDropdownContext();

  if (!isDropdownOpen) {
    return null;
  }
  
  return (
    <div className="dropdown">
      <div className="dropdown__content">123</div>
    </div>
  );
};
