import { createContext, useState } from "react";

export const DarModeContext = createContext();

export const DarModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarModeContext.Provider>
  );
};