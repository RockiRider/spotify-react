import './styles/App.css';
import React, { useState, useEffect, useContext } from 'react';
import { Login, Logout } from './components/AuthFlow';
import { UserContext } from './context/userContext';



function App() {

  const [token, setToken] = useContext(UserContext);

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
      <div className="App">
        {!token ? <Login/> : <Logout/>}
      </div>
  );
}

export default App;
