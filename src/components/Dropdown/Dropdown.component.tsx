import React from "react";
import { useDropdownContext } from "../../DropdownContext";

export const Dropdown = () => {
  const { isDropdownOpen } = useDropdownContext();

  if (!isDropdownOpen || !isHovered) {
    return null;
  }
  
  return (
    <div className="dropdown">
      {/* Содержимое дропдауна */}
    </div>
  );
};
