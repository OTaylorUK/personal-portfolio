// src/context/state.js
import { createContext, useContext } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const ThemeContext = createContext();
// const ThemeContext = createContext(defaultState);

const ThemeProvider = ({ children }) =>{ 

  const [isDark, setIsDark] = useDarkMode()

      return (  
        <ThemeContext.Provider  value={{ isDark, setIsDark}}>
          {children}  
        </ThemeContext.Provider>  
      );
};


export function useThemeContext() {
  return useContext(ThemeContext);
}

export default ThemeContext;
export { ThemeProvider };

    