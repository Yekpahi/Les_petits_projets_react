import { useContext, createContext, useState } from 'react';


const ThemeContext = createContext(null);

function UseContext() {
    const [theme, setTheme] = useState('dark');
    return (
      <ThemeContext.Provider value={theme}>
        <Button onClick={() => {
          setTheme('light');
        }}>
          Switch to light theme
        </Button>
      </ThemeContext.Provider>
    );
  }

  function Button({ children }) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
      <button className={className}>
        {children}
      </button>
    );
  }
  export default UseContext