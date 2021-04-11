import React, { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client';
import FirendsPage from './Pages/FirendsPage/FirendsPage';
import { Container } from '@material-ui/core';

import './App.css';
import Routes from './Routes';

const ENDPOINT = 'http://localhost:3001'
const SOCKET_OPTIONS = { transports: ['websocket', 'polling', 'flashsocket'] }

function App() {
  // const [response, setResponse] = useState("");
  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT, SOCKET_OPTIONS);
  //   socket.on("FromAPI", data => {
  //     setResponse(data);
  //   });
  // }, []);

  return (
    <>
      <Container style={{ backgroundColor: '#eee', height: '100vh' }} maxWidth="xl">
        <Routes />
      </Container>
    </>
  );
}

export default App;
