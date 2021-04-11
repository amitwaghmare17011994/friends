import React, { useEffect } from 'react'
import FirendsPage from './Pages/FirendsPage/FirendsPage';
import io from 'socket.io-client';

import { Container } from '@material-ui/core';
import './App.css';
const ENDPOINT = 'http://localhost:3001'
const SOCKET_OPTIONS = { transports: ['websocket', 'polling', 'flashsocket'] }

function App() {
  useEffect(() => {
    const socket = io(ENDPOINT, SOCKET_OPTIONS);

  }, [])

  return (
    <Container style={{ backgroundColor: '#eee', height: '100vh' }} maxWidth="xl">
      <FirendsPage />
    </Container>
  );
}

export default App;
