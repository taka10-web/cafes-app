"use client";

import { Cafes } from "@/app/cafes/page";
import { createContext, useContext, useState, ReactNode } from "react";

export interface CafeContextProps {
  children: ReactNode;
}

type CafeContextType = {
  cafe: Cafes | undefined;
  setCafe: (cafe: Cafes) => void;
};

const CafeContext = createContext<CafeContextType | undefined>(undefined);

export const CafeProvider = ({ children }: CafeContextProps) => {
  const [cafe, setCafe] = useState<Cafes>();

  return (
    <CafeContext.Provider value={{ cafe, setCafe }}>
      {children}
    </CafeContext.Provider>
  );
};

export function useCafeContext() {
  const context = useContext(CafeContext);
  if (context === undefined) {
    throw new Error("Context is undefind");
  }
  return context;
}
