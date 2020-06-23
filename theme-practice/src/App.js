import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './components/theme';
import {GlobalStyles} from './components/global';

function App() {
  // use a hook to create a local state which will keep track of the current theme and add a function to switch between themes on click
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    // switch between light and dark themes
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme: darkTheme}>
      <>
        <GlobalStyles />
          {/* pass toggle functionality to button */}
        <button onClick={toggleTheme}>Toggle Theme</button>
        <h1>Theme practice!</h1>
        <footer>
        </footer>
      </>
    </ThemeProvider>
  );
}

export default App;
