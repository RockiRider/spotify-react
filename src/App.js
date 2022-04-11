import './styles/App.css';
import React, { useEffect, useContext } from 'react';
import { UserContext } from './context/userContext';
import { FilterProvider, TrackProvider } from './context/trackContext';
import { LoginDisplay } from './components/LoginDisplay';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SpotifyDisplay } from './components/SpotifyDisplay';

function App() {

  const [token, setToken] = useContext(UserContext);
  const darkTheme = createTheme({ palette: { mode: 'dark' } });

  useEffect(() => {
    const hash = window.location.hash;
    let inToken = window.localStorage.getItem("token");
    let state = window.localStorage.getItem("state");

    if(!inToken && hash && state){
      const splitter = hash.substring(1).split('&');
      inToken = splitter.find(el => el.startsWith('access_token')).split('=')[1];
      const recievedState = splitter.find(el => el.startsWith('state')).split('=')[1];
      window.location.hash = '';
      if(state !== recievedState)return;
      window.localStorage.setItem("token",inToken);
      
    }

    if(inToken && !state){
      window.localStorage.removeItem("token");
    }
    setToken(inToken);
  },[])

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        {!token ? <LoginDisplay/> : 
          <TrackProvider>
            <FilterProvider>
              <SpotifyDisplay/>
            </FilterProvider>
          </TrackProvider>}
      </div>
    </ThemeProvider>
  );
}

export default App;
