import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// 테마 정의
export const lightTheme = {
  body: '#f5f6fa',
  text: '#333333',
  background: '#ffffff',
  primary: '#1a73e8',
  secondary: '#f3f4f6',
  border: '#e0e0e0',
  shadow: 'rgba(0, 0, 0, 0.1)',
};

export const darkTheme = {
  body: '#121212',
  text: '#f5f5f5',
  background: '#1e1e1e',
  primary: '#90caf9',
  secondary: '#333333',
  border: '#444444',
  shadow: 'rgba(0, 0, 0, 0.3)',
};

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  themeMode: ThemeMode;
  theme: typeof lightTheme | typeof darkTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setThemeMode(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ themeMode, theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 