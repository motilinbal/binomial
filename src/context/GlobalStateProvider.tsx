import React, { createContext, useContext, useState } from 'react';

// Define the shape of global state
interface GlobalState {
  n: number;
  setN: (n: number) => void;
  theme: string;
  setTheme: (theme: string) => void;
  progress: any;
  setProgress: (progress: any) => void;
}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const GlobalStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [n, setN] = useState(4);
  const [theme, setTheme] = useState('Classic');
  const [progress, setProgress] = useState({});

  return (
    <GlobalStateContext.Provider value={{ n, setN, theme, setTheme, progress, setProgress }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) throw new Error('useGlobalState must be used within GlobalStateProvider');
  return context;
};
