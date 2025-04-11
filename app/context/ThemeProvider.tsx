'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Create theme context with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => null,
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Initialize theme state but don't set a default yet to avoid hydration mismatch
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState<boolean>(false);
  
  // Handle initial theme setup after mount
  useEffect(() => {
    setMounted(true);
    
    // Get stored theme from localStorage or use browser preference
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme: Theme = storedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    
    // Update document class for global CSS
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    console.log("Initial theme setup:", initialTheme);
    console.log("Document class list contains 'dark':", document.documentElement.classList.contains('dark'));
  }, []);
  
  // Function to toggle theme
  const handleThemeChange = (newTheme: Theme) => {
    console.log("Setting theme to:", newTheme);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    console.log("Document class list contains 'dark':", document.documentElement.classList.contains('dark'));
    console.log("Current theme state:", newTheme);
  };
  
  // While not mounted, don't render children to avoid hydration mismatch
  if (!mounted) {
    return null; // or a loading spinner if you prefer
  }
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};