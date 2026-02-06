"use client";

import { useState } from "react";

interface UseTogglePassword {
  showPassword: boolean;
  handleTogglePassword: () => void;
}

const useTogglePassword = (): UseTogglePassword => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePassword = (): void => {
    setShowPassword(!showPassword);
  };

  return { showPassword, handleTogglePassword };
};

export default useTogglePassword;
