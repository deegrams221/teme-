import React from 'react';
import {ThemeProvider} from 'styled-components';
import {useDarkMode} from './components/useDarkMode';
import {lightTheme, darkTheme} from './components/theme';
import {GlobalStyles} from './components/global';
import Toggle from './components/toggle';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
        <footer>
          <span>Credits:</span>
          <small><b>Sun</b> icon made by <a href="https://www.flaticon.com/authors/smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
          <small><b>Moon</b> icon made by <a href="https://www.freepik.com/home">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
        </footer>
      </div>
    </ThemeProvider>
  );
};


export default App;