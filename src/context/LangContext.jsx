/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("ES");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang debe usarse dentro de LangProvider");
  return context;
};
