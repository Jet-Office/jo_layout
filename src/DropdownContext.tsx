import React, { createContext, useState, useContext } from "react";

type DropdownContextType = {
  isDropdownOpen: boolean;
  setDropdownOpen: (isOpen: boolean) => void;
  children?: React.ReactNode;
};
type Props = {
  children: React.ReactNode;
}
const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdownContext must be used within a DropdownProvider");
  }
  return context;
};

export const DropdownProvider: React.FC<Props> = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const setDropdownOpen = (isOpen: boolean) => {
    setIsDropdownOpen(isOpen);
  };

  const contextValue: DropdownContextType = {
    isDropdownOpen,
    setDropdownOpen,
    children,
  };

  return (
    <DropdownContext.Provider value={contextValue}>
      {children}
    </DropdownContext.Provider>
  );
};

