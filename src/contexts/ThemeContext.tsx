import React from "react";

type ThemeContextType = 'light' | 'dark';

const DEFAULT_THEME: ThemeContextType= 'light';

interface ThemeContextValue {
  theme: ThemeContextType,
  setTheme: (theme: ThemeContextType) => void
}

const ThemeContext = React.createContext<ThemeContextValue>({
  theme: DEFAULT_THEME,
  setTheme: (theme: ThemeContextType) => {}
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState<ThemeContextType>(DEFAULT_THEME)

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: theme => setTheme(theme),
      }}
    >
      { children }
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);